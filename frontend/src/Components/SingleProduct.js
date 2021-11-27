import React from "react";
import "./singleProduct.css";
import { Cart } from "../Context/Context";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

function SingleProduct({ product }) {
  const [state, setstate] = useContext(Cart);
  let cart = state.cart;
  //console.log(cart);

  const addItem = (p) => {
    let array = [...cart];
    array.push(p);
    setstate({ ...state, cart: array });
  };

  const removeItem = (id) => {
    let array = [...cart];
    array = array.filter((e) => e._id !== id);
    setstate({ ...state, cart: array });
  };

  return (
    <div className="s-product" key={product._id}>
      <h3>{product.productName}</h3>
      {/* <p> Rating: {product.rating}</p> */}
      <Rating name="read-only" value={product.rating} readOnly />
      <p>{product.price} Rs.</p>
      <img src={product.imgSrc} alt="imageze" srcSet="" />
      {cart.some((p) => p._id === product._id) ? (
        <Button
          variant="contained"
          color="error"
          onClick={() => removeItem(product._id)}
        >
          remove from Cart
        </Button>
      ) : (
        <Button variant="contained" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default SingleProduct;
