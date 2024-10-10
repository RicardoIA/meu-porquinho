import * as React from "react";
import { Keyboard, Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";

export interface InputPasswordProps {
  placeholder?: string;
  labelField: string;
  value: string;
  valid?: boolean | string;
  onChangeText?: (value: string) => void;
}

export default function InputPassword(props: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  function onPressEye() {
    setShowPassword(!showPassword);
  }

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
        placeholder="●●●●●●●●"
        outlineStyle={[
          style.outlineStyle,
          isInvalid() ? style.outlineErrorStyle : null,
        ]}
        outlineColor={colors.lightGreen}
        placeholderTextColor={colors.gray}
        value={props.value}
        secureTextEntry={!showPassword}
        defaultValue=""
        onChangeText={props.onChangeText}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            forceTextInputFocus={false}
            onPressIn={onPressEye}
          />
        }
      />
      {isInvalid() && (
        <Text style={style.alert}>
          {props.valid === false ? "Campo inválido" : props.valid}
        </Text>
      )}
    </View>
  );
}
