import * as React from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import InputField from "../../../components/InputField";
import InputTip from "../../../components/InputTip";
import * as theme from "../../../themes";
import style from "./style";

const iconRequired = require("./../../../assets/icon-get-out.svg");
const icon = Image.resolveAssetSource(iconRequired);

export default function ComponentsTest() {
  const [value, setValue] = React.useState("");

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
