const express = require("express");
const mongo = require("./connection");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
const usersRouter = require("./Routes/users");
const productsRouter = require("./Routes/products");
const purchasesRouter = require("./Routes/purchases");
const orderRouter = require("./Routes/order");
const authorization = require("./Module/authorization");
require("dotenv").config();

app.use(cors());
//connection db

async function loadapp() {
  try {
    await mongo.connect();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get("/", (req, res) => {
      res.send("hello!");
    });

    //routes
    app.use("/users", usersRouter);
    app.use("/products", productsRouter);

    //middleware for authentication
    app.use(authorization.auth);

    //protected route
    app.use("/purchases", purchasesRouter);
    app.use("/order", orderRouter);

    app.listen(port);
  } catch (err) {
    console.log(err);
  }
}
loadapp();
