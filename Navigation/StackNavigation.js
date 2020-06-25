import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductOverview from "../screens/ProductOverview";
import DetailScreen from "../screens/DetailScreen";
import Cart from "../screens/Cart";

const { Navigator, Screen } = createStackNavigator();

const homeScreenOptions = {
  title: "Overview",
  headerTitleStyle: { fontWeight: "bold" },
  headerTitleAlign: "center",
  headerRightContainerStyle: {
    marginRight: 10,
    alignSelf: "center",
  },
};

const StackNavigation = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={ProductOverview}
        options={homeScreenOptions}
      />
      <Screen
        name="Product"
        component={DetailScreen}
        options={{
          title: "Product",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          title: "My Cart",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;
