const express = require('express');
const app = express();

app.use(express.json());

const PORT = 4000;

// Sample in-memory products array
let products = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Phone" }
];

/* ===========================
   GET - Fetch all products
=========================== */
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

/* ===========================
   GET - Fetch single product
=========================== */
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

/* ===========================
   POST - Add new product
=========================== */
app.post('/products', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newProduct = {
    id: products.length + 1,
    title
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct
  });
});

/* ===========================
   PUT - Modify product
=========================== */
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  product.title = req.body.title || product.title;

  res.json({
    message: "Product updated successfully",
    data: product
  });
});

/* ===========================
   DELETE - Remove product
=========================== */
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const removed = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    data: removed[0]
  });
});

/* ===========================
   Start Server
=========================== */
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});