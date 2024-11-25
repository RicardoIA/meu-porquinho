import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ComponentsTest from "../pages/main/ComponentsTest";

import EditField from "../pages/main/EditNewValut";
import Welcome from "../pages/main/Welcome";
import { IUserDepositProps, IUserWithdrawProps } from "../utils/interfaces";
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

      <Stack.Screen name="EditField" component={EditField} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Tip" component={Tip} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="AdminWithdraw" component={AdminWithdraw} />
      <Stack.Screen name="UserHome" component={UserHome} />
      <Stack.Screen name="UserDeposit" component={UserDeposit} />
      <Stack.Screen name="UserWithdraw" component={UserWithdraw} />

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
  | "EditField"
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
  EditField: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
