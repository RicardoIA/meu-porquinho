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

import Vault from "../../../components/Vault";
import * as theme from "./../../../themes";
import style from "./style";
import { SvgUri } from "react-native-svg";
import NewVault from "../../../components/NewVault";

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
  const [valueSafe, setValueSafe] = React.useState(0);
  const [userName, setUserName] = React.useState("@Usuario");
  const [withdrawalAvailable, setWithdrawalAvailable] = React.useState(1187.4);
  const [totalSaved, setTotalSaved] = React.useState(7783);
  const [newVaultValue, setNewVaultValue] = React.useState(4000);
  const [newVaultDate, setNewVaultDate] = React.useState("25 Set. 2024");

  function onClickWithdraw() {
    console.log("Withdraw: ", valueSafe);
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
            <View style={style.resumeAccountGroup}>
              <View style={style.resumeAccountHeader}>
                <SvgUri
                  uri={iconArrowUp.uri}
                  width={20}
                  color={theme.colors.letterDarkGreen}
                />
                <Text style={style.resumeAccountTitle}>Total Guardado</Text>
              </View>
              <Text style={style.resumeAccountValueWhite}>${totalSaved}</Text>
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
                R${withdrawalAvailable}
              </Text>
            </View>
          </View>
        </View>

        <View style={theme.style.bodyContainer}>
          <View style={style.bodyContainer}>
            <Vault
              title="Cofre 1"
              valueSafe={valueSafe}
              withdrawDate="15/10/2012"
              btnWithout={true}
              btnWithoutOnPress={() => console.log("without cofre 1")}
            />

            {/* <Vault
              title="Cofre 2"
              valueSafe={valueSafe}
              withdrawDate="25/10/2024"
              btnWithout={true}
              btnWithoutDisable={true}
              btnWithoutOnPress={() => console.log("without cofre 2")}
            /> */}
            <NewVault value={newVaultValue} withdrawDate={newVaultDate} />
            {/* <NewVault value={newVaultValue} withdrawDate={newVaultDate} /> */}
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
