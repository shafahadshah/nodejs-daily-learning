const express = require("express");
const fs = require("fs");

const uploadRoutes = require("./uploadRoutes");
const serveUploads = require("./staticFiles");

const app = express();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use(express.json());

serveUploads(app);

app.use("/api/files", uploadRoutes);

app.get("/", (req, res) => {
  res.json({
    project: "Static File Upload API",
    folder: "44-static-file-uploads",
    features: [
      "Static file serving",
      "Image uploads",
      "Document uploads",
      "Multer middleware",
      "Express REST API"
    ]
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});