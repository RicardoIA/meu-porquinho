import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Tip from "./src/pages/main/Tip";
import Startup from "./src/pages/main/Startup";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Tip />
      </SafeAreaView>
    </PaperProvider>
  );
}
