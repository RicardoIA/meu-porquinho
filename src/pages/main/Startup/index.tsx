import * as React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import * as theme from "./../../../themes";
import style from "./style";

export default function Statup() {
  return (
    <View style={theme.style.fullScreenContainer}>
      <Image style={style.logo} source={require("../../../assets/logo.png")} />

      <View style={style.titleContainer}>
        <Text style={theme.style.title}>Meu Porquinho</Text>
      </View>
      <View style={style.buttons}>
        <Button mode="contained" onPress={() => console.log("Login")}>
          Login
        </Button>
        <Button mode="contained" onPress={() => console.log("Register")}>
          Cadastro
        </Button>
        <Button mode="text" onPress={() => console.log("ForgetPassword")}>
          Esqueceu a senha
        </Button>
      </View>
    </View>
  );
}
