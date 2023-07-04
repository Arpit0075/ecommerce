import React, { useState } from "react";
import "./register.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { BASE_URL } from "../Components/url";

function Login() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = BASE_URL + "users/register";
      const res = await axios.post(url, {
        name: register.name,
        email: register.email,
        password: register.password,
      });
      if (res.data) {
        setMessage(res.data);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else if (res.data.message) {
        setMessage(res.data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
      setRegister({ ...register, name: "", email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={register.name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={register.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={register.password}
          onChange={handleChange}
        ></input>

        <Button variant="outlined" type="submit">
          Register
        </Button>
      </form>
      {message}
    </div>
  );
}

export default Login;
