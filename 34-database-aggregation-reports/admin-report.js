const connectDB = require("./db");
const Sale = require("./salesModel");
const data = require("./sales-data.json");
const report = require("./aggregation-report");

async function run() {
  await connectDB();

  await Sale.deleteMany();
  await Sale.insertMany(data);

  await report();

  process.exit();
}

run();