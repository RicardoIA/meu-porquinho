import { CommonActions, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import NewVault from "../../../components/NewVault";
import PixContainer from "../../../components/PixContainer";
import Vault from "../../../components/Vault";
import { useAuth } from "../../../hooks/useAuth";
import { useFetch } from "../../../hooks/useFetch";
import { StackNavigation } from "../../../routes";
import { vaultService, walletService } from "../../../services/api";
import Utils from "../../../utils";
import { IModelVault, IModelWallet } from "../../../utils/interfaces";
import * as theme from "./../../../themes";
import style from "./style";
import { log } from "../../../utils/log";

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
  const { logout, user } = useAuth();

  const getWallet = useFetch(walletService.get);
  const getVaults = useFetch(vaultService.getAll);

  useEffect(() => {
    try {
      if (getWallet.success && getWallet.response) {
        setWallet(getWallet.response);
      }
    } catch (error) {
      log.write("GetWallet (failed)", error);
    }
  }, [getWallet.success, getWallet.response]);

  useEffect(() => {
    try {
      if (getVaults.success && getVaults.response) {
        console.log(getVaults.response.vaults);
        setVaults(getVaults.response.vaults);
      }
    } catch (error) {
      log.write("getVaults (failed)", error);
    }
  }, [getVaults.success, getVaults.response]);

  const [wallet, setWallet] = React.useState<IModelWallet | null>(null);
  const [vaults, setVaults] = React.useState<IModelVault[]>([]);

  var data = {
    valueSafe: 0,
    newVaultValue: 4000,
    newVaultDate: "25 Set. 2024",
  };

  function onPressLogout() {
    logout().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
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
    console.log("Pix:", wallet?.pixKey);
  }

  // const getWallet = async () => {
  //   try {
  //     const resp = await walletService.get();

  //     if (resp.status !== 200) {
  //       throw new Error(
  //         JSON.stringify({
  //           data: resp.data,
  //           status: resp.status,
  //         })
  //       );
  //     }

  //     const wallet: IModelWallet | null = resp.data;

  //     if (wallet) {
  //       setWallet(wallet);
  //     } else {
  //       throw new Error("Wallet not found.");
  //     }
  //   } catch (error) {
  //     log.write("Get Wallet (failed)", error);
  //   }
  // };

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView contentContainerStyle={[theme.style.bodyViewContainer]}>
        <View style={style.headerMain}>
          <View style={style.headerMainTop}>
            <View style={style.greetingMessage}>
              <Text style={style.headerTitle}>Olá! Usuário</Text>
              <Text style={style.headerSubtitle}>
                Seja bem vindo {user?.username}!
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
                {Utils.formatMonetaryNumber(wallet?.balance)}
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
                {Utils.formatMonetaryNumber(wallet?.bonusBalance)}
              </Text>
            </View>
          </View>
        </View>

        <View style={theme.style.bodyContainer}>
          <View style={style.bodyContainer}>
            <Vault
              title="Cofre 1"
              valueSafe={data.valueSafe}
              withdrawDate={new Date()}
              btnWithout={true}
              btnWithoutOnPress={onPressWithdraw}
            />

            <Vault
              title="Cofre 2"
              valueSafe={data.valueSafe}
              withdrawDate={new Date()}
              btnWithout={true}
              btnWithoutDisable={true}
              btnWithoutOnPress={() => console.log("without cofre 2")}
            />

            {vaults && (
              <FlatList
                scrollEnabled={false}
                data={vaults}
                renderItem={({ item }) => (
                  <Vault
                    title={`Cofre ${vaults.indexOf(item)}`}
                    valueSafe={item.depositAmount}
                    withdrawDate={item.withdrawDate}
                    btnWithout={true}
                    btnWithoutOnPress={() => console.log("without cofre 2")}
                  />
                )}
                keyExtractor={(item) => item?.vaultId.toString()}
              />
            )}

            <NewVault
              value={data.newVaultValue}
              withdrawDate={data.newVaultDate}
            />
            <PixContainer
              pixKey={wallet?.pixKey}
              btnEditOnPress={onPressEditPix}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
