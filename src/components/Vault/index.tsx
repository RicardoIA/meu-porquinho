import * as React from "react";
import { Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "./../../themes";
import style from "./style";

const iconMoneyRequired = require("./../../assets/money.svg");
const iconMoney = Image.resolveAssetSource(iconMoneyRequired);
const iconMoneyWhiteRequired = require("./../../assets/money-white.svg");
const iconMoneyWhite = Image.resolveAssetSource(iconMoneyWhiteRequired);
const iconCalendarRequired = require("./../../assets/calendar.svg");
const iconCalendar = Image.resolveAssetSource(iconCalendarRequired);

export interface VaultProps {
  withdrawDate: string;
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
        <View style={style.horizontalLine} />
        <View style={style.groupContent}>
          <SvgUri
            uri={iconCalendar.uri}
            width={30}
            color={theme.colors.letterDarkGreen}
          />
          <View style={style.groupContentInfo}>
            <Text style={style.titleGroupContent}>Data para saque:</Text>
            <Text style={style.withdrawDate}>{props.withdrawDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
