import React from "react";
import { Cart } from "../Context/Context";
import { useContext } from "react";
import "./shoppingCart.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Token } from "../Context/AuthContext";

function ShoppingCart() {
  const [state, setstate] = useContext(Cart);
  let cart = state.cart;

  //auth state for proceeding to shop ahead
  const [auth] = useContext(Token);

  const increament = (id) => {
    let array = [...cart];
    let index = array.findIndex((e) => e._id === id);
    cart[index].userQty = cart[index].userQty + 1;

    if (cart[index].userQty > cart[index].inStock) {
      cart[index].userQty = 1;
      setstate({ ...state, cart });
    }
    setstate({ ...state, cart });
  };
  const decreament = (id) => {
    let array = [...cart];
    let index = array.findIndex((e) => e._id === id);
    cart[index].userQty = cart[index].userQty - 1;

    if (cart[index].userQty < 0) {
      cart[index].userQty = 1;
      setstate({ ...state, cart });
    }

    setstate({ ...state, cart });
  };

  return (
    <div className="shoppingCart">
      {cart.length === 0 ? (
        <h1>Cart is Empty!</h1>
      ) : (
        cart.map((c) => {
          return (
            <div className="eachCart" key={c._id}>
              <img alt="imageze" src={c.imgSrc} />
              <p> Name: {c.productName}</p>
              <p>Rs: {c.price}</p>
              <Button variant="text" onClick={() => increament(c._id)}>
                +
              </Button>
              {Number(c.userQty)}
              <Button variant="text" onClick={() => decreament(c._id)}>
                -
              </Button>
            </div>
          );
        })
      )}
      <h3 style={{ textAlign: "center", borderTop: "2px  solid lightblue" }}>
        Total Price:
        {cart.reduce((acc, curr) => {
          return acc + curr.userQty * curr.price;
        }, 0)}
      </h3>
      {!auth && <h4>Please login before proceeding</h4>}

      <Link className="a" to="/cart/address">
        <Button className="btn" variant="contained">
          Proceed Ahead!!
        </Button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
