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
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import InputPassword from "../../../components/InputPassword";

export default function NewPassword() {
  const { navigate } = useNavigation<StackNavigation>();

  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordConfirmed, setPasswordConfirmed] = React.useState("");

  function goToLogin() {
    navigate("Login");
  }

  function confirmPassword() {
    if (
      !password ||
      !passwordConfirmed ||
      password.length < 3 ||
      password !== passwordConfirmed
    ) {
      setInvalidPassword(true);
      return;
    }

    setInvalidPassword(false);
    goToLogin();
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>Nova Senha</Text>
        </View>

        <View style={[theme.style.bodyContainer, style.body]}>
          <View style={style.bodyContainer}>
            <View style={style.fieldsContainer}>
              <InputPassword
                labelField="Nova Senha"
                value={password}
                onChangeText={(value: string) => setPassword(value)}
              />
              <InputPassword
                labelField="Confirmar nova senha"
                value={passwordConfirmed}
                onChangeText={(value: string) => setPasswordConfirmed(value)}
              />
            </View>
          </View>
          {invalidPassword && (
            <>
              <Text style={style.alertError}>Senha inválida</Text>
            </>
          )}
          <View style={style.buttons}>
            <Button
              mode="contained"
              textColor={theme.colors.letterDarkGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
              onPress={confirmPassword}
            >
              Atualizar senha
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
