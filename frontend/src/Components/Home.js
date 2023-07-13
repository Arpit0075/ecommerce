import { Cart } from "../Context/Context";
import { useContext } from "react";
import SingleProduct from "./SingleProduct";
import "./home.css";
import Button from "@mui/material/Button";

function Home() {
  //for products
  const [state, setstate] = useContext(Cart);
  let products = state.products;

  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
      }}
    >
      <div className="filters">
        <h2>Filters</h2>

        <Button
          variant="contained"
          color="success"
          onClick={() => {
            let arr = [...products];
            arr.sort((a, b) => a.price - b.price);
            setstate({ ...state, products: arr });
          }}
        >
          Asecnding Pricing
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            let arr = [...products];
            arr.sort((a, b) => b.price - a.price);
            setstate({ ...state, products: arr });
          }}
        >
          Decsending Pricing
        </Button>
      </div>
      <div
        className="home"
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return <SingleProduct product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
