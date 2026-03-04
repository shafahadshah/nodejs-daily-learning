const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    ["sort", "page", "limit"].forEach(f => delete queryObj[f]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, m => `$${m}`);

    let query = Product.find(JSON.parse(queryStr));

    if (req.query.sort) {
      query = query.sort(req.query.sort.split(",").join(" "));
    } else {
      query = query.sort("-createdAt");
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    const products = await query;

    res.json({
      results: products.length,
      page,
      data: products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};