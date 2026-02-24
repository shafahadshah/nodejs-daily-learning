const userModel = require('../models/userModel');

exports.getUsers = (req, res) => {
  res.json(userModel.getAll());
};

exports.getUser = (req, res) => {
  const user = userModel.getById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email required' });
  }

  const newUser = userModel.create({ name, email });
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const updatedUser = userModel.update(req.params.id, req.body);

  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(updatedUser);
};

exports.deleteUser = (req, res) => {
  const deleted = userModel.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User deleted successfully' });
};