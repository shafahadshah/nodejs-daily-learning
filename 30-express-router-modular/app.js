const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Mount User Routes
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Express Router Modular Application"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});