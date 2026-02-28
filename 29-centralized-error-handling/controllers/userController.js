const asyncHandler = require("../utils/asyncHandler");

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

exports.getUsers = asyncHandler(async (req, res) => {
  res.json(users);
});

exports.getUserById = asyncHandler(async (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(user);
});