import * as React from "react";
import { Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";
import Utils from "../../utils";
import { LegacyRef } from "react";
import { DatePickerInput } from "react-native-paper-dates";

export interface InputFieldProps {
  placeholder?: string | undefined;
  labelField: string;
  value: Date | undefined;
  valid?: boolean | string;
  invalidMessage?: string;
  autoFocus?: boolean | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function InputDate(props: InputFieldProps) {
  function isInvalid() {
    return props.valid === false || typeof props.valid === "string";
  }

  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}
      <DatePickerInput
        style={[
          style.textInput,
          isInvalid() ? style.errorStyle : style.defaultStyle,
        ]}
        outlineStyle={[
          style.outlineStyle,
          isInvalid() ? style.outlineErrorStyle : null,
        ]}
        label=""
        hasError={isInvalid()}
        locale="pt"
        value={props.value}
        onChange={props.onChange}
        outlineColor={colors.lightGreen}
        inputMode="start"
        mode="outlined"
      />
      {isInvalid() && (
        <Text style={style.alert}>
          {props.valid === false
            ? props.invalidMessage ?? "Campo inválido"
            : props.valid}
        </Text>
      )}
    </View>
  );
}
