import "react-native-gesture-handler";

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductOverview from "./screens/ProductOverview";
import DetailScreen from "./screens/DetailScreen";
import Cart from "./screens/Cart";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-meduim": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={ProductOverview}
          options={{
            title: "Overview",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Product"
          component={DetailScreen}
          options={{
            title: "Product",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Cart"
          component={Cart}
          options={{
            title: "My Cart",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
