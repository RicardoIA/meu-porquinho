import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import theme from "./src/themes";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./src/hooks/useLoadFonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" backgroundColor={theme.colors?.primary} />
        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Routes />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}
