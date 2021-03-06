const Product = require("../Models/Products");

module.exports.postProduct = async (req, res, next) => {
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

module.exports.getProducts = async (req, res, next) => {
  try {
    const response = await Product.find();
    res.json(response);
  } catch (err) {
    res.send(err);
  }
};

module.exports.updateProductQuantity = async (req, res, next) => {
  const id = req.params.id;
  const response = await Product.findByIdAndUpdate(id, {
    userQuantity: req.body.userQuantity,
  });
  res.send(response);
};
