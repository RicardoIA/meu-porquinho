import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/api";
import { IAuthContextType, IModelUser, IUserLogin } from "../utils/interfaces";
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
  const [user, setUser] = useState<string | IModelUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setIsLoading(true);
      try {
        const storedUser = await AsyncStorage.getItem("userToken");
        if (storedUser) {
          setUser(storedUser);
          console.log("storedUser", storedUser);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Erro ao carregar estado do usuário:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async (userLogin: IUserLogin) => {
    setUser(null);
    setIsLoggedIn(false);

    try {
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
        await AsyncStorage.setItem("userToken", token);
        setUser(token);
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

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return {
    user,
    login,
    logout,
    isLoading,
    isLoggedIn,
  };
};
