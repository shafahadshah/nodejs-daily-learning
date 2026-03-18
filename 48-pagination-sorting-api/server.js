import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());
connectDB();

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});