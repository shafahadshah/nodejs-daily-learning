import users from "../config/db.js";
import { hashPassword } from "../utils/hashPassword.js";
import { comparePassword } from "../utils/comparePassword.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const hashed = await hashPassword(password);

  users.push({ username, password: hashed });

  res.json({ message: "User registered" });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await comparePassword(password, user.password);

  if (!valid) return res.status(401).json({ message: "Invalid password" });

  res.json({ message: "Login success" });
};