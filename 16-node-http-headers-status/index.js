const express = require("express");
const app = express();

app.use(express.json());

// Custom headers route
app.get("/custom", (req, res) => {
  res.set({
    "X-Powered-By": "Node.js",
    "X-App-Name": "HTTP Demo"
  });
  res.status(200).json({
    message: "Custom headers sent!",
    timestamp: new Date()
  });
});

// Error route
app.get("/error", (req, res) => {
  res.set("X-App-Name", "HTTP Demo");
  res.status(404).json({
    error: "Resource not found",
    code: 404
  });
});

// POST route example
app.post("/create", (req, res) => {
  const data = req.body;
  if (!data.name) {
    return res.status(400).json({ error: "Name is required", code: 400 });
  }
  res.status(201).json({ message: "Resource created", data });
});

// Default 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", code: 404 });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
