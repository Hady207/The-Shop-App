import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome5, Entypo, Fontisto } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import ShopStackNavigator from "./ShopStackNavigation";
import OrdersStackNavigator from "./OrdersStackNavigation";
import UserProductsScreen from "./UserProductsStackNavigation";

import { DrawerMenuButton, DrawerMenuCloseButton } from "../components/Buttons";
import Profile from "../screens/Profile";
import Mytext from "../components/Mytext";

const ProfileDrawerComponent = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.jumpTo("Profile", { owner: "Hady" })}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://images.unsplash.com/photo-1471119115842-96070c40566d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
          }}
        />
      </View>
      <Mytext style={styles.name}>Hadi Maher Elrosol</Mytext>
      <TouchableOpacity onPress={() => console.log("log")}>
        <Entypo name="log-out" size={25} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const DrawerContentComponent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state }; //copy from state before applying any filter. do not change original state
  newState.routes = newState.routes.filter((item) => item.name !== "Profile"); //replace "Login' with your route name
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenuCloseButton
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: 15,
        }}
        size={30}
        onPress={() => props.navigation.toggleDrawer()}
      />
      <ProfileDrawerComponent {...props} />
      <DrawerItemList state={newState} {...rest} />
      <DrawerItem
        label="Visit My Website"
        onPress={() => Linking.openURL("https://hm7.herokuapp.com/")}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContentComponent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        contentContainerStyle: {
          flexDirection: "column",
          alignItems: "stretch",
        },

        labelStyle: { fontSize: 16, fontFamily: "Roboto", fontWeight: "bold" },
        itemStyle: { borderBottomColor: "black", borderBottomWidth: 1 },
      }}
    >
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
            <FontAwesome5 name="box-open" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={{
          title: "My Products",
          drawerIcon: (config) => (
            <Fontisto name="shopping-barcode" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    height: 30,
    width: 30,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: { height: "100%", width: "100%", resizeMode: "cover" },
  name: { fontWeight: "bold", fontSize: 17 },
});
