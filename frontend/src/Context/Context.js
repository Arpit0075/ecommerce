import { createContext, useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Components/url";

export const Cart = createContext();

const Context = ({ children }) => {
  const [state, setstate] = useState({
    products: [],
    cart: [],
  });

  // eslint-disable-next-line
  useEffect(async () => {
    let url = BASE_URL + "products";
    let res = await axios.get(url);

    let result = res.data;
    setstate({ ...state, products: result });
    // eslint-disable-next-line
  }, []);

  return <Cart.Provider value={[state, setstate]}> {children} </Cart.Provider>;
};
export default Context;
