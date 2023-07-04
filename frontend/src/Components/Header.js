import React from "react";
import "./header.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Cart } from "../Context/Context";
import { useContext } from "react";
import { Token } from "../Context/AuthContext";

function Header() {
  const [state] = useContext(Cart);
  let cart = state.cart;

  //for auth
  const [auth, setAuth] = useContext(Token);

  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>Green Channel</h1>
        </Link>
        {auth && <p>Welcome!!</p>}
      </div>
      <div className="second">
        <Link className="svg" to="/cart">
          <ShoppingCartIcon /> {cart.length}
        </Link>
        <Button variant="contained">
          {!auth ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                setAuth(false);
              }}
            >
              Logout
            </Link>
          )}
        </Button>
        {auth && (
          <Button variant="contained" sx={{ marginLeft: "0.5rem" }}>
            <Link to="/purchases">Your Purchases</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
