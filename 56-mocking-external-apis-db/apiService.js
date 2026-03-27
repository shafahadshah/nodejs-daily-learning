const axios = require("axios");

async function fetchUser(id) {
  const response = await axios.get(`https://api.example.com/users/${id}`);
  return response.data;
}

module.exports = { fetchUser };