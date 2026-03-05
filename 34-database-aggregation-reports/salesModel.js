const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  product: String,
  category: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model("Sale", salesSchema);