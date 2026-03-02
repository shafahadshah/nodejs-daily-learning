import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/users", userRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();