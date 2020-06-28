import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserProductsScreen from "../screens/UserProductsScreen";
import EditProductScreen from "../screens/EditProductScreen";

const UserProductsStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProduct"
        component={UserProductsScreen}
        options={{ title: "User Product" }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{ title: "Edit Product" }}
      />
    </Stack.Navigator>
  );
};

export default UserProductsStackNavigation;
