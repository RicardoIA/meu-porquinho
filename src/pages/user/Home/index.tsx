import * as React from "react";
import {
  BackHandler,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import Vault from "../../../components/Vault";
import * as theme from "./../../../themes";
import style from "./style";
import { SvgUri } from "react-native-svg";
import NewVault from "../../../components/NewVault";
import PixContainer from "../../../components/PixContainer";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import Utils from "../../../utils";
import { useAuth } from "../../../hooks/useAuth";

const iconArrowDown = Image.resolveAssetSource(
  require("./../../../assets/arrow-down.svg")
);
const iconArrowUp = Image.resolveAssetSource(
  require("./../../../assets/arrow-up.svg")
);
const iconGetOut = Image.resolveAssetSource(
  require("./../../../assets/icon-get-out.svg")
);

export default function Home() {
  const navigation = useNavigation<StackNavigation>();

  const data = {
    valueSafe: 0,
    userName: "@Usuario",
    withdrawalAvailable: 1187.4,
    totalSaved: 7783,
    newVaultValue: 4000,
    newVaultDate: "25 Set. 2024",
    pixKey: "77.924.749/0001-50",
  };

  const { logout, isLoggedIn } = useAuth();

  function onPressLogout() {
    logout().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        })
      );
      // fecha o aplicativo
      //BackHandler.exitApp();
    });
  }

  function onPressWithdraw() {
    console.log("Withdraw:", data.valueSafe);
  }

  function onPressEditPix() {
    console.log("Pix:", data.pixKey);
  }

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <View style={style.headerMain}>
          <View style={style.headerMainTop}>
            <View style={style.greetingMessage}>
              <Text style={style.headerTitle}>Olá!</Text>
              <Text style={style.headerSubtitle}>
                Seja bem vindo {data.userName}!
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
              onPress={onPressLogout}
            />
          </View>
          <View style={style.resumeAccount}>
            <View style={style.resumeAccountGroup}>
              <View style={style.resumeAccountHeader}>
                <SvgUri
                  uri={iconArrowUp.uri}
                  width={20}
                  color={theme.colors.letterDarkGreen}
                />
                <Text style={style.resumeAccountTitle}>Total Guardado</Text>
              </View>
              <Text style={style.resumeAccountValueWhite}>
                {Utils.formatMonetaryNumber(data.totalSaved)}
              </Text>
            </View>
            <View style={style.verticalLine} />
            <View style={style.resumeAccountGroup}>
              <View style={style.resumeAccountHeader}>
                <SvgUri
                  uri={iconArrowDown.uri}
                  width={20}
                  color={theme.colors.letterDarkGreen}
                />
                <Text style={style.resumeAccountTitle}>Saque Disponível</Text>
              </View>
              <Text style={style.resumeAccountValueBlue}>
                {Utils.formatMonetaryNumber(data.withdrawalAvailable)}
              </Text>
            </View>
          </View>
        </View>

        <View style={theme.style.bodyContainer}>
          <View style={style.bodyContainer}>
            <Vault
              title="Cofre 1"
              valueSafe={data.valueSafe}
              withdrawDate="15/10/2012"
              btnWithout={true}
              btnWithoutOnPress={onPressWithdraw}
            />

            <Vault
              title="Cofre 2"
              valueSafe={data.valueSafe}
              withdrawDate="25/10/2024"
              btnWithout={true}
              btnWithoutDisable={true}
              btnWithoutOnPress={() => console.log("without cofre 2")}
            />
            <NewVault
              value={data.newVaultValue}
              withdrawDate={data.newVaultDate}
            />
            <PixContainer
              pixKey={data.pixKey}
              btnEditOnPress={onPressEditPix}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
