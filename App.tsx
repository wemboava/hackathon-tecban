import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { AppLoading } from "expo";

import { useFonts, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
import { Cabin_500Medium, Cabin_400Regular, Cabin_700Bold } from "@expo-google-fonts/cabin";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Cabin_400Regular,
    Cabin_500Medium,
    Cabin_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" backgroundColor="#5D0CE1" />
      </SafeAreaProvider>
    );
  }
}
