const Product = require("../models/Products");

exports.postProduct = async (req, res, next) => {
  const product = new Product({
    productName: req.body.productName,
    inStock: req.body.inStock,
    price: req.body.price,
    imgSrc: req.body.imgSrc,
    fastDelivery: req.body.fastDelivery,
    rating: req.body.rating,
  });
  const response = await product.save();
  res.send(response);
};

exports.getProducts = async (req, res, next) => {
  const response = await Product.find();
  res.json(response);
};

exports.updateProductQuantity = async (req, res, next) => {
  const id = req.params.id;
  const response = await Product.findByIdAndUpdate(id, {
    userQuantity: req.body.userQuantity,
  });
  res.send(response);
};
