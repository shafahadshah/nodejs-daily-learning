import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  mongoURI: process.env.MONGO_URI
};