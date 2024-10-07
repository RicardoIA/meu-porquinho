import * as React from "react";
import { Keyboard, Platform, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../themes";
import style from "./style";

export default function InputPassword(props: any) {
  const [showPassword, setShowPassword] = React.useState(false);

  function onPressEye() {
    setShowPassword(!showPassword);
  }
  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}

      <TextInput
        mode="outlined"
        autoCapitalize="none"
        style={style.textInput}
        placeholder="●●●●●●●●"
        autoComplete={Platform.OS === "web" ? "none" : "off"}
        outlineStyle={style.outlineStyle}
        outlineColor={colors.lightGreen}
        placeholderTextColor={colors.gray}
        defaultValue={props.value}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            forceTextInputFocus={false}
            onPressIn={onPressEye}
          />
        }
        {...props}
      />
    </View>
  );
}
