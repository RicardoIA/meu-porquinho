import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/api";
import { AsyncStorageManager } from "../storage/AsyncStorageManager";
import { StoredItem } from "../utils/enums";
import {
  IAuthContextType,
  IModelUser,
  IUserLogin,
  IUserRegistration,
  IUserResetPassword,
} from "../utils/interfaces";
import { log } from "../utils/log";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};

const useProvideAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IModelUser | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | any>(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setIsLoading(true);
      try {
        const storedUser = await AsyncStorageManager.getItem<string>(
          StoredItem.userToken
        );
        if (storedUser) {
          setToken(storedUser);
          setIsLoggedIn(true);
        }
      } catch (error) {
        log.write("Recovery User (failed)", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async (userLogin: IUserLogin) => {
    try {
      setToken(null);
      setIsLoggedIn(false);
      setIsLoading(true);
      const resp = await authService.login(userLogin);

      if (resp.status !== 200) {
        throw new Error(
          JSON.stringify({
            data: resp.data,
            status: resp.status,
          })
        );
      }

      const token = resp.data?.token;

      if (token) {
        await AsyncStorageManager.setItem(StoredItem.userToken, token);
        setToken(token);

        await getUser();

        setIsLoggedIn(true);
      } else {
        throw new Error("Token de autenticação não encontrado.");
      }

      log.write("Login (success)");
      return true;
    } catch (error) {
      log.write("Login (failed)", error);
      setError(error);
      setIsLoggedIn(false);

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (data: IUserResetPassword) => {
    try {
      setToken(null);
      setIsLoggedIn(false);
      setIsLoading(true);
      setError(null);

      const resp = await authService.resetPassword(data);

      const success = resp.status >= 200 && resp.status <= 299;
      if (!success) {
        setError(resp.data.error);
        throw new Error(
          JSON.stringify({
            data: resp.data,
            status: resp.status,
          })
        );
      }
      log.write("Reset Password (success)", error);

      return true;
    } catch (err) {
      if (!error) {
        setError(err);
      }
      log.write("Reset Password (failed)", err);
      setIsLoggedIn(false);

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const resp = await authService.getUser();

      if (resp.status !== 200) {
        throw new Error(
          JSON.stringify({
            data: resp.data,
            status: resp.status,
          })
        );
      }

      const user: IModelUser | null = resp.data;

      if (user) {
        await AsyncStorageManager.setItem(StoredItem.user, user);
        if (user.role.toLowerCase() === "admin") {
          setIsAdmin(true);
        }

        setUser(user);
      } else {
        throw new Error("Usuário não encontrado.");
      }
    } catch (error) {
      log.write("GetUser (failed)", error);
      setError(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorageManager.removeUser();
      await AsyncStorageManager.removeItem(StoredItem.userToken);

      setToken(null);
      setUser(null);
      setIsAdmin(false);
      setIsLoggedIn(false);

      log.write("Logout (success)");
    } catch (error) {
      log.write("Logout (failed)", error);
    }
  };

  const register = async (data: IUserRegistration) => {
    try {
      setToken(null);
      setIsLoggedIn(false);
      setIsLoading(true);

      const resp = await authService.register(data);

      if (resp.status !== 201) {
        throw new Error(
          JSON.stringify({
            mesage: "Falha ao registrar usuário",
            data: resp.data,
            status: resp.status,
          })
        );
      }

      const user: IModelUser | null = resp.data.user;
      const token = resp.data?.token;

      // check user
      if (user) {
        await AsyncStorageManager.setItem(StoredItem.user, user);
        if (user.role.toLowerCase() === "admin") {
          setIsAdmin(true);
        }

        setUser(user);
      } else {
        throw new Error("Usuário não encontrado.");
      }

      //check token
      if (token) {
        await AsyncStorageManager.setItem(StoredItem.userToken, token);
        setToken(token);

        await getUser();

        setIsLoggedIn(true);
      } else {
        throw new Error("Token de autenticação não encontrado.");
      }

      log.write("Register (success)");
      return true;
    } catch (error) {
      log.write("Register (failed)", JSON.stringify(error));
      setError(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    logout,
    register,
    resetPassword,
    isLoading,
    isLoggedIn,
    isAdmin,
    error,
    user,
    token,
  };
};
