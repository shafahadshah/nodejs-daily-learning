const users = require("../data/users");

// GET /users
exports.getAllUsers = (req, res) => {
  const { age, name } = req.query;

  let filteredUsers = users;

  if (age) {
    filteredUsers = filteredUsers.filter(
      user => user.age === parseInt(age)
    );
  }

  if (name) {
    filteredUsers = filteredUsers.filter(
      user => user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.json(filteredUsers);
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};