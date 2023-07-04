import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import "./address.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { Cart } from "../Context/Context";
import { BASE_URL } from "../Components/url";

function Address() {
  const [state, setstate] = useContext(Cart);
  const cart = state.cart;

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  //total amount in the cart
  let totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.userQty * curr.price;
  }, 0);

  //making payment
  const handleOrder = async () => {
    let url1 = BASE_URL + `order/${totalAmount}`;
    const res = await axios.get(url1, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    if (res.status !== 200) return;
    var options = {
      key_id: process.env.REACT_APP_KEY_ID, // Enter the Key ID generated from the Dashboard
      key_secret: process.env.REACT_APP_kEY_SECRET,
      amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        const data = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        //updating payment details on the database
        let url2 = BASE_URL + "purchases";
        const newRes = await axios.post(
          url2,
          {
            totalPrice: totalAmount,
            products: cart,
            paymentId: data.paymentId,
            orderId: data.orderId,
            signature: data.signature,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        if (newRes.data) {
          setstate({ ...state, cart: [] });
          setOrderSubmitted(true);
        }
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };

  return (
    <div className="address">
      <h3>Please enter your full address and other details below :</h3>
      <TextField id="standard-basic" label="Address" variant="standard" />
      <TextField id="standard-basic" label="Pincode" variant="standard" />
      <TextField
        id="standard-basic"
        label="Contact Number"
        variant="standard"
      />
      <TextField id="standard-basic" label="Email Address" variant="standard" />
      <h4>Payment Gateway!</h4>
      <Button className="btn" variant="contained" onClick={handleOrder}>
        Proceed ahead to pay
      </Button>

      {orderSubmitted && <p>Order Submitted</p>}
    </div>
  );
}

export default Address;
