const axios = require("axios");

jest.mock("axios");

axios.get = jest.fn(() =>
  Promise.resolve({
    data: { id: 1, name: "Mock User" }
  })
);

module.exports = axios;