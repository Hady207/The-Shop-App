import React, { createContext, Children } from "react";
// import { cart } from "../hooks/useCart";
import { cartManagement } from "../reducers/cartReducer";
import { productsManagment } from "../reducers/productReducer";

const UserContext = createContext(null);

const Store = ({ children }) => {
  const [cart, cartDispatch] = cartManagement();

  const [products, productDispatch] = productsManagment();

  return (
    <UserContext.Provider
      value={{ products, productDispatch, cart, cartDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default Store;
