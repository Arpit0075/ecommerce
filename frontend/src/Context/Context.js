import { createContext, useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

export const Cart = createContext();

const Context = ({ children }) => {
  const [state, setstate] = useState({
    products: [],
    cart: [],
  });

  // eslint-disable-next-line
  useEffect(async () => {
    let res = await axios.get("https://ecommerce918.herokuapp.com/products");
    //console.log(res.data);
    let result = res.data;
    setstate({ ...state, products: result });
    // eslint-disable-next-line
  }, []);

  return <Cart.Provider value={[state, setstate]}> {children} </Cart.Provider>;
};
export default Context;
