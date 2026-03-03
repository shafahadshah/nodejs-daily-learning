import express from "express";
import User from "./models/User.js";
import Post from "./models/Post.js";

const router = express.Router();

/* USER ROUTES */

// Create User
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* POST ROUTES */

// Create Post
router.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Posts With Author (Relation)
router.get("/posts", async (req, res) => {
  const posts = await Post.find().populate("author");
  res.json(posts);
});

export default router;