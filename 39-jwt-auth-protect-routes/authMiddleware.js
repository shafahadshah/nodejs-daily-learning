const jwt = require("jsonwebtoken")

const SECRET = "secret123"

module.exports = (req, res, next) => {
  const header = req.headers.authorization

  if (!header) {
    return res.status(401).json({ message: "No token provided" })
  }

  const token = header.split(" ")[1]

  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: "Invalid token" })
  }
}