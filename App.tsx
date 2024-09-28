import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Tip from "./src/pages/main/Tip";
import Startup from "./src/pages/main/Startup";
import Welcome from "./src/pages/main/Welcome";
import theme from "./src/themes";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Welcome />
      </SafeAreaView>
    </PaperProvider>
  );
}
