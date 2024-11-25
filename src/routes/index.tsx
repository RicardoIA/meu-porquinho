import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ComponentsTest from "../pages/main/ComponentsTest";

import EditNewValut from "../pages/main/EditNewValut";
import Welcome from "../pages/main/Welcome";
import {
  IUserDepositProps,
  IUserEditPix as IEditPixKey,
  IUserWithdrawProps,
} from "../utils/interfaces";
import AdminHome from "./../pages/admin/Home";
import AdminWithdraw from "./../pages/admin/Withdraw";
import Tip from "./../pages/main/Tip";
import Login from "./../pages/settings/Login";
import NewPassword from "./../pages/settings/NewPassword";
import RecoverPassword from "./../pages/settings/RecoverPassword";
import Register from "./../pages/settings/Register";
import UserDeposit from "./../pages/user/Deposit";
import UserHome from "./../pages/user/Home";
import UserWithdraw from "./../pages/user/Withdraw";
import EditPixKey from "../pages/main/EditPixkey";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ gestureEnabled: false }}
      />

      <Stack.Screen name="EditNewValut" component={EditNewValut} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Tip" component={Tip} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="AdminWithdraw" component={AdminWithdraw} />
      <Stack.Screen name="UserHome" component={UserHome} />
      <Stack.Screen name="UserDeposit" component={UserDeposit} />
      <Stack.Screen name="UserWithdraw" component={UserWithdraw} />
      <Stack.Screen name="EditPixKey" component={EditPixKey} />

      <Stack.Screen name="Components Test" component={ComponentsTest} />
    </Stack.Navigator>
  );
}

export type ScreenNames = [
  | "Welcome"
  | "Login"
  | "Tip"
  | "AdminHome"
  | "AdminWithdraw"
  | "UserHome"
  | "UserDeposit"
  | "UserWithdraw"
  | "NewPassword"
  | "RecoverPassword"
  | "Register"
  | "Components"
  | "EditNewValut"
  | "EditPixKey"
]; // type these manually

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Tip: undefined;
  AdminHome: undefined;
  AdminWithdraw: undefined;
  UserHome: undefined;
  UserDeposit: IUserDepositProps;
  UserWithdraw: IUserWithdrawProps;
  NewPassword: undefined;
  RecoverPassword: undefined;
  Register: undefined;
  Components: undefined;
  EditNewValut: undefined;
  EditPixKey: IEditPixKey;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
