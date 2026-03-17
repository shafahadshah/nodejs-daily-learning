const express = require("express");
const config = require("./config");

const v1Routes = require("./routes.v1");
const v2Routes = require("./routes.v2");

const app = express();

app.use(express.json());

// Versioned routes
app.use("/api/v1", v1Routes);
app.use("/api/v2", v2Routes);

app.get("/", (req, res) => {
  res.send("API Versioning Running");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});