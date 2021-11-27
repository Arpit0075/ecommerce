require("dotenv").config();

exports.connect = () => {
  try {
    const mongoose = require("mongoose");
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
