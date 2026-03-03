import express from "express";
import connectDB from "./db.js";
import { PORT } from "./config.js";
import router from "./routes.js";

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});