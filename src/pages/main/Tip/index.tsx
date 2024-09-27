import * as React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { Icon, MD3Colors, TextInput } from "react-native-paper";

import * as theme from "./../../../themes";
import style from "./style";

export default function Main() {
  const [text, setText] = React.useState("");

  return (
    <View style={[style.container]}>
      <View style={theme.style.header}>
        <Text style={theme.style.headerTitle}>
          Parabéns! Você atingiu sua meta! :)
        </Text>
      </View>
      <View style={theme.style.bodyContainer}>
        <Image
          style={theme.style.image}
          source={require("./../../../assets/hand-coins.png")}
        />
        <Text>Gostaria de deixar uma gorjeta para o app?</Text>
        <Text>
          Suar gorjeta nos ajuda a manter o Meu Porquinho funcionando :)
        </Text>

        <View>
          <Icon source="camera" color={MD3Colors.error50} size={20} />
          <TextInput
            label="R$"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <Button mode="contained" onPress={() => console.log("Login")}>
          Deixar Gorjeta
        </Button>
      </View>
    </View>
  );
}
