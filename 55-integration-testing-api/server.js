const app = require("./app");
const mongoose = require("mongoose");

const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  app.listen(3000, () => {
    console.log("Server running");
  });
};

start();