// Simple in-memory database
let data = [];

module.exports = {
  getData: () => data,
  addData: (item) => data.push(item)
};