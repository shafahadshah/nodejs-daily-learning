const express = require("express");
const userRoutes = require("./routes/userRoutes");      // Import User Routes
const productRoutes = require("./routes/productRoutes"); // Import Product Routes

const app = express();
const PORT = 3000;

// Built-in Middleware to parse JSON requests
app.use(express.json());

// Modular Route Mounting
// All requests to /api/users will go to userRoutes
app.use("/api/users", userRoutes);

// All requests to /api/products will go to productRoutes
app.use("/api/products", productRoutes);

// Root Route (Home)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Express Router - Modular Route Handling"
  });
});

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Start the server and listen on PORT
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});