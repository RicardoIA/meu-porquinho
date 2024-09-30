import * as React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import * as theme from "./../../themes";
import style from "./style";
import { Button, IconButton } from "react-native-paper";
import colors from "../../themes/colors";

const iconPlusCircle = Image.resolveAssetSource(
  require("./../../assets/plus-circle.svg")
);

export interface NewVaultProps {
  value: number;
  withdrawDate: string;
}

export default function NewVault(props: NewVaultProps) {
  return (
    <View style={style.container}>
      <View style={style.containerBody}>
        <IconButton
          icon={() => <SvgUri uri={iconPlusCircle.uri} height={40} />}
          containerColor={colors.blue}
          style={style.icon}
          mode="contained"
        />
        <View style={style.content}>
          <Text style={style.title}>Novo Cofre</Text>
          <View style={style.contentGroup}>
            <View style={style.contentInfo}>
              <Text style={style.contentLabel}>Data para saque</Text>
              <View style={style.contentValueContainer}>
                <Text style={style.contentValueBlue}>{props.withdrawDate}</Text>
              </View>
            </View>
            <View style={style.contentInfo}>
              <Text style={style.contentLabel}>Data para saque</Text>
              <View style={style.contentValueContainer}>
                <Text style={style.contentValueBlack}>R${props.value}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
