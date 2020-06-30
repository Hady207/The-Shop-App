import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { UserContext } from "../context/ShoppingContext";
import { DrawerMenuButton, AddProductButton } from "../components/Buttons";
import Product from "../components/Product";

const UserProductsScreen = ({ navigation }) => {
  const { products } = useContext(UserContext);
  // console.log(products?.userProducts);
  navigation.setOptions({
    headerRight: () => <AddProductButton />,
    headerLeft: () => (
      <DrawerMenuButton onPress={() => navigation.toggleDrawer()} />
    ),
  });

  return (
    <FlatList
      style={styles.screen}
      data={products.userProducts}
      renderItem={({ item }) => (
        <Product navigation={navigation} product={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default UserProductsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});
