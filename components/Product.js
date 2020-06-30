import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Platform,
  Image,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { UserContext } from "../context/ShoppingContext";

import MyText from "./Mytext";
import { CartButton, EditProductButton } from "./Buttons";

const Product = (props) => {
  const { product } = props;
  const { cart, cartDispatch } = useContext(UserContext);
  const [addToCart, setAddToCart] = useState(cart.includes(product));

  const hanldeCartButtonPress = () => {
    if (addToCart) {
      cartDispatch({
        type: "RemoveFromCart",
        payload: product,
      });
    } else {
      cartDispatch({
        type: "AddToCart",
        payload: product,
      });
    }
    setAddToCart((old) => !old);
    // setAddToCart(!addToCart);
  };

  // one state between a parent and a child
  let Touch =
    Platform.OS === "android" && Platform.Version > 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    // navigation.navigate
    <Touch
      onPress={() => props.navigation.navigate("DetailProduct", { product })}
    >
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: product.imageUrl,
            }}
          />
        </View>
        <MyText style={styles.productName}>{product.title}</MyText>
        <View style={styles.buttons}>
          {product.ownerId === "Hadi207" && <EditProductButton />}
          <MyText style={styles.price}>${product.price}</MyText>
          <CartButton
            mycolor={cart.includes(product) ? "green" : "orangered"}
            onPress={hanldeCartButtonPress}
          />
        </View>
      </View>
    </Touch>
  );
};

export default Product;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },

  card: {
    backgroundColor: "#fff",
    elevation: 4,
    marginBottom: 17,
    borderRadius: 12,
  },

  cardImage: {
    overflow: "hidden",
    alignContent: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 200,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },

  productName: {
    paddingHorizontal: 10,
    fontSize: 19,
    marginTop: 2,
    textTransform: "uppercase",
    fontStyle: "italic",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  detailsButton: {
    backgroundColor: "green",
    alignItems: "center",
    padding: 2,
    height: "100%",
    justifyContent: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 19,
  },
  addtoButton: {},
});
