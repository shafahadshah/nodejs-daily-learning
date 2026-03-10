import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin Dashboard"
    });
  }
);

router.get(
  "/profile",
  protect,
  authorizeRoles("admin", "user"),
  (req, res) => {
    res.json({
      message: "User profile access granted"
    });
  }
);

export default router;