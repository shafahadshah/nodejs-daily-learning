import { createUser, getUsers } from "../models/userModel.js";

export const addUser = async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

export const fetchUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};