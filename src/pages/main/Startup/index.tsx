import * as React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import styles from "./style";
require("../../../assets/hand-coins.png");

export default function Statup() {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} />
      <Text>Meu Porquinho</Text>
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
  );
}
