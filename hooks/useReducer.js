import { useReducer } from "react";

const AddToCart = "AddToCart";
const RemoveFromCart = "RemoveFromCart";

const cartManagement = (initVal = []) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case AddToCart:
        return [action.payload, ...state];
      case RemoveFromCart:
        return state.filter((prod) => prod.id != action.payload.id);
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(reducer, initVal);
  return [cart, dispatch];
};

export { cartManagement };
