import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ManagedProducts() {
  return (
    <View style={styles.screen}>
      <Text>Managed Products Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
