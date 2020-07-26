import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { AppProvider } from "../contexts/main";
import { useAuthContext, AuthProvider } from "../contexts/auth";
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <AuthProvider>
      <AppProvider>
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
          <RootNavigator />
        </NavigationContainer>
      </AppProvider>
    </AuthProvider>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { logged } = useAuthContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {logged ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
        )}
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
    </Stack.Navigator>
  );
}
