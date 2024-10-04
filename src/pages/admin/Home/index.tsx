import * as React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import { SvgUri } from "react-native-svg";
import PixContainer from "../../../components/PixContainer";
import VaultAdmin from "../../../components/VaultAdmin";
import * as theme from "./../../../themes";
import style from "./style";
import ResumeAccount from "../../../components/ResumeAccount";
import colors from "../../../themes/colors";

const iconGetOut = Image.resolveAssetSource(
  require("./../../../assets/icon-get-out.svg")
);

export default function AdminHome() {
  const [valueSafe, setValueSafe] = React.useState(0);
  const [userName, setUserName] = React.useState("@Admin");
  const [withdrawalAvailable, setWithdrawalAvailable] = React.useState(1187.4);
  const [totalTips, setTotalTips] = React.useState(100);
  const [pixKey, setPixKey] = React.useState("77.924.749/0001-50");

  function onPressWithdraw() {
    console.log("Withdraw:", valueSafe);
  }

  function onPressEditPix() {
    console.log("Pix:", pixKey);
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView
        contentContainerStyle={[
          theme.style.bodyViewContainer,
          style.bodyViewContainer,
        ]}
      >
        <View style={style.headerMain}>
          <View style={style.headerMainTop}>
            <View style={style.greetingMessage}>
              <Text style={style.headerTitle}>Olá!</Text>
              <Text style={style.headerSubtitle}>
                Seja bem vindo {userName}!
              </Text>
            </View>

            <IconButton
              icon={() => (
                <SvgUri
                  uri={iconGetOut.uri}
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
          <View style={style.resumeAccount}>
            <VaultAdmin
              title="Depositos / Saques"
              valueSafe={valueSafe}
              totalTips={totalTips}
              btnWithoutOnPress={onPressWithdraw}
            />
          </View>
        </View>

        <View style={[theme.style.bodyContainer, style.bodyContainerPartner]}>
          <View style={style.bodyContainer}>
            <View
              style={{
                backgroundColor: colors.lightGreen,
                borderRadius: 30,
                height: 200,
                justifyContent: "space-around",
                alignItems: "center",
                padding: 40,
              }}
            >
              <Text>Gorjetas / Depositos</Text>
              <Text>Graph</Text>
            </View>

            <ResumeAccount valueProfit={100} valueSafe={4000} />

            <PixContainer pixKey={pixKey} btnEditOnPress={onPressEditPix} />

            <Button
              mode="contained"
              onPress={() => console.log("teste")}
              textColor={theme.colors.ultraLightGreen}
              buttonColor={theme.colors.blue}
              style={theme.style.secondButton}
              labelStyle={theme.style.secondButtonLabel}
              contentStyle={theme.style.secondButtonContainer}
            >
              SACAR
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
