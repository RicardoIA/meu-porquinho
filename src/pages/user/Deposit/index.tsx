import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import DialogConfirm from "../../../components/DialogConfirm";
import Vault from "../../../components/Vault";
import { useFetch } from "../../../hooks/useFetch";
import { RootStackParamList, StackNavigation } from "../../../routes";
import { vaultService, walletService } from "../../../services/api";
import { log } from "../../../utils/log";
import * as theme from "./../../../themes";
import { IModelWallet } from "./../../../utils/interfaces";
import style from "./style";

const image = require("./../../../assets/mobile-phone-payment.png");

type UserDepositRouteProp = RouteProp<RootStackParamList, "UserDeposit">;

export default function UserDeposit() {
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<UserDepositRouteProp>();
  const { value, withdrawDate } = route.params;

  const [wallet, setWallet] = useState<IModelWallet | null>(null);

  const vaultCreate = useFetch();
  const getWallet = useFetch(walletService.get, null, true);

  useEffect(() => {
    try {
      if (getWallet.success && getWallet.response) {
        setWallet(getWallet.response);
        log.write("wallet/get (success)", "OK");
      }
    } catch (error) {
      log.write("wallet/get (failed)", error);
    }
  }, [getWallet.success, getWallet.response]);

  useEffect(() => {
    try {
      if (vaultCreate.success && vaultCreate.response) {
        log.write("vault/create (success)", "OK");
        showDialogSuccess();
      }
      if (vaultCreate.error) {
        throw new Error(vaultCreate.error);
      }
    } catch (error) {
      showDialogFailed();
      log.write("vault/create (failed)", error);
    }
  }, [vaultCreate.success, vaultCreate.response]);

  const onClickDeposit = async () => {
    await vaultCreate.run(vaultService.create, {
      walletId: wallet?.walletId,
      depositAmount: value,
      withdrawDate: withdrawDate,
    });
  };

  const [visibleDialogSuccess, setVisibleDialogSuccess] = React.useState(false);
  const showDialogSuccess = () => setVisibleDialogSuccess(true);
  const hideDialogSuccess = () => setVisibleDialogSuccess(false);

  const [visibleDialogFailed, setVisibleDialogFailed] = React.useState(false);
  const showDialogFailed = () => setVisibleDialogFailed(true);
  const hideDialogFailed = () => setVisibleDialogFailed(false);

  const goToHome = () => {
    hideDialogSuccess();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "UserHome" }],
      })
    );
  };

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <DialogConfirm
          title="Deposito realizado com sucesso"
          content="Pressione ok para voltar a tela inicial"
          visible={visibleDialogSuccess}
          onPressOk={goToHome}
        />
        <DialogConfirm
          title="Falha ao realizar deposito"
          content="Pressione ok para voltar a tela inicial"
          error={vaultCreate.error}
          visible={visibleDialogFailed}
          onPressOk={goToHome}
          onPressCancel={hideDialogFailed}
        />

        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Depositar:</Text>
          <Text style={theme.style.headerTitle}>Novo Cofre</Text>
        </View>
        <View style={theme.style.bodyContainer}>
          <Image style={theme.style.image} source={image} />

          <Vault
            id={1}
            title="Novo Cofre"
            valueSafe={value}
            withdrawDate={new Date(withdrawDate ?? "")}
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
