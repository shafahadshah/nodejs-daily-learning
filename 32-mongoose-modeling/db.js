import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export default connectDB;