import * as React from "react";
import { KeyboardTypeOptions, Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";
import Utils from "../../utils";
import { LegacyRef } from "react";

export interface InputFieldProps {
  placeholder: string | undefined;
  labelField: string;
  value: string;
  valid?: boolean | string;
  keybordType?: KeyboardTypeOptions | undefined;
  autoFocus?: boolean | undefined;
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
        autoFocus={props.autoFocus}
        mode="outlined"
        autoCapitalize="none"
        style={[
          style.textInput,
          isInvalid() ? style.errorStyle : style.defaultStyle,
        ]}
        outlineStyle={[
          style.outlineStyle,
          isInvalid() ? style.outlineErrorStyle : null,
        ]}
        placeholderTextColor={colors.gray}
        placeholder={props.placeholder}
        focusable={true}
        keyboardType={props.keybordType}
        outlineColor={colors.lightGreen}
        value={props.value}
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
