const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      minLength: 3,
      maxLength: 25,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    rating: String,
    fastDelivery: Boolean,
    inStock: Number,
  },
  { collection: "products" } //we can specify the name for our collection here
);

const Product = mongoose.model("ProductModel", productSchema);
module.exports = Product;
