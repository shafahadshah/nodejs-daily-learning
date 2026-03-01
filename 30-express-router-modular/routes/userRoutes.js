const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

// GET All Users
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

// GET Single User
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// CREATE User
router.post("/", (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

// DELETE User
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
});

module.exports = router;