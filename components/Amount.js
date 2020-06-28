import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Amount = (props) => {
  return (
    <View {...props.style}>
      <View style={styles.numberContainer}>
        {/* <TextInput
          style={styles.number}
          value="1"
          maxLength={2}
          keyboardType="numeric"
        /> */}
        <Text style={styles.number}>{props.quantity}</Text>
        <View style={styles.arrows}>
          <TouchableOpacity onPress={() => props.dispatch("Add")}>
            <FontAwesome name="chevron-up" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.dispatch("Remove")}>
            <FontAwesome name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrows: {
    marginLeft: 10,
  },
  number: {
    // flex: 1,
    // width: 100,
    fontSize: 19,
    textAlign: "center",
    marginLeft: 10,
  },
});
