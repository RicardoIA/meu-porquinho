import * as React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";

import Vault from "../../../components/Vault";
import * as theme from "./../../../themes";
import style from "./style";
import Utils from "../../../utils";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../routes";

const image = require("./../../../assets/mobile-phone-payment.png");

type UserDepositRouteProp = RouteProp<RootStackParamList, "UserDeposit">;

export default function UserDeposit() {
  const route = useRoute<UserDepositRouteProp>();
  const { title, value, withdrawDate } = route.params;

  function onClickDeposit() {
    console.log("Deposit: ", value);
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Depositar:</Text>
          <Text style={theme.style.headerTitle}>Novo Cofre</Text>
        </View>
        <View style={theme.style.bodyContainer}>
          <Image style={theme.style.image} source={image} />

          <Vault
            title="Novo Cofre"
            valueSafe={value}
            withdrawDate={Utils.DateTomorrow()}
          />

          <View style={style.actionContainer}>
            <Button
              mode="contained"
              textColor={theme.colors.lightGreen}
              buttonColor={theme.colors.darkGreen}
              style={theme.style.ternaryButton}
              labelStyle={theme.style.ternaryButtonLabel}
              contentStyle={theme.style.ternaryButtonContainer}
              onPress={onClickDeposit}
            >
              Depositar
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
