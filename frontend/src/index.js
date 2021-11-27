import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./Context/Context";
import { AuthContext } from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <AuthContext>
        <App />
      </AuthContext>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
