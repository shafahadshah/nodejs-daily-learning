const axios = require('axios');

const getPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

module.exports = { getPosts };