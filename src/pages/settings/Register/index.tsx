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
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import InputPassword from "../../../components/InputPassword";
import Utils from "../../../utils";

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  const [invalidPassword, setInvalidPassword] = React.useState(true);
  const [messageAlert, setMessageAlert] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmed, setPasswordConfirmed] = React.useState("");

  function register() {
    setMessageAlert("");
    console.log(messageAlert);
    if (Utils.isEmpty(birthDate)) {
      console.log(birthDate);
      setMessageAlert(messageAlert + "\nData de nascimento inválida");
    }
    if (Utils.isEmpty(fullname)) {
      setMessageAlert(messageAlert + "\nNome completo inválido");
    }
    if (Utils.isEmpty(email)) {
      setMessageAlert(messageAlert + "\nE-mail inválido");
    }
    if (Utils.isEmpty(phone)) {
      setMessageAlert(messageAlert + "\nPhone inválido");
    }

    checkPasswords();
    if (!messageAlert && messageAlert !== "") {
      goToLogin();
    }
  }

  function checkPasswords() {
    if (
      !password ||
      !passwordConfirmed ||
      password.length < 3 ||
      password !== passwordConfirmed
    ) {
      setMessageAlert(messageAlert + "\nSenha inválida");
      return;
    }

    setMessageAlert("");
  }

  function goToLogin() {
    navigate("Login");
  }

  function goToTermsOfUse() {
    console.log("Access: Terms Of Use");
  }
  function goToPrivacyPolicy() {
    console.log("Access: PrivacyPolicy");
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Cadastro</Text>
        </View>

        <View style={[theme.style.bodyContainer, style.body]}>
          <View style={style.bodyContainer}>
            <View style={style.fieldsContainer}>
              {messageAlert && messageAlert !== "" && (
                <>
                  <Text style={style.alertError}>{messageAlert.trim()}</Text>
                </>
              )}
              <InputField
                labelField="Nome Completo"
                placeholder="example@example.com"
                value={fullname}
                onChangeText={(value: string) => setFullname(value)}
              />
              <InputField
                labelField="E-mail"
                placeholder="example@example.com"
                value={email}
                onChangeText={(value: string) => setEmail(value)}
              />
              <InputField
                labelField="Telefone"
                placeholder="+ 123 456 789"
                value={phone}
                onChangeText={(value: string) => setPhone(value)}
              />
              <InputField
                labelField="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChangeText={(value: string) => setBirthDate(value)}
              />

              <InputPassword
                labelField="Senha"
                value={password}
                onChangeText={(value: string) => setPassword(value)}
              />
              <InputPassword
                labelField="Confirmar Senha"
                value={passwordConfirmed}
                onChangeText={(value: string) => setPasswordConfirmed(value)}
              />
            </View>
          </View>

          <View style={style.termsContainer}>
            <Text style={style.termsText}>
              Continuando, você concorda com nossos
            </Text>
            <View style={style.termsButtonsContainer}>
              <Button
                mode="text"
                textColor={theme.colors.letterDarkGreen}
                labelStyle={style.termsTextButton}
                onPress={goToTermsOfUse}
              >
                Termos de Uso
              </Button>
              <Text style={style.termsText}> E </Text>
              <Button
                mode="text"
                textColor={theme.colors.letterDarkGreen}
                labelStyle={style.termsTextButton}
                onPress={goToPrivacyPolicy}
              >
                Politica de Privacidade
              </Button>
            </View>
          </View>
          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={register}
            >
              Cadastro
            </Button>
            <View style={style.alreadyAccount}>
              <Text style={style.alreadyAccountText}>Já tem uma conta?</Text>

              <Button
                mode="text"
                textColor={theme.colors.letterDarkGreen}
                labelStyle={style.alreadyAccountLogin}
                onPress={goToLogin}
              >
                Login
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
