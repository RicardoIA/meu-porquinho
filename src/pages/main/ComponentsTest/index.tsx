import * as React from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Alert,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import InputField from "../../../components/InputField";
import InputTip from "../../../components/InputTip";
import * as theme from "../../../themes";
import style from "./style";
import * as api from "../../../services/api";
import { HttpMethod } from "../../../utils/enums";
import { useFetch } from "../../../hooks/useFetch";

const iconRequired = require("./../../../assets/icon-get-out.svg");
const icon = Image.resolveAssetSource(iconRequired);

export default function ComponentsTest() {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<any>(null);

  const cep = "01001000";
  //const { data, loading, error } = useFetch(HttpMethod.GET, `/${cep}/json/`);

  async function buscarCep() {
    try {
      // const { data, loading, error } = useFetch(
      //   HttpMethod.GET,
      //   `/${cep}/json/`
      // );
      //const response = await .get(`/${cep}/json/`);
      // const response = await api.vault.create({
      //   depositAmount: 12,
      //   walletId: 1,
      //   withdrawDate: "",
      // });
      // setData(response.data);
      // Alert.alert(response.data.logradouro);
    } catch (error) {}
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={[style.container]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>
            Parabéns! Você atingiu sua meta! :)
          </Text>
        </View>
        <View style={[theme.style.bodyContainer, { gap: 20 }]}>
          <View>
            <Text>Request API 2</Text>
            <Text>{HttpMethod[HttpMethod.GET]} 232</Text>
            <Text>{data}</Text>

            <Button
              mode="contained"
              onPress={buscarCep}
              textColor={theme.colors.letersAndIcons}
              buttonColor={theme.colors.lightGreen}
              labelStyle={theme.style.firstButtonLabel}
              contentStyle={theme.style.firstButtonContainer}
            >
              Request API
            </Button>
          </View>

          <InputField
            placeholder="example@example.com"
            labelField="Usuário / E-mail"
            value={value}
            onChangeText={(value: string) => setValue(value)}
          />

          <InputTip placeholder="R$ 150,00" />
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            textColor={theme.colors.letersAndIcons}
            labelStyle={theme.style.firstButtonLabel}
            contentStyle={theme.style.firstButtonContainer}
          >
            Cadastro
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            textColor={theme.colors.letersAndIcons}
            buttonColor={theme.colors.lightGreen}
            labelStyle={theme.style.firstButtonLabel}
            contentStyle={theme.style.firstButtonContainer}
          >
            Cadastro
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            textColor={theme.colors.ultraLightGreen}
            buttonColor={theme.colors.blue}
            style={theme.style.secondButton}
            labelStyle={theme.style.secondButtonLabel}
            contentStyle={theme.style.secondButtonContainer}
          >
            SACAR
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            textColor={theme.colors.ultraLightGreen}
            buttonColor={theme.colors.blue}
            style={theme.style.secondSmallButton}
            labelStyle={theme.style.secondSmallButtonLabel}
            contentStyle={theme.style.secondSmallButtonContainer}
          >
            Editar
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            textColor={theme.colors.lightGreen}
            buttonColor={theme.colors.darkGreen}
            style={theme.style.ternaryButton}
            labelStyle={theme.style.ternaryButtonLabel}
            contentStyle={theme.style.ternaryButtonContainer}
          >
            Sacar
          </Button>

          <IconButton
            icon={() => (
              <SvgUri
                uri={icon.uri}
                height={24}
                color={theme.colors.letersAndIcons}
              />
            )}
            iconColor={theme.colors.letersAndIcons}
            style={theme.style.iconGetOut}
            mode="contained"
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
