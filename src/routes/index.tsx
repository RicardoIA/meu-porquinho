import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";

import ComponentsTest from "../pages/main/ComponentsTest";

import Tip from "./../pages/main/Tip";
import Welcome from "../pages/main/Welcome";
import AdminHome from "./../pages/admin/Home";
import AdminWithdraw from "./../pages/admin/Withdraw";
import UserHome from "./../pages/user/Home";
import UserDeposit from "./../pages/user/Deposit";
import UserWithdraw from "./../pages/user/Withdraw";
import Login from "./../pages/settings/Login";
import NewPassword from "./../pages/settings/NewPassword";
import RecoverPassword from "./../pages/settings/RecoverPassword";
import Register from "./../pages/settings/Register";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
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
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ gestureEnabled: false }}
      />

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
  "Welcome",
  "Login",
  "Tip",
  "AdminHome",
  "AdminWithdraw",
  "UserHome",
  "UserDeposit",
  "UserWithdraw",
  "NewPassword",
  "RecoverPassword",
  "Register",
  "Components"
]; // type these manually

export type RootStackParamList = Record<ScreenNames[number], any>;
export type StackNavigation = NavigationProp<RootStackParamList>;
