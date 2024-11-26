import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "../../themes";
import Utils from "../../utils";

import style from "./style";

const iconMoneyDark = Image.resolveAssetSource(
  require("./../../assets/money.svg")
);
const iconMoneyWhite = Image.resolveAssetSource(
  require("./../../assets/money-white.svg")
);
const iconDollarSign = Image.resolveAssetSource(
  require("./../../assets/dollar-sign.svg")
);

export interface ResumeAccountAdminProps {
  valueSafe: number;
  totalTips: number;
  styleContainer?: any;
  btnWithoutOnPress?: (e: GestureResponderEvent) => void;
}

export default function ResumeAccountAdmin(props: ResumeAccountAdminProps) {
  return (
    <View style={[style.container, props.styleContainer]}>
      <View style={style.containerBody}>
        <View style={style.contentInfo}>
          <View style={style.iconVault}>
            <SvgUri uri={iconDollarSign.uri} height={40} />
          </View>
          <View style={style.title}>
            <Text style={style.titleBlue}>Depositos</Text>
            <Text style={style.titleDark}>/</Text>
            <Text style={style.titleWhite}>Saques</Text>
          </View>
        </View>
        <View style={style.verticalLine} />
        <View style={style.content}>
          <View style={style.groupContent}>
            <SvgUri
              uri={iconMoneyDark.uri}
              width={30}
              color={theme.colors.letterDarkGreen}
            />
            <View style={style.groupContentInfo}>
              <Text style={style.titleGroupContent}>Total Depósitos</Text>
              <Text style={style.valueSafe}>
                {Utils.formatMonetaryNumber(props.valueSafe)}
              </Text>
            </View>
          </View>
          <View style={style.horizontalLine} />
          <View style={style.groupContent}>
            <SvgUri
              uri={iconDollarSign.uri}
              width={30}
              color={theme.colors.letterDarkGreen}
            />
            <View style={style.groupContentInfo}>
              <Text style={style.titleGroupContent}>Total Gorjetas</Text>
              <Text style={style.labelContentBlue}>
                {Utils.formatMonetaryNumber(props.totalTips)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
