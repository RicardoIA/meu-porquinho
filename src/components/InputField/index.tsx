import * as React from "react";
import { Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";
import Utils from "../../utils";

export interface InputFieldProps {
  placeholder: string | undefined;
  labelField: string;
  value: string;
  valid?: boolean | string;
  onChangeText?: (value: string) => void;
}

export default function InputField(props: InputFieldProps) {
  function isInvalid() {
    return props.valid === false || typeof props.valid === "string";
  }

  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}

      <TextInput
        mode="outlined"
        autoCapitalize="none"
        style={[
          style.textInput,
          isInvalid() ? style.errorStyle : style.defaultStyle,
        ]}
        placeholder={props.placeholder}
        outlineStyle={[
          style.outlineStyle,
          isInvalid() ? style.outlineErrorStyle : null,
        ]}
        outlineColor={colors.lightGreen}
        placeholderTextColor={colors.gray}
        value={props.value}
        defaultValue=""
        onChangeText={props.onChangeText}
      />
      {isInvalid() && (
        <Text style={style.alert}>
          {props.valid === false ? "Campo inválido" : props.valid}
        </Text>
      )}
    </View>
  );
}
