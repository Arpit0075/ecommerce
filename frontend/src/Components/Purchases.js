import axios from "axios";
import React, { useEffect, useState } from "react";
import "./purchases.css";
import { BASE_URL } from "../Components/url";

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  //eslint-disable-next-line
  useEffect(async () => {
    try {
      let deployedUrl = BASE_URL + "purchases";
      //const localUrl= "http://localhost:3001/purchases"

      const res = await axios.get(deployedUrl, {
        headers: { token: localStorage.getItem("token") },
      });
      setPurchases(res.data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="purchases">
      {purchases.length === 0 ? <h1>No purchases yet!</h1> : null}
      {purchases &&
        purchases.map((p, i) => {
          return (
            <div className="container">
              <p>{i + 1} </p>
              <p>{p.date}</p>
              <div className="products-container">
                {p.products.map((e) => {
                  return (
                    <div className="product">
                      <img src={e.imgSrc} alt="" srcset="" />
                      <p>
                        {e.productName}: {e.userQty}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p> Total Price: {p.totalPrice} </p>
              <p> Order_id: {p.orderId} </p>
              <p> Payment_id: {p.paymentId} </p>
            </div>
          );
        })}
    </div>
  );
}

export default Purchases;
