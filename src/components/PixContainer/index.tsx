import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "./../../themes";
import style from "./style";
import { Button } from "react-native-paper";

const iconHandKey = Image.resolveAssetSource(
  require("./../../assets/hand-key.svg")
);

export interface VaultProps {
  pixKey?: string | null | undefined;
  btnEditOnPress: (e: GestureResponderEvent) => void;
}

export default function PixContainer(props: VaultProps) {
  return (
    <View style={style.container}>
      <View style={style.containerBody}>
        <SvgUri uri={iconHandKey.uri} height={40} />
        <View>
          <Text style={style.title}>Pix pra saque</Text>
          <Text style={style.value}>
            {props.pixKey ?? "00.000.000/0000-00"}
          </Text>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.ultraLightGreen}
          buttonColor={theme.colors.blue}
          style={style.button}
          labelStyle={style.buttonLabel}
          contentStyle={style.buttonContainer}
          onPress={props.btnEditOnPress}
        >
          Editar
        </Button>
      </View>
    </View>
  );
}
