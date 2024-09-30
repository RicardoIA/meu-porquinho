import * as React from "react";
import { Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "./../../themes";
import style from "./style";

const iconMoney = Image.resolveAssetSource(require("./../../assets/money.svg"));
const iconMoneyWhite = Image.resolveAssetSource(
  require("./../../assets/money-white.svg")
);
const iconHandKey = Image.resolveAssetSource(
  require("./../../assets/hand-key.svg")
);
const iconCalendar = Image.resolveAssetSource(
  require("./../../assets/calendar.svg")
);

export interface VaultProps {
  withdrawDate?: string;
  pixKey?: string;
  valueSafe: number;
  title: string;
}

export default function Vault(props: VaultProps) {
  return (
    <View style={style.container}>
      <View style={style.contentInfo}>
        <Text style={style.title}>{props.title}</Text>

        <View style={style.iconVault}>
          <SvgUri uri={iconMoneyWhite.uri} height={40} color="white" />
        </View>
      </View>
      <View style={style.verticalLine} />
      <View style={style.content}>
        <View style={style.groupContent}>
          <SvgUri
            uri={iconMoney.uri}
            width={30}
            color={theme.colors.letterDarkGreen}
          />
          <View style={style.groupContentInfo}>
            <Text style={style.titleGroupContent}>Valor Guardado</Text>
            <Text style={style.valueSafe}>${props.valueSafe}</Text>
          </View>
        </View>
        {props.withdrawDate && (
          <>
            <View style={style.horizontalLine} />
            <View style={style.groupContent}>
              <SvgUri
                uri={iconCalendar.uri}
                width={30}
                color={theme.colors.letterDarkGreen}
              />
              <View style={style.groupContentInfo}>
                <Text style={style.titleGroupContent}>Data para saque</Text>
                <Text style={style.labelContentBlue}>{props.withdrawDate}</Text>
              </View>
            </View>
          </>
        )}
        {props.pixKey && (
          <>
            <View style={style.horizontalLine} />
            <View style={style.groupContent}>
              <SvgUri
                uri={iconHandKey.uri}
                width={30}
                color={theme.colors.letterDarkGreen}
              />
              <View style={style.groupContentInfo}>
                <Text style={style.titleGroupContent}>Pix para saque</Text>
                <Text style={style.labelContentBlue}>{props.pixKey}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
