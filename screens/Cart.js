import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { UserContext } from "../context/ShoppingContext";

import Mytext from "../components/Mytext";
import CartItem from "../components/CartItem";

const Cart = ({ route }) => {
  // const { product } = route.params;
  const { cart, dispatch } = useContext(UserContext);
  console.log(cart);

  return (
    <View style={styles.screen}>
      <ScrollView>
        {cart ? (
          cart.map((prod) => (
            <CartItem key={prod.id} product={prod} dispatch={dispatch} />
          ))
        ) : (
          <Mytext style={styles.empty}>The cart is Empty</Mytext>
        )}
      </ScrollView>
      <View style={styles.total}>
        <Mytext style={styles.totalText}>Total Price:</Mytext>
        <Mytext style={styles.totalText}>
          $
          {cart && cart.length > 0
            ? cart.reduce((sum, objA) => sum + objA.price * objA.quantity, 0)
            : 0}
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
  empty: {
    fontSize: 19,

    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  totalText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
