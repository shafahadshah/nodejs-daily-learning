const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Express Router Modular Application"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});