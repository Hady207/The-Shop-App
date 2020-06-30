import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

import Mytext from "./Mytext";

const Order = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri:
              "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
          }}
        >
          <View style={styles.textBackground}>
            <Mytext style={styles.name}>Apple Red</Mytext>
            <Mytext style={styles.price}>$1023</Mytext>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cardBody}>
        <Mytext style={styles.details}>purchased at 25/2/2007</Mytext>
        <Mytext style={styles.details}>5 products</Mytext>
        <Mytext style={styles.details}>3 days till it reach you</Mytext>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // height: 170,
    elevation: 3,
    marginBottom: 30,
  },
  card: {
    height: 170,
    width: "100%",
    backgroundColor: "black",
    position: "relative",
  },
  backgroundImage: {
    flexDirection: "row",
    resizeMode: "cover",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-around",
    // backgroundColor: "black",
  },
  textBackground: {
    backgroundColor: "rgba(0,0,0,.3)",
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  name: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  price: { color: "white", fontSize: 19, fontWeight: "bold" },
  cardBody: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    // flex: 1,
    // height: "80%",
    padding: 10,
    flexWrap: "wrap",
    // position: "absolute",
    top: 0,
    // zIndex: -1,
    // top: 150,
  },
  details: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
