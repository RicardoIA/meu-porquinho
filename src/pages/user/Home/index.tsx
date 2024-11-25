import { CommonActions, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
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
import {
  IModelVault,
  IModelWallet,
  IUserWithdrawProps,
} from "../../../utils/interfaces";
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

  const getWallet = useFetch(walletService.get, null, true);
  const getVaults = useFetch(vaultService.getAll, null, true);

  const [wallet, setWallet] = useState<IModelWallet | null>(null);
  const [vaults, setVaults] = useState<IModelVault[]>([]);
  const [withdrawalAvailable, setWithdrawalAvailable] = useState<number | null>(
    null
  );
  const [totalSaved, setTotalSaved] = useState<number | null>(null);

  useEffect(() => {
    try {
      if (getWallet.success && getWallet.response) {
        setWallet(getWallet.response);
        log.write("wallet/get (success)", "OK");
      }
    } catch (error) {
      log.write("wallet/get (failed)", error);
    }
  }, [getWallet.success, getWallet.response]);

  useEffect(() => {
    try {
      if (getVaults.success && getVaults.response) {
        const listVault: IModelVault[] = getVaults.response.vaults;
        const filterdVaults = listVault.filter((x) => x.status === "active");
        setVaults(filterdVaults);

        // calc withdrawal available
        calcTotalSaved(filterdVaults);
        calcWithdrawalAvailable(filterdVaults);
      }
    } catch (error) {
      log.write("getVaults (failed)", error);
    }
  }, [getVaults.success, getVaults.response]);

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

  function onPressWithdraw(vault: IModelVault) {
    const userWithdrawProps: IUserWithdrawProps = {
      title: "Cofre " + vault.vaultId,
      vault: vault,
    };
    navigation.navigate("UserWithdraw", userWithdrawProps);
  }

  function onPressEditPix() {
    console.log("Pix:", wallet?.pixKey);
  }

  const calcWithdrawalAvailable = (listVault: IModelVault[]) => {
    const value = listVault.reduce((acc, item) => {
      if (new Date(item.withdrawDate) <= new Date()) {
        return acc + +item.depositAmount;
      }

      return acc;
    }, 0);
    setWithdrawalAvailable(value);
  };

  const calcTotalSaved = (listVault: IModelVault[]) => {
    const value = listVault.reduce((acc, item) => acc + +item.depositAmount, 0);
    setTotalSaved(value);
  };

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
                {Utils.formatMonetaryNumber(totalSaved)}
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
                {Utils.formatMonetaryNumber(withdrawalAvailable)}
              </Text>
            </View>
          </View>
        </View>

        <View style={theme.style.bodyContainer}>
          <View style={style.bodyContainer}>
            {vaults && (
              <FlatList
                contentContainerStyle={style.bodyVaults}
                scrollEnabled={false}
                data={vaults}
                renderItem={({ item }) => (
                  <Vault
                    id={item.vaultId}
                    title={`Cofre ${item.vaultId}`}
                    valueSafe={item.depositAmount}
                    withdrawDate={new Date(item.withdrawDate)}
                    btnWithout={true}
                    btnWithoutOnPress={() => onPressWithdraw(item)}
                  />
                )}
                keyExtractor={(item) => item?.vaultId.toString()}
              />
            )}

            <NewVault value={100} />
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
