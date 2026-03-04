const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/filterDB");
    console.log("Database Connected");
  } catch (error) {
    console.error("Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;