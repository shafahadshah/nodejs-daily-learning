const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const logger = require("./middleware/logger");

const PORT = 3000;

app.use(express.json());
app.use(logger);

// Routes
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Route Params & Query Params Example");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});