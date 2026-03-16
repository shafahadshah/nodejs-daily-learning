const express = require("express");
const { userValidation } = require("./validator");
const asyncHandler = require("./asyncHandler");

const router = express.Router();

router.post(
  "/users",
  userValidation,
  asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
      success: true,
      message: "User validated successfully",
      data: { name, email }
    });
  })
);

module.exports = router;