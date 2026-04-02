const client = require('./redisClient');

const cache = (req, res, next) => {
  const key = req.originalUrl;

  client.get(key).then((data) => {
    if (data) {
      return res.json(JSON.parse(data));
    } else {
      res.sendResponse = res.json;
      res.json = (body) => {
        client.setEx(key, 60, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    }
  });
};

module.exports = cache;