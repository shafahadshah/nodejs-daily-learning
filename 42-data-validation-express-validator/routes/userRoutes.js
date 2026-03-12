const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/userController");
const { userValidationRules } = require("../validators/userValidator");
const validate = require("../middleware/validationResultHandler");

router.post(
  "/users",
  userValidationRules,
  validate,
  createUser
);

module.exports = router;