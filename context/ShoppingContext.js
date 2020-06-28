import React, { createContext, Children } from "react";
// import { cart } from "../hooks/useCart";
import { cartManagement } from "../hooks/useReducer";

const UserContext = createContext(null);

const Store = ({ children }) => {
  const [cart, dispatch] = cartManagement();
  return (
    <UserContext.Provider value={{ cart, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default Store;
