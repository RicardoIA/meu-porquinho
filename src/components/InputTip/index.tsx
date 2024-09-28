import * as React from "react";
import { Platform, Text, View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";

export default function InputField(props: any) {
  const [value, setValue] = React.useState("");

  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}

      <IconButton
        icon={require("D:/dev/course/react/meu-porquinho/src/assets/hand-coins.png")} //"D:/dev/course/react/meu-porquinho/src/assets/logo.svg"
        iconColor={colors.letersAndIcons}
        size={20}
        onPress={() => console.log("Pressed")}
      />
      <TextInput
        mode="outlined"
        autoCapitalize="none"
        style={style.textInput}
        placeholder={props.placeholder}
        autoComplete={Platform.OS === "web" ? "none" : "off"}
        outlineStyle={style.outlineStyle}
        outlineColor={colors.mainGreen}
        textColor={colors.lightGreen}
        placeholderTextColor={colors.lightGreen}
        defaultValue={props.value}
        keyboardType="numeric"
        {...props}
      />
    </View>
  );
}
