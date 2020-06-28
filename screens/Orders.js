import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../context/ShoppingContext";
import { DrawerMenuButton, CartButtonMenu } from "../components/Buttons";

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
    <View style={styles.screen}>
      <Text>Orders Screen</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
