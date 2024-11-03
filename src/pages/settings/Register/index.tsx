import { CommonActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import InputField from "../../../components/InputField";
import InputPassword from "../../../components/InputPassword";
import { StackNavigation } from "../../../routes";
import Utils from "../../../utils";
import * as theme from "./../../../themes";
import style from "./style";
import { useAuth } from "../../../hooks/useAuth";
import { log } from "../../../utils/log";
import { IUserRegistration } from "../../../utils/interfaces";

export default function Home() {
  const navigation = useNavigation<StackNavigation>();
  const { register, user, isAdmin } = useAuth();

  const [fullname, setFullname] = useState("teste");
  const [email, setEmail] = useState("teste@admin.com");
  const [phone, setPhone] = useState("199999999");
  const [cpf, setCpf] = useState("69930875026");
  const [password, setPassword] = useState("admin");
  const [passwordConfirmed, setPasswordConfirmed] = useState("admin");

  const [fullnameValid, setFullnameValid] = useState<string | boolean>(true);
  const [emailValid, setEmailValid] = useState<string | boolean>(true);
  const [phoneValid, setPhoneValid] = useState<string | boolean>(true);
  const [cpfValid, setCpfValid] = useState<string | boolean>(true);
  const [passwordValid, setPasswordValid] = useState<string | boolean>(true);
  const [passwordConfirmedValid, setPasswordConfirmedValid] = useState<
    string | boolean
  >(true);

  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      if (isAdmin) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "AdminHome" }],
          })
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "UserHome" }],
          })
        );
      }
    }
  }, [user]);

  function handleRegister() {
    if (checkFields()) {
      try {
        setLoginLoading(true);
        const userData: IUserRegistration = {
          cpf,
          email,
          password,
          phone,
          username: fullname,
        };

        register(userData)
          .then((success) => {
            if (success) {
              setLoginLoading(false);
            } else {
              throw new Error("failed Login");
            }
          })
          .catch((e) => {
            setLoginLoading(false);
          });
      } catch (error) {
        setLoginLoading(false);
      }
    }
  }

  function checkFields(): boolean {
    setFullnameValid(true);
    setEmailValid(true);
    setCpfValid(true);
    setPhoneValid(true);
    setPasswordValid(true);
    setPasswordConfirmedValid(true);

    if (Utils.isEmpty(fullname)) {
      setFullnameValid("Nome completo inválido");
    }
    checkEmail("E-mail inválido");

    if (Utils.isEmpty(phone)) {
      setCpfValid("Telefone inválido");
    }

    if (Utils.isEmpty(cpf)) {
      setPhoneValid("CPF inválido");
    }

    if (Utils.isEmpty(password) || password.length < 3) {
      setPasswordValid("Senha inválida");
    }

    if (Utils.isEmpty(passwordConfirmed) || password !== passwordConfirmed) {
      setPasswordConfirmedValid("Senha inválida");
    }

    if (
      fullnameValid === true &&
      emailValid === true &&
      cpfValid === true &&
      phoneValid === true &&
      passwordValid === true &&
      passwordConfirmedValid === true
    ) {
      return true;
    }

    return false;
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  function checkEmail(msgError: string | boolean) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || email.length < 4 || !emailRegex.test(email)) {
      setEmailValid(msgError);
      return;
    }

    setEmailValid(true);
  }

  function goToTermsOfUse() {
    log.write("Access: Terms Of Use");
  }
  function goToPrivacyPolicy() {
    log.write("Access: PrivacyPolicy");
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
                labelField="CPF"
                placeholder="999.999.999-99"
                value={cpf}
                valid={cpfValid}
                onChangeText={(value: string) => {
                  if (Utils.isEmpty(value)) {
                    setCpfValid(false);
                  } else {
                    setCpfValid(true);
                  }
                  setCpf(value);
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
              onPress={handleRegister}
              loading={loginLoading}
              disabled={loginLoading}
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
