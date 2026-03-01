const express = require("express");
const router = express.Router();

// Dummy Data
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

// GET All Users
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
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

module.exports = router;