import * as React from "react";
import { Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";

export default function InputField(props: any) {
  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}

      <TextInput
        mode="outlined"
        autoCapitalize="none"
        style={style.textInput}
        placeholder={props.placeholder}
        autoComplete={Platform.OS === "web" ? "none" : "off"}
        outlineStyle={style.outlineStyle}
        outlineColor={colors.lightGreen}
        placeholderTextColor={colors.gray}
        defaultValue={props.value}
        {...props}
      />
    </View>
  );
}
