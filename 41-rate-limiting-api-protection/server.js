// Rate Limiting – Prevent API abuse

import express from "express";
import { connectDB } from "./config/db.js";
import { logger } from "./middleware/logger.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use(express.json());
app.use(logger);

app.use("/api", apiLimiter);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API Running with Rate Limiting");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});