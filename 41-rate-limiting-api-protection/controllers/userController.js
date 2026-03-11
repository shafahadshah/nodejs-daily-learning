export const getUsers = (req, res) => {
  res.json({
    success: true,
    users: ["Ali", "Sara", "John"]
  });
};