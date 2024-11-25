import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-paper";
import InputDate from "../../../components/InputDate";
import InputField from "../../../components/InputField";
import { StackNavigation } from "../../../routes";
import * as theme from "../../../themes";
import Utils from "../../../utils";
import style from "./style";

const EditNewValut: React.FC = () => {
  const navigation = useNavigation<StackNavigation>();

  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("100");
  const [dateValue, setDateValue] = useState<Date | undefined>(
    Utils.DateValidToWithdrawNewVault()
  );
  const [dateValid, setDateValid] = useState<boolean>(true);
  const [withdrawalAmountValid, setWithdrawalAmountValid] =
    useState<boolean>(true);

  useEffect(() => {
    validateDate();
  }, [dateValue]);

  const validateDate = () => {
    var valid =
      dateValue &&
      dateValue.getUTCDate() >= Utils.DateValidToWithdrawNewVault().getUTCDate()
        ? true
        : false;

    setDateValid(valid);
    return valid;
  };
  const validaWithdrawalAmount = () => {
    var value = parseFloat(withdrawalAmount);
    var valid = !isNaN(value) && value > 0;

    setWithdrawalAmountValid(valid);
    return valid;
  };

  const onPressConfirm = () => {
    if (validateDate() && validaWithdrawalAmount()) {
      navigation.navigate("UserDeposit", {
        value: parseFloat(withdrawalAmount),
        withdrawDate: dateValue?.toISOString(),
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={[style.container]}>
        <View style={style.header}>
          <Text style={theme.style.headerTitle}>Novo Cofre</Text>
        </View>
        <View style={[theme.style.bodyContainer, { paddingBottom: 20 }]}>
          <View style={style.content}>
            <InputDate
              labelField="Data para saque"
              value={dateValue}
              valid={dateValid}
              onChange={(d: Date | undefined) => setDateValue(d)}
            />
            <InputField
              placeholder="R$ 100,00"
              labelField="Valor"
              keybordType="numeric"
              value={withdrawalAmount}
              valid={withdrawalAmountValid}
              onChangeText={(value: string) => setWithdrawalAmount(value)}
            />
          </View>
          <Button
            mode="contained"
            textColor={theme.colors.lightGreen}
            buttonColor={theme.colors.darkGreen}
            style={theme.style.ternaryButton}
            labelStyle={theme.style.ternaryButtonLabel}
            contentStyle={theme.style.ternaryButtonContainer}
            onPress={onPressConfirm}
          >
            Confirmar
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditNewValut;
