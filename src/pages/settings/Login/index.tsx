import { CommonActions, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import InputField from "../../../components/InputField";
import InputPassword from "../../../components/InputPassword";
import { useAuth } from "../../../hooks/useAuth";
import { StackNavigation } from "../../../routes";
import Utils from "../../../utils";
import * as theme from "./../../../themes";
import style from "./style";

export default function Home() {
  const navigation = useNavigation<StackNavigation>();
  const { login, user, isAdmin } = useAuth();

  const [username, setUsername] = React.useState("ricardo");
  const [password, setPassword] = React.useState("admin");
  const [loginInvalid, setLoginInvalid] = React.useState<boolean | null>(null);
  const [loginLoading, setLoginLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (user) {
      if (isAdmin) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "AdminHome" }],
          })
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "UserHome" }],
          })
        );
      }

      setLoginInvalid(false);
    }
  }, [user]);

  const handleLogin = async () => {
    setLoginLoading(true);
    try {
      if (Utils.isEmpty(username) || Utils.isEmpty(password)) {
        return;
      }

      login({ username, password })
        .then((success) => {
          if (success) {
            setLoginInvalid(false);
          } else {
            throw new Error("failed Login");
          }

          setLoginLoading(false);
        })
        .catch((e) => {
          setLoginInvalid(true);
          setLoginLoading(false);
        });
    } catch (error) {
      setLoginInvalid(true);
      setLoginLoading(false);
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const goToRecoverPassword = () => {
    navigation.navigate("RecoverPassword");
  };

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Bem vindo!</Text>
        </View>

        <View style={[theme.style.bodyContainer, style.body]}>
          <View style={style.bodyContainer}>
            <InputField
              placeholder="example@example.com"
              labelField="Usuário / E-mail"
              value={username}
              onChangeText={(value: string) => setUsername(value)}
            />

            <InputPassword
              labelField="Senha"
              value={password}
              onChangeText={(value: string) => setPassword(value)}
            />
          </View>
          {loginInvalid === true && (
            <Text style={style.alertError}>E-mail ou senha inválidos</Text>
          )}
          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={handleLogin}
              loading={loginLoading}
              disabled={loginLoading}
            >
              Login
            </Button>
            <Button
              textColor={theme.colors.letterDarkGreen}
              rippleColor={theme.colors.lightGreen}
              labelStyle={theme.style.firstTextButtonLabel}
              mode="text"
              onPress={goToRecoverPassword}
            >
              Esqueceu a senha
            </Button>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              buttonColor={theme.colors.lightGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={goToRegister}
            >
              Cadastro
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
