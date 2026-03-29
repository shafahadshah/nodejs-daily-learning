const express = require("express");
const router = express.Router();

let items = [];

router.get("/items", (req, res) => {
  res.json(items);
});

router.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.json({ message: "Item added" });
});

module.exports = router;