const express = require("express");
const { getUsersV1 } = require("./controller.v1");

const router = express.Router();

router.get("/users", getUsersV1);

module.exports = router;