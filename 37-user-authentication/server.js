const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Authentication API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});