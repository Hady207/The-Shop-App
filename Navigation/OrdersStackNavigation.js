import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "../screens/Orders";

const OrdersStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitleAlign: "center",
          headerRightContainerStyle: {
            marginRight: 10,
            alignSelf: "center",
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
            alignSelf: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigation;
