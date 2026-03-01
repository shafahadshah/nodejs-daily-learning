const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

// GET All Products
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
});

// CREATE Product
router.post("/", (req, res) => {
  const { name } = req.body;

  const newProduct = {
    id: products.length + 1,
    name
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct
  });
});

module.exports = router;