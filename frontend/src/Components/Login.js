import React, { useContext } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Token } from "../Context/AuthContext";
import { BASE_URL } from "../Components/url";

function Login() {
  let navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  //login global state
  // eslint-disable-next-line
  const [auth, setAuth] = useContext(Token);

  //login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = BASE_URL + "users/login";
      const res = await axios.post(url, {
        email: login.email,
        password: login.password,
      });
      if (res.data.message) {
        setMessage(res.data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        setLogin({ ...login, email: "", password: "" });
      }
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={login.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={login.password}
          onChange={handleChange}
        ></input>
        <Button variant="outlined" type="submit">
          Login
        </Button>
        <Link to="/register">Register</Link>
      </form>
      {message}
    </div>
  );
}

export default Login;
