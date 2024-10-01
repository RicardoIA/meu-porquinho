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

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function goToHome() {
    navigate("UserHome");
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
              <InputField
                labelField="Nome Completo"
                placeholder="example@example.com"
                value={user}
                onChangeText={(value: string) => setUser(value)}
              />
              <InputField
                labelField="E-mail"
                placeholder="example@example.com"
                value={user}
                onChangeText={(value: string) => setUser(value)}
              />
              <InputField
                labelField="Telefone"
                placeholder="+ 123 456 789"
                value={user}
                onChangeText={(value: string) => setUser(value)}
              />
              <InputField
                labelField="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                value={user}
                onChangeText={(value: string) => setUser(value)}
              />

              <InputField
                labelField="Senha"
                placeholder="●●●●●●●●"
                value={password}
                onChangeText={(value: string) => setPassword(value)}
              />
              <InputField
                labelField="Confirmar Senha"
                placeholder="●●●●●●●●"
                value={password}
                onChangeText={(value: string) => setPassword(value)}
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
              onPress={goToHome}
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
