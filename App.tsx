import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { en, pt, registerTranslation } from "react-native-paper-dates";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/hooks/useAuth";
import useLoadFonts from "./src/hooks/useLoadFonts";
import Routes from "./src/routes";
import theme from "./src/themes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }

  registerTranslationInputDate();

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

const registerTranslationInputDate = () => {
  registerTranslation("ptBR", pt);
  registerTranslation("pt", pt);
  registerTranslation("en", en);
};
