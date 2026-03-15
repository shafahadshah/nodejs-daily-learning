import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};