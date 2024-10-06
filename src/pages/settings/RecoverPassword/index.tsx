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

export default function RecoverPassword() {
  const { navigate } = useNavigation<StackNavigation>();

  const [email, setEmail] = React.useState("");

  function goToHome() {
    navigate("UserHome");
  }
  function goToRegister() {
    navigate("Register");
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[style.bodyViewContainer]}>
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
                onChangeText={(value: string) => setEmail(value)}
              />
            </View>
          </View>

          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={goToRegister}
            >
              Enviar
            </Button>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              buttonColor={theme.colors.lightGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={goToHome}
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
