const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchasesSchema = new Schema(
  {
    purchasedBy: {
      type: String,
      minLength: 3,
      maxLength: 25,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    products: [],
    // [{productName: quantity},]
    date: {
      type: Date,
      default: () => Date.now(),
    },
    paymentId: String,
    orderId: String,
    signature: String,
  },
  { collection: "purchases" } //we can specify the name for our collection here
);

const Purchase = mongoose.model("PurchaseModel", purchasesSchema);
module.exports = Purchase;
