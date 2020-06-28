import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Database from "../seed/data";
import { UserContext } from "../context/ShoppingContext";
import Product from "../components/Product";
import { DrawerMenuButton, CartButtonMenu } from "../components/Buttons";

const ProductOverview = ({ navigation }) => {
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
    <ScrollView style={styles.container}>
      {Database.map((data) => (
        <Product key={data.id} navigation={navigation} data={data} />
      ))}
    </ScrollView>
  );
};

export default ProductOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
});
