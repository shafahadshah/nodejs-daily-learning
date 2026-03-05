const Sale = require("./salesModel");

async function categoryStats() {
  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
        totalSold: { $sum: "$quantity" }
      }
    }
  ]);

  console.log(result);
}

module.exports = categoryStats;