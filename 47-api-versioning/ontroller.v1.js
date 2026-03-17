exports.getUsersV1 = (req, res) => {
  res.json({
    version: "v1",
    users: ["John", "Alice"]
  });
};