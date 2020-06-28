import { useReducer } from "react";

const CheckItemInCart = "CheckItemInCart";
const AddToCart = "AddToCart";
const RemoveFromCart = "RemoveFromCart";
const IncreaseQuantity = "IncreaseQuantity";
const DecreaseQuantity = "DecreaseQuantity";

const cartManagement = (initVal = []) => {
  const reducer = (state, action) => {
    switch (action.type) {
      // case CheckItemInCart:
      //   return state.includes(action.payload);

      case AddToCart:
        return [action.payload, ...state];

      case RemoveFromCart:
        return state.filter((prod) => prod.id != action.payload.id);

      case IncreaseQuantity:
        return state.map((product) => {
          if (product.id === action.payload.id && product.quantity < 99) {
            return { ...product, quantity: product.quantity++ };
          } else return product;
        });

      case DecreaseQuantity:
        return state.map((product) => {
          if (product.id === action.payload.id && product.quantity > 1) {
            return { ...product, quantity: product.quantity-- };
          } else return product;
        });

      default:
        return state;
    }
  };

  return ([cart, dispatch] = useReducer(reducer, initVal));
};

export { cartManagement };
