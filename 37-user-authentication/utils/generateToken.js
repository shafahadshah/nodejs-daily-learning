const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", {
    expiresIn: "7d"
  });
};

module.exports = generateToken;