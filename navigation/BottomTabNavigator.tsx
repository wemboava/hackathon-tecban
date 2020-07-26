import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors, { mainColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import {
  BottomTabParamList,
  HomeParamList,
  ProfileParamList,
  FinanceParamList,
} from "../types";
import Finance from "../screens/Finance/Finance";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
        style: {
          backgroundColor: Colors[colorScheme].tabIconSelected,
          color: Colors[colorScheme].text,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Finance"
        component={FinanceNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MoneyIcon name="chart-pie" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} {...props} />;
}

function MoneyIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={25} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const FinanceStack = createStackNavigator<FinanceParamList>();

function FinanceNavigator() {
  const colorScheme = useColorScheme();

  return (
    <FinanceStack.Navigator>
      <FinanceStack.Screen
        name="FinanceScreen"
        component={Finance}
        options={{
          headerShown: false,
        }}
      />
    </FinanceStack.Navigator>
  );
}
