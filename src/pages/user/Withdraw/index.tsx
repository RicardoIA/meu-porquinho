import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
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
import { RootStackParamList, StackNavigation } from "../../../routes";
import * as theme from "./../../../themes";
import style from "./style";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { vaultService } from "../../../services/api";
import { IWithdrawVault } from "../../../utils/interfaces";
import { log } from "../../../utils/log";
import DialogConfirm from "../../../components/DialogConfirm";

const image = require("./../../../assets/mobile-phone-payment.png");

type UserWithdrawRouteProp = RouteProp<RootStackParamList, "UserWithdraw">;

export default function UserWithdraw() {
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<UserWithdrawRouteProp>();
  const { title, vault } = route.params;

  const vaultWithdraw = useFetch();

  useEffect(() => {
    try {
      if (vaultWithdraw.success && vaultWithdraw.response) {
        log.write("vault/withdraw (success)", "OK");
        showDialogSuccess();
      }
      if (vaultWithdraw.error) {
        throw new Error(vaultWithdraw.error);
      }
    } catch (error) {
      showDialogFailed();
      log.write("vault/withdraw (failed)", error);
    }
  }, [vaultWithdraw.success, vaultWithdraw.response]);

  const onClickWithdraw = async () => {
    const data: IWithdrawVault = {
      vaultId: vault.vaultId,
    };

    await vaultWithdraw.run(vaultService.withdraw, data);
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
          title="Saque realizado com sucesso"
          content="Pressione ok para voltar a tela inicial"
          visible={visibleDialogSuccess}
          onPressOk={goToHome}
        />
        <DialogConfirm
          title="Falha ao realizar saque"
          content="Pressione ok para voltar a tela inicial"
          error={vaultWithdraw.error}
          visible={visibleDialogFailed}
          onPressOk={goToHome}
          onPressCancel={hideDialogFailed}
        />

        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Saque:</Text>
          <Text style={theme.style.headerTitle}>{title}</Text>
        </View>
        <View style={theme.style.bodyContainer}>
          <Image style={theme.style.image} source={image} />

          <Vault
            id={vault.vaultId}
            title={title}
            valueSafe={vault.depositAmount}
            withdrawDate={new Date(vault.withdrawDate)}
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
              loading={vaultWithdraw.loading}
              disabled={vaultWithdraw.loading}
            >
              Sacar
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
