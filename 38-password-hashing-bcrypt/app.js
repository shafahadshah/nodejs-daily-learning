import express from "express";
import authRoutes from "./routes/authRoutes.js";
import logger from "./middleware/logger.js";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Password Hashing API");
});

app.listen(3000, () => {
  console.log("Server running");
});