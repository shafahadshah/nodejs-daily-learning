import express from "express";
import { config } from "./config.js";
import { connectDB } from "./db.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});