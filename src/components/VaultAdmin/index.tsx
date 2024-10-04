import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import { StackNavigation } from "../../routes";
import * as theme from "./../../themes";
import style from "./style";
import UserWithdraw from "../../pages/user/Withdraw";

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

export interface VaultAdminProps {
  title: string;
  valueSafe: number;
  totalTips: number;
  styleContainer?: any;
  btnWithoutOnPress?: (e: GestureResponderEvent) => void;
}

export default function VaultAdmin(props: VaultAdminProps) {
  const { navigate } = useNavigation<StackNavigation>();

  function goToLogin() {
    navigate("UserWithdraw");
  }

  return (
    <View style={[style.container, props.styleContainer]}>
      <View style={style.containerBody}>
        <View style={style.contentInfo}>
          <View style={style.iconVault}>
            <SvgUri uri={iconMoneyWhite.uri} height={40} color="white" />
          </View>
          <Text style={style.title}>{props.title}</Text>
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
              <Text style={style.titleGroupContent}>Total Depósitos</Text>
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
              <Text style={style.titleGroupContent}>Total Gorjetas</Text>
              <Text style={style.labelContentBlue}>${props.totalTips}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
