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
import ResumeAccountAdmin from "../../../components/ResumeAccountAdmin";
import * as theme from "./../../../themes";
import style from "./style";
import TransactionResume from "../../../components/TransactionResume";
import colors from "../../../themes/colors";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../routes";
import { useAuth } from "../../../hooks/useAuth";

const iconGetOut = Image.resolveAssetSource(
  require("./../../../assets/icon-get-out.svg")
);

export default function AdminHome() {
  const navigation = useNavigation<StackNavigation>();
  const { navigate } = useNavigation<StackNavigation>();
  const { logout, user } = useAuth();

  const data = {
    valueSafe: 4000,
    totalTips: 100,
    userName: user?.username,
    pixKey: "77.924.749/0001-50",
  };
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
    navigate("AdminWithdraw");
  }

  function onPressEditPix() {
    console.log("Pix:", data.pixKey);
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
            <ResumeAccountAdmin
              valueSafe={data.valueSafe}
              totalTips={data.totalTips}
            />
          </View>
        </View>

        <View style={[theme.style.bodyContainer, style.bodyContainerPartner]}>
          <View style={style.bodyContainer}>
            <View
              style={{
                backgroundColor: colors.lightGreen,
                borderRadius: 30,
                height: 180,
                justifyContent: "space-around",
                alignItems: "center",
                padding: 40,
              }}
            >
              <Text>Gorjetas / Depositos</Text>
              <Text>Graph</Text>
            </View>

            <TransactionResume valueProfit={100} valueSafe={4000} />

            <PixContainer
              pixKey={data.pixKey}
              btnEditOnPress={onPressEditPix}
            />

            <Button
              mode="contained"
              onPress={onPressWithdraw}
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
