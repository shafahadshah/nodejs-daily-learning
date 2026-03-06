import express from "express";
import { connectDB } from "./config/db.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api", accountRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});