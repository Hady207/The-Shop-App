import React, { useContext } from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";

import Database from "../seed/data";
import { UserContext } from "../context/ShoppingContext";
import Product from "../components/Product";
import { DrawerMenuButton, CartButtonMenu } from "../components/Buttons";

const ProductOverview = ({ navigation }) => {
  const { products, cart } = useContext(UserContext);
  const { availableProducts } = products;

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
    // <ScrollView style={styles.container}>
    //   {availableProducts.map((data) => (
    //     <Product key={data.id} navigation={navigation} product={data} />
    //   ))}
    // </ScrollView>
    <FlatList
      style={styles.container}
      data={availableProducts}
      renderItem={({ item }) => (
        <Product navigation={navigation} product={item} />
      )}
      keyExtractor={(item) => item.id}
    />
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
