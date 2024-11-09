import * as React from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import * as theme from "../../../themes";
import style from "./style";
import InputField from "../../../components/InputField";

export default function EditField() {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<any>(null);

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
            placeholder="example@example.com"
            labelField="Usuário / E-mail"
            value={value}
            onChangeText={(value: string) => setValue(value)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
