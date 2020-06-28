import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DrawerMenuButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <Ionicons name="ios-menu" size={27} color="black" />
    </TouchableOpacity>
  );
};

const CartButtonMenu = (props) => {
  return (
    <TouchableOpacity {...props}>
      {props.cartLength > 0 && (
        <View style={styles.notif}>
          <Text style={styles.number}>{props.cartLength}</Text>
        </View>
      )}
      <Ionicons name="md-cart" size={27} color="black" />
    </TouchableOpacity>
  );
};

const CartButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name="md-cart" size={27} color={props.mycolor} />
    </TouchableOpacity>
  );
};

const CartButtonAdd = (props) => {
  return (
    <TouchableOpacity {...props}>
      <Ionicons name="md-cart" size={27} color="orangered" />
    </TouchableOpacity>
  );
};

const CartButtonRemove = (props) => {
  return (
    <TouchableOpacity {...props}>
      <Ionicons name="md-cart" size={27} color="green" />
    </TouchableOpacity>
  );
};

export {
  DrawerMenuButton,
  CartButton,
  CartButtonMenu,
  CartButtonAdd,
  CartButtonRemove,
};

const styles = StyleSheet.create({
  notif: {
    height: 20,
    width: 20,
    backgroundColor: "purple",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 25,
  },
  number: {
    textAlign: "center",
    color: "white",
  },
});
