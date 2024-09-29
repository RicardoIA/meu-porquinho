import * as React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";

import InputTip from "../../../components/InputTip";
import * as theme from "./../../../themes";
import style from "./style";

const image = require("./../../../assets/hand-coins.png");

export default function Tip() {
  const [tip, setTip] = React.useState(0);

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <View style={theme.style.header}>
          <Text style={theme.style.headerTitle}>
            Parabéns! Você Atingiu Sua Meta!
          </Text>
          <Text style={theme.style.headerTitle}>:)</Text>
        </View>
        <View style={theme.style.bodyContainer}>
          <Image style={theme.style.image} source={image} />
          <Text style={style.title}>
            Gostaria De Deixar Uma Gorjeta Para O App?
          </Text>
          <Text style={style.subtitle}>
            Sua gorjeta nos ajuda a manter o Meu Porquinho funcionando :)
          </Text>

          <View style={style.actionContainer}>
            <InputTip
              placeholder="R$ 150,00"
              defaultValue={tip}
              onChangeText={(value: number) => setTip(value)}
            />
            <Button
              mode="contained"
              textColor={theme.colors.lightGreen}
              buttonColor={theme.colors.darkGreen}
              style={theme.style.ternaryButton}
              labelStyle={theme.style.ternaryButtonLabel}
              contentStyle={theme.style.ternaryButtonContainer}
              onPress={() => console.log(tip)}
            >
              Deixar Gorjeta
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
