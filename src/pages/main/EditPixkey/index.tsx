import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-paper";
import DialogConfirm from "../../../components/DialogConfirm";
import InputField from "../../../components/InputField";
import { useFetch } from "../../../hooks/useFetch";
import { RootStackParamList, StackNavigation } from "../../../routes";
import { walletService } from "../../../services/api";
import * as theme from "../../../themes";
import { ISetPixKey } from "../../../utils/interfaces";
import { log } from "../../../utils/log";
import style from "./style";

type EditPixKeyProp = RouteProp<RootStackParamList, "EditPixKey">;

const EditPixKey: React.FC = () => {
  const navigation = useNavigation<StackNavigation>();

  const route = useRoute<EditPixKeyProp>();
  const { pixKey, pixType } = route.params;

  const [newPixKey, setNewPixKey] = useState("");
  const [pixKeyValid, setPixKeyValid] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (pixKeyValid && newPixKey.length < 3) {
      setPixKeyValid(false);
    } else if (!pixKeyValid) {
      setPixKeyValid(true);
    }
  }, [newPixKey]);

  const walletPixKey = useFetch();

  useEffect(() => {
    try {
      if (walletPixKey.success && walletPixKey.response) {
        log.write("wallet/setPixKey (success)", "OK");
        showDialogSuccess();
      }
      if (walletPixKey.error) {
        throw new Error(walletPixKey.error);
      }
    } catch (error) {
      showDialogFailed();
      log.write("wallet/setPixKey (failed)", error);
    }
  }, [walletPixKey.success, walletPixKey.response]);

  const onPressConfirm = async () => {
    const data: ISetPixKey = {
      pixKey: newPixKey,
    };

    await walletPixKey.run(walletService.setPixKey, data);
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
      <View style={[style.container]}>
        <DialogConfirm
          title="Chave Pix alterada com sucesso"
          content="Pressione ok para voltar a tela inicial"
          visible={visibleDialogSuccess}
          onPressOk={goToHome}
        />
        <DialogConfirm
          title="Falha ao alterar chave Pix"
          content="Pressione ok para voltar a tela inicial"
          error={walletPixKey.error}
          visible={visibleDialogFailed}
          onPressOk={goToHome}
          onPressCancel={hideDialogFailed}
        />
        <View style={style.header}>
          <Text style={theme.style.headerTitle}>Alterar Chave Pix</Text>
        </View>
        <View style={[theme.style.bodyContainer, { paddingBottom: 20 }]}>
          <View style={style.content}>
            <InputField
              labelField="Chave Pix (código, cpf, email ou telfone)"
              placeholder={pixKey}
              value={newPixKey}
              valid={pixKeyValid}
              onChangeText={(value) => setNewPixKey(value)}
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

export default EditPixKey;
