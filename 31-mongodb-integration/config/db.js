import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("nodejs_course");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed", error);
    process.exit(1);
  }
};

export const getDB = () => db;