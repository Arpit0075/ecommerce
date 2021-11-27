const Purchase = require("../Models/Purchases");

exports.getPurchases = async (req, res) => {
  const purchases = await Purchase.find({
    purchasedBy: req.body.user.user.email,
  });
  res.send(purchases);
};

exports.postPurchases = async (req, res) => {
  //console.log(req.body);

  try {
    const purchase = new Purchase({
      purchasedBy: req.body.user.user.email,
      totalPrice: req.body.totalPrice,
      products: req.body.products,
      paymentId: req.body.paymentId,
      orderId: req.body.orderId,
      signature: req.body.signature,
    });

    const response = await purchase.save();
    res.send(response);
  } catch (err) {
    console.log(err.message);
    res.send(err);
  }
};
