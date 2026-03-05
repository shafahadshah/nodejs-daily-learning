const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/aggregation_demo");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB connection error");
  }
};

module.exports = connectDB;