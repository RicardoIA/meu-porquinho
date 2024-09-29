import { fonts } from "./../themes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts(fonts);

  // const [fontsLoaded] = useFonts({
  //   'Nome-Fonte': require('caminho_para_a_fonte')
  // });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};

export default useLoadFonts;
