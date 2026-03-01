const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Modular Route Mounting
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Express Router - Modular Route Handling"
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});