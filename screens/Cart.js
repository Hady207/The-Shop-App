import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Mytext from "../components/Mytext";
import CartItem from "../components/CartItem";

const shoppingCart = [];
const Cart = ({ route }) => {
  const { product } = route.params;
  shoppingCart.push(product);
  return (
    <View style={styles.screen}>
      <ScrollView>
        {shoppingCart.map((prod) => (
          <CartItem product={prod} />
        ))}
        {/* <CartItem product={product} /> */}
        {/* <CartItem />
        <CartItem /> */}
      </ScrollView>
      <View style={styles.total}>
        <Mytext style={styles.totalText}>Total Price:</Mytext>
        <Mytext style={styles.totalText}>
          ${shoppingCart.reduce((a, b) => a.price + b.price, 0)}
        </Mytext>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopWidth: 2,
    height: "10%",
    // elevation: 1,
    borderRadius: 3,
  },

  totalText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
