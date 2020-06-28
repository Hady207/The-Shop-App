import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ShopStackNavigator from "./ShopStackNavigation";
import OrdersStackNavigator from "./OrdersStackNavigation";
import UserProductsScreen from "./UserProductsStackNavigation";

import { DrawerMenuButton } from "../components/Buttons";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  const DrawerOptions = {
    headerLeft: () => (
      <DrawerMenuButton onPress={() => navigation.toggleDrawer()} />
    ),
    headerLeftContainerStyle: {
      marginLeft: 10,
      alignSelf: "center",
    },
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Entypo name="shop" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          drawerIcon: (cofig) => (
            <FontAwesome5 name="box-open" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={{
          drawerIcon: (config) => (
            <Fontisto name="shopping-barcode" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
