import * as React from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputField from "../../../components/InputField";
import * as theme from "./../../../themes";
import style from "./style";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import Utils from "../../../utils";
import InputPassword from "../../../components/InputPassword";

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginInvalid, setLoginInvalid] = React.useState(false);

  const goToLogin = () => {
    console.log(user, "|", password);
    if (Utils.isEmpty(user) || Utils.isEmpty(password)) {
      setLoginInvalid(true);
      return;
    }

    setLoginInvalid(false);
    navigate("UserHome");
  };

  const goToRegister = () => {
    navigate("Register");
  };

  const goToRecoverPassword = () => {
    navigate("RecoverPassword");
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
              value={user}
              onChangeText={(value: string) => setUser(value)}
            />

            <InputPassword
              labelField="Senha"
              value={password}
              onChangeText={(value: string) => setPassword(value)}
            />
          </View>

          {loginInvalid && (
            <Text style={style.alertError}>E-mail ou senha inválidos</Text>
          )}
          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={goToLogin}
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
