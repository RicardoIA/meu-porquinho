import * as React from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputField from "../../../components/InputField";
import * as theme from "./../../../themes";
import style from "./style";
import { Button } from "react-native-paper";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import Utils from "../../../utils";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";
import DialogConfirm from "../../../components/DialogConfirm";

export default function RecoverPassword() {
  const navigation = useNavigation<StackNavigation>();
  const { resetPassword, error, isLoading } = useAuth();

  const [email, setEmail] = React.useState<string>("");
  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [sendSuccess, setSendSuccess] = React.useState<boolean>(false);

  useEffect(() => {
    if (!emailInvalid && !isLoading && sendSuccess) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "NewPassword" }],
        })
      );

      setEmailInvalid(false);
    }
  }, [sendSuccess]);

  useEffect(() => {
    checkEmail();
  }, [email]);

  const handelResetPasword = async () => {
    try {
      if (emailInvalid) {
        return;
      }

      resetPassword({ email })
        .then((success) => {
          if (success) {
            setEmailInvalid(false);
          } else {
            throw new Error("failed Login");
          }

          setSendSuccess(true);
        })
        .catch((e) => {
          showDialogFailed();
          setEmailInvalid(true);
          setSendSuccess(false);
        });
    } catch (error) {
      showDialogFailed();
      setEmailInvalid(true);
      setSendSuccess(false);
    }
  };

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || email.length < 4) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(!emailRegex.test(email));
  };

  const [visibleDialogFailed, setVisibleDialogFailed] = React.useState(false);
  const showDialogFailed = () => setVisibleDialogFailed(true);
  const hideDialogFailed = () => setVisibleDialogFailed(false);

  function goToRegister() {
    navigation.navigate("Register");
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[style.bodyViewContainer]}>
        <DialogConfirm
          title="Falha ao tentar recuperar senha"
          content="Pressione ok para fechar"
          error={typeof error === "string" ? error : error?.message}
          visible={visibleDialogFailed}
          onPressOk={hideDialogFailed}
          onPressCancel={hideDialogFailed}
        />

        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Recuperar Senha</Text>
        </View>

        <View style={[theme.style.bodyContainer, style.body]}>
          <View style={style.bodyContainer}>
            <View style={style.titleContainer}>
              <Text style={style.title}>Recuperar senha?</Text>
              <Text style={style.subtitle}>
                Você receberá um e-mail com as instruções redefinir sua senha.
              </Text>
            </View>

            <View style={style.fieldsContainer}>
              <InputField
                labelField="E-mail de cadastro:"
                placeholder="example@example.com"
                value={email}
                onChangeText={(value: string) => {
                  setEmail(value);
                }}
              />
            </View>
            {emailInvalid && (
              <Text style={style.alertError}>E-mail inválido</Text>
            )}
          </View>

          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              loading={isLoading}
              disabled={isLoading || emailInvalid}
              onPress={handelResetPasword}
            >
              Enviar
            </Button>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              buttonColor={theme.colors.lightGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={goToRegister}
            >
              Cadastro
            </Button>
          </View>
          <View style={style.noHaveAccount}>
            <Text style={style.alreadyAccountText}>Não tem uma conta?</Text>
            <Button
              mode="text"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={style.registerButtonText}
              onPress={goToRegister}
            >
              Cadastrar!
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
