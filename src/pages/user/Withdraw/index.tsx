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

const image = require("./../../../assets/mobile-phone-payment.png");

export default function UserWithdraw() {
  const [valueSafe, setValueSafe] = React.useState(0);

  function onClickWithdraw() {
    console.log("Withdraw: ", valueSafe);
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Saque:</Text>
          <Text style={theme.style.headerTitle}>Cofre 1</Text>
        </View>
        <View style={theme.style.bodyContainer}>
          <Image style={theme.style.image} source={image} />

          <Vault
            title="Cofre 1"
            valueSafe={valueSafe}
            withdrawDate="15/10/2012"
          />

          <View style={style.actionContainer}>
            <Button
              mode="contained"
              textColor={theme.colors.lightGreen}
              buttonColor={theme.colors.darkGreen}
              style={theme.style.ternaryButton}
              labelStyle={theme.style.ternaryButtonLabel}
              contentStyle={theme.style.ternaryButtonContainer}
              onPress={onClickWithdraw}
            >
              Sacar
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
