import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "../../themes";
import style from "./style";
import Utils from "../../utils";

const iconMoney = Image.resolveAssetSource(
  require("./../../assets/money-white.svg")
);
const iconDollarSign = Image.resolveAssetSource(
  require("./../../assets/dollar-sign-white.svg")
);

export interface TransactionResumeProps {
  valueSafe: number;
  valueProfit: number;
}

export default function TransactionResume(props: TransactionResumeProps) {
  return (
    <View style={[style.container]}>
      <View style={style.containerBody}>
        <View style={style.content}>
          <View style={style.icon}>
            <SvgUri uri={iconMoney.uri} height={40} />
          </View>
        </View>
        <View style={style.contentInfo}>
          <Text style={style.title}>Em Caixa</Text>
          <Text style={style.description}>Depósitos + Gorjetas</Text>
        </View>
        <View style={style.verticalLine} />
        <View style={style.content}>
          <Text style={style.time}>Mensal</Text>
        </View>
        <View style={style.verticalLine} />
        <View style={style.contentValue}>
          <Text style={style.valueSafe}>
            {Utils.formatMonetaryNumber(props.valueSafe)}
          </Text>
        </View>
      </View>
      <View style={style.containerBody}>
        <View style={style.content}>
          <View style={style.icon}>
            <SvgUri uri={iconDollarSign.uri} height={40} color="white" />
          </View>
        </View>
        <View style={style.contentInfo}>
          <Text style={style.title}>Lucro</Text>
          <Text style={style.description}>Caixa - Saques</Text>
        </View>
        <View style={style.verticalLine} />
        <View style={style.content}>
          <Text style={style.time}>Mensal</Text>
        </View>
        <View style={style.verticalLine} />
        <View style={style.contentValue}>
          <Text style={style.labelContentBlue}>
            {Utils.formatMonetaryNumber(props.valueProfit)}
          </Text>
        </View>
      </View>
    </View>
  );
}
