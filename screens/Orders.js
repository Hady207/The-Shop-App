import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { UserContext } from "../context/ShoppingContext";
import { DrawerMenuButton, CartButtonMenu } from "../components/Buttons";

import Order from "../components/Order";

const Orders = ({ navigation }) => {
  const { cart } = useContext(UserContext);

  navigation.setOptions({
    headerRight: () => (
      <CartButtonMenu
        cartLength={cart.length}
        onPress={() => navigation.navigate("Cart")}
      />
    ),
    headerLeft: () => (
      <DrawerMenuButton onPress={() => navigation.toggleDrawer()} />
    ),
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Order />
      <Order />
      <Order />
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
