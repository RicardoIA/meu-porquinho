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
import { useState } from "react";

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

  const [fullnameValid, setFullnameValid] = React.useState<string | boolean>(
    true
  );
  const [emailValid, setEmailValid] = React.useState<string | boolean>(true);
  const [phoneValid, setPhoneValid] = React.useState<string | boolean>(true);
  const [birthDateValid, setBirthDateValid] = React.useState<string | boolean>(
    true
  );
  const [passwordValid, setPasswordValid] = React.useState<string | boolean>(
    true
  );
  const [passwordConfirmedValid, setPasswordConfirmedValid] = React.useState<
    string | boolean
  >(true);

  function register() {
    if (checkFields()) {
      goToLogin();
    }
  }

  function checkFields(): boolean {
    if (Utils.isEmpty(fullname)) {
      setFullnameValid("Nome completo inválido");
    }
    checkEmail("E-mail inválido");

    if (Utils.isEmpty(birthDate)) {
      setPhoneValid("Data de nascimento inválida");
    }
    if (Utils.isEmpty(phone)) {
      setBirthDateValid("Telefone inválido");
    }

    if (Utils.isEmpty(password) || password.length < 3) {
      setPasswordConfirmedValid("Senha inválida");
    }

    if (Utils.isEmpty(passwordConfirmed) || password !== passwordConfirmed) {
      setPasswordConfirmedValid("Senha inválida");
    }

    if (
      fullnameValid &&
      emailValid &&
      birthDateValid &&
      phoneValid &&
      password &&
      passwordConfirmedValid
    ) {
      return true;
    }

    return false;
  }

  function goToLogin() {
    navigate("Login");
  }

  function checkEmail(msgError: string | boolean) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || email.length < 4 || emailRegex.test(email)) {
      setEmailValid(msgError);
      return;
    }

    setEmailValid(true);
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
              <InputField
                labelField="Nome Completo"
                placeholder="José da Silva"
                value={fullname}
                valid={fullnameValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setFullnameValid(false);
                  } else {
                    setFullnameValid(true);
                  }
                  setFullname(value);
                }}
              />
              <InputField
                labelField="E-mail"
                placeholder="example@example.com"
                value={email}
                valid={emailValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setEmailValid(false);
                  } else {
                    setEmailValid(true);
                  }
                  setEmail(value);
                }}
              />
              <InputField
                labelField="Telefone"
                placeholder="+ 123 456 789"
                value={phone}
                valid={phoneValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setPhoneValid(false);
                  } else {
                    setPhoneValid(true);
                  }
                  setPhone(value);
                }}
              />
              <InputField
                labelField="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                valid={birthDateValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setBirthDateValid(false);
                  } else {
                    setBirthDateValid(true);
                  }
                  setBirthDate(value);
                }}
              />

              <InputPassword
                labelField="Senha"
                value={password}
                valid={passwordValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setPasswordValid(false);
                  } else {
                    setPasswordValid(true);
                  }
                  setPassword(value);
                }}
              />
              <InputPassword
                labelField="Confirmar Senha"
                value={passwordConfirmed}
                valid={passwordConfirmedValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setPasswordConfirmedValid(false);
                  } else {
                    setPasswordConfirmedValid(true);
                  }
                  setPasswordConfirmed(value);
                }}
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
