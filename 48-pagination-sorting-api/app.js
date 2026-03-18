import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/paginationDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

// Pagination + Sorting API
app.get("/products", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;

    const products = await Product.find()
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments();

    res.json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server
app.listen(3000, () => {
  console.log("App running on port 3000");
});