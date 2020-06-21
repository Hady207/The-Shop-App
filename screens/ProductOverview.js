import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { v4 as uuid } from "uuid";
import Product from "../components/Product";
import Database from "../seed/data";

const ProductOverview = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {Database.map((data) => (
        <Product key={data.id} navigation={navigation} data={data} />
      ))}
    </ScrollView>
  );
};

export default ProductOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
});
