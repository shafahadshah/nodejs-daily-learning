const User = require("./userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SECRET = "secret123"

exports.register = async (req, res) => {
  const { name, email, password } = req.body

  const hash = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hash
  })

  res.json(user)
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) return res.status(400).json({ message: "User not found" })

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) return res.status(400).json({ message: "Wrong password" })

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" })

  res.json({ token })
}