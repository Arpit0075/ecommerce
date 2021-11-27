import { Cart } from "../Context/Context";
import { useContext } from "react";
import SingleProduct from "./SingleProduct";
import "./home.css";
import Button from "@mui/material/Button";

function Home() {
  //for products
  const [state, setstate] = useContext(Cart);
  let products = state.products;
  //console.log(state);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        // flexDirection: "column"
      }}
    >
      <div className="filters">
        <h2>Filters</h2>

        <Button
          variant="contained"
          color="success"
          onClick={() => {
            products.sort((a, b) => a - b);
            setstate({ ...state, products });
          }}
        >
          Asecnding Pricing
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            products.sort((a, b) => b - a);
            setstate({ ...state, products });
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
