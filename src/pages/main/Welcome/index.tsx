import * as React from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-paper";
import InputField from "../../../components/InputField";
import InputTip from "../../../components/InputTip";
import * as theme from "./../../../themes";
import style from "./style";

export default function Welcome() {
  const [value, setValue] = React.useState("");

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={[style.container]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>
            Parabéns! Você atingiu sua meta! :)
          </Text>
        </View>
        <View style={[theme.style.bodyContainer, { gap: 20 }]}>
          <InputField
            placeholder="nome12322"
            labelField="Usuário / E-mail"
            value={value}
            onChangeText={(value: string) => setValue(value)}
          />

          <InputTip placeholder="R$ 150,00" />
          <Button mode="contained" onPress={() => console.log(value)}>
            go
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
