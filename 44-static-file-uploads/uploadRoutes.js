const express = require("express");
const router = express.Router();

const upload = require("./uploadMiddleware");
const { uploadFile } = require("./uploadController");

router.post("/upload", upload, uploadFile);

module.exports = router;