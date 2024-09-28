import * as React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import * as theme from "../../../themes";
import style from "./style";
import { StackNavigation } from "../../../routes";

export default function Welcome() {
  const { navigate } = useNavigation<StackNavigation>();

  const goToLogin = () => {
    navigate("Login");
  };

  const goToRegister = () => {
    navigate("Register");
  };

  const goToRecoverPassword = () => {
    navigate("RecoverPassword");
  };

  return (
    <View style={theme.style.fullScreenContainer}>
      <View style={style.headerContainer}>
        <Image
          style={style.logo}
          source={require("../../../assets/logo.png")}
        />

        <View style={style.titleContainer}>
          <Text style={theme.style.title}>Meu Porquinho</Text>
        </View>
      </View>
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
          mode="contained"
          textColor={theme.colors.letterDarkGreen}
          buttonColor={theme.colors.lightGreen}
          labelStyle={theme.style.firstButtonLabel}
          contentStyle={theme.style.firstButtonContainer}
          onPress={goToRegister}
        >
          Cadastro
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
      </View>
    </View>
  );
}
