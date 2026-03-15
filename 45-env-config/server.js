import express from "express";
import { config } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});