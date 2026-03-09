const express = require("express")
const { register, login } = require("./authController")
const authMiddleware = require("./authMiddleware")

const router = express.Router()

router.post("/register", register)

router.post("/login", login)

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route success",
    user: req.user
  })
})

module.exports = router