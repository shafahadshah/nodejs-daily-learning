exports.getUsersV2 = (req, res) => {
  res.json({
    version: "v2",
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Alice" }
    ]
  });
};