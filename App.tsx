import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Routes, { StackNavigation } from "./src/routes";
import theme from "./src/themes";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./src/hooks/useLoadFonts";
import { AuthProvider, useAuth } from "./src/hooks/useAuth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar style="auto" backgroundColor={theme.colors?.primary} />
          <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Routes />
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
