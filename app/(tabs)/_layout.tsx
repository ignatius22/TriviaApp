import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { Platform, View, ViewStyle } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const screenOptions = {
    tabBarShowLabel: true,
    headerShown: false,
    tabBarLabelStyle: {
      color: "#ffffff",
      fontFamily: "DMSans_18ptBold",
      fontSize: 14,
      lineHeight: 20,
    },
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      backgroundColor: "#17478B",
      height: Platform.OS === "android" ? 65 : 80,
      paddingBottom: Platform.OS === "android" ? 10 : 15,
    } as ViewStyle,
  };

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#2A75BC",
                  width: Platform.OS == "ios" ? 50 : 50,
                  height: Platform.OS == "ios" ? 50 : 50,
                  bottom: Platform.OS == "ios" ? 15 : 15,
                  borderRadius: Platform.OS == "ios" ? 30 : 40,
                  borderColor: "white",
                  borderWidth: 3,
                }}
              >
                <TabBarIcon
                  name={focused ? "home" : "home-outline"}
                  color="white"
                  size={24}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "wallet" : "wallet-outline"}
              color="#ffffff"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Store",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "storefront" : "storefront-outline"}
              color="#ffffff"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderBoard"
        options={{
          title: "LeaderBoard",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "build" : "build-outline"}
              color="#ffffff"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cog" : "cog-outline"}
              color="#ffffff"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
