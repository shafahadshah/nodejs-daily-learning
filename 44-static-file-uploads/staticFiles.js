const express = require("express");
const path = require("path");

const serveUploads = (app) => {
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));
};

module.exports = serveUploads;