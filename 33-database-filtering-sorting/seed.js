const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/db");

connectDB();

const products = [
  { name: "Laptop", category: "Electronics", price: 1200, rating: 4.5 },
  { name: "Phone", category: "Electronics", price: 800, rating: 4.2 },
  { name: "Shoes", category: "Fashion", price: 150, rating: 4.0 },
  { name: "Watch", category: "Fashion", price: 200, rating: 4.3 }
];

const seedData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Data Seeded");
  mongoose.connection.close();
};

seedData();