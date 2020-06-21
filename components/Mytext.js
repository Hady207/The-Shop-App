import React from "react";
import { StyleSheet, Text } from "react-native";

const Mytext = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default Mytext;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },
});
