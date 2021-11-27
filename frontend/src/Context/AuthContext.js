import { createContext, useState } from "react";

export const Token = createContext();

export const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return <Token.Provider value={[auth, setAuth]}> {children} </Token.Provider>;
};
