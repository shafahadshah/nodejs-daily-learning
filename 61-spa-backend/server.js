const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});