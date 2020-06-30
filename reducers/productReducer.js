import { useReducer } from "react";
import Product from "../seed/data";
const initialVal = {
  availableProducts: Product,
  userProducts: Product.filter((prod) => prod.ownerId === "Hadi207"),
};

const productsManagment = (init = initialVal) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToProducts":
        return;
      case "RemoveFromProducts":
        return;

      default:
        return state;
    }
  };

  return ([products, productsDispatch] = useReducer(reducer, init));
};

export { productsManagment };
