import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;

    const products = await Product.find()
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      data: products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};