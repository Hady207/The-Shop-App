import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Mytext from "./Mytext";
import Amount from "./Amount";

const CartItem = ({ product, dispatch }) => {
  return (
    <View style={styles.list}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.image,
            }}
          />
        </View>
        <View styles={styles.details}>
          <View styles={styles.cartContainer}>
            <Mytext style={styles.name}>{product.name}</Mytext>
            <TouchableOpacity
              onPress={() =>
                dispatch({
                  type: "RemoveFromCart",
                  payload: product,
                })
              }
            >
              <Entypo name="cross" size={30} color="red" />
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Amount />
            <Mytext style={styles.price}>${product.price}</Mytext>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#f1f1f1",
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    elevation: 2,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 125,
    width: 125,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  details: { flex: 1 },
  cartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: 250,
    backgroundColor: "red",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  name: {
    marginLeft: 5,
    fontSize: 19,
  },
  numbers: {
    borderWidth: 4,
    width: 80,
    textAlign: "center",
  },
  price: {
    fontSize: 17,
    marginLeft: 10,
  },
});
