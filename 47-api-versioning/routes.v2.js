const express = require("express");
const { getUsersV2 } = require("./controller.v2");

const router = express.Router();

router.get("/users", getUsersV2);

module.exports = router;