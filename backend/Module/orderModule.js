const Razorpay = require("razorpay");
require("dotenv").config();

var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.kEY_SECRET,
});

exports.getOrder = async (req, res) => {
  //console.log(req);
  const totalAmount = req.params.totalAmount * 100;
  const amount = totalAmount;
  const currency = "INR";

  instance.orders.create({ amount, currency }, (error, order) => {
    //console.log(order);
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(order);
  });
};
