import "react-native-gesture-handler";

import React, { useState, createContext, useReducer } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { cartManagement } from "./hooks/useReducer";
import { UserContext } from "./context/ShoppingContext";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./Navigation/StackNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const [cart, dispatch] = cartManagement();

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
      <UserContext.Provider value={{ cart, dispatch }}>
        <StackNavigation />
      </UserContext.Provider>
    </NavigationContainer>
  );
}
