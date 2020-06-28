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
  const handleAmountChange = (action) => {
    if (action === "Add") {
      dispatch({
        type: "IncreaseQuantity",
        payload: product,
      });
    } else if (action === "Remove") {
      dispatch({
        type: "DecreaseQuantity",
        payload: product,
      });
    }
  };
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
        <View style={styles.details}>
          <View style={styles.cartContainer}>
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
            <Amount quantity={product.quantity} dispatch={handleAmountChange} />
            <Mytext style={styles.price}>
              ${product.price * product.quantity}
            </Mytext>
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
    // marginVertical: 5,
    elevation: 4,
    marginBottom: 10,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  numbers: {
    borderWidth: 4,
    width: 80,
    textAlign: "center",
  },
  price: {
    fontSize: 17,

    fontWeight: "bold",
  },
});
