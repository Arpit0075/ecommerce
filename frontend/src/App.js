import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ShoppingCart from "./Components/ShoppingCart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Address from "./Components/Address";
import PrivateRoute from "./PrivateRoute.js";
import Purchases from "./Components/Purchases";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<ShoppingCart />} />
          <Route
            path="/cart/address"
            element={
              <PrivateRoute>
                <Address />
              </PrivateRoute>
            }
          />
          <Route
            path="/purchases"
            element={
              <PrivateRoute>
                <Purchases />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
