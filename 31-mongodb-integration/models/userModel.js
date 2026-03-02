import { getDB } from "../config/db.js";

export const createUser = async (userData) => {
  const db = getDB();
  return await db.collection("users").insertOne(userData);
};

export const getUsers = async () => {
  const db = getDB();
  return await db.collection("users").find().toArray();
};