import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = ({ route }) => {
  // console.log(route.params.owner);
  const { owner } = route.params;
  return (
    <View style={styles.screen}>
      <Text>Welcome Back {owner}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
