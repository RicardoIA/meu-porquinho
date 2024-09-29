import * as React from "react";
import { Image, Platform, Text, View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import { colors } from "../../themes";
import style from "./style";

const iconRequired = require("./../../assets/dollar-sign.svg");
const icon = Image.resolveAssetSource(iconRequired);

export default function InputField(props: any) {
  return (
    <View style={style.container}>
      {props.labelField && <Text style={style.label}>{props.labelField}</Text>}

      <IconButton
        icon={() => (
          <SvgUri uri={icon.uri} height={40} color={colors.letersAndIcons} />
        )}
        iconColor={colors.letersAndIcons}
        style={style.icon}
        mode="contained"
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
