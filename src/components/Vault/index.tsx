import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import { StackNavigation } from "../../routes";
import * as theme from "./../../themes";
import style from "./style";
import UserWithdraw from "../../pages/user/Withdraw";
import Utils from "../../utils";

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
  title: string;
  valueSafe: number;
  withdrawDate?: Date;
  pixKey?: string;
  styleContainer?: any;
  btnWithout?: boolean;
  btnWithoutDisable?: boolean;
  btnWithoutOnPress?: (e: GestureResponderEvent) => void;
}

export default function Vault(props: VaultProps) {
  const { navigate } = useNavigation<StackNavigation>();

  var withdrawDisable = true;
  if (props.withdrawDate) {
    withdrawDisable = props.withdrawDate >= new Date();
  }

  function goToLogin() {
    navigate("UserWithdraw");
  }

  return (
    <View style={[style.container, props.styleContainer]}>
      <View style={style.containerBody}>
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
              <Text style={style.valueSafe}>
                {Utils.formatMonetaryNumber(props.valueSafe)}
              </Text>
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
                  <Text style={style.labelContentBlue}>
                    {props.withdrawDate?.toLocaleDateString()}
                  </Text>
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
                  <Text style={[style.labelContentBlue, style.labelPix]}>
                    {props.pixKey}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
      {props.btnWithout && (
        <Button
          mode="contained"
          textColor={theme.colors.ultraLightGreen}
          buttonColor={theme.colors.blue}
          style={[theme.style.secondButton, style.button]}
          labelStyle={theme.style.secondButtonLabel}
          contentStyle={theme.style.secondButtonContainer}
          disabled={withdrawDisable}
          onPress={goToLogin}
        >
          SACAR
        </Button>
      )}
    </View>
  );
}
