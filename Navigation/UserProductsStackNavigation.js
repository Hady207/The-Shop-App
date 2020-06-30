import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserProductsScreen from "../screens/UserProductsScreen";
import AddProductScreen from "../screens/AddProductScreen";

const UserProductsStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProduct"
        component={UserProductsScreen}
        options={{
          title: "User Product",
          headerTitleAlign: "center",
          headerLeftContainerStyle: { marginLeft: 10 },
          headerRightContainerStyle: { marginRight: 10 },
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={AddProductScreen}
        options={{ title: "Edit Product" }}
      />
    </Stack.Navigator>
  );
};

export default UserProductsStackNavigation;
