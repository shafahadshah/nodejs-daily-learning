import mongoose from "mongoose";
import Product from "./models/product.model.js";

await mongoose.connect("mongodb://127.0.0.1:27017/paginationDB");

await Product.deleteMany();

const products = [];

for (let i = 1; i <= 50; i++) {
  products.push({
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 1000),
    category: i % 2 === 0 ? "Electronics" : "Clothing"
  });
}

await Product.insertMany(products);

console.log("Data Seeded");
process.exit();