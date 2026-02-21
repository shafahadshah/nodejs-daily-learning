const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to EJS Templating!",
    date: new Date().toDateString()
  });
});

// Users Route
app.get("/users", (req, res) => {
  const users = ["John", "Jane", "Alice", "Bob"];
  res.render("users", { users });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});