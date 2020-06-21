import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyText from "./Mytext";

const Product = (props) => {
  const { data } = props;
  // console.log(data);
  let Touch =
    Platform.OS === "android" && Platform.Version > 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    // navigation.navigate
    <Touch onPress={() => props.navigation.navigate("Product", { data })}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
        </View>
        <MyText style={styles.productName}>{data.name}</MyText>
        <View style={styles.buttons}>
          <MyText style={styles.price}>${data.price}</MyText>
          <TouchableOpacity style={styles.addtoButton}>
            <Ionicons name="md-cart" size={27} color="orangered" />
          </TouchableOpacity>
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
