import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "./../../themes";
import style from "./style";
import { Button, IconButton } from "react-native-paper";
import colors from "../../themes/colors";
import { StackNavigation } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Utils from "../../utils";

const iconPlusCircle = Image.resolveAssetSource(
  require("./../../assets/plus-circle.svg")
);

export interface NewVaultProps {
  value: number;
}

export default function NewVault(props: NewVaultProps) {
  const { navigate } = useNavigation<StackNavigation>();

  const data = {
    ...props,
    dateWithdraw: Utils.DateValidToWithdrawNewVault(),
  };

  function goToDeposit() {
    navigate("EditField");
  }

  return (
    <View style={style.container}>
      <View style={style.containerBody}>
        <IconButton
          icon={() => <SvgUri uri={iconPlusCircle.uri} height={40} />}
          containerColor={colors.blue}
          style={style.icon}
          mode="contained"
          onPress={goToDeposit}
        />
        <View style={style.content}>
          <Text style={style.title}>Novo Cofre</Text>
          <View style={style.contentGroup}>
            <View style={style.contentInfo}>
              <Text style={style.contentLabel}>Data para saque</Text>
              <View style={style.contentValueContainer}>
                <Text style={style.contentValueBlue}>
                  {data.dateWithdraw.toLocaleDateString()}
                </Text>
              </View>
            </View>
            <View style={style.contentInfo}>
              <Text style={style.contentLabel}>Valor</Text>
              <View style={style.contentValueContainer}>
                <Text style={style.contentValueBlack}>R${data.value}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
