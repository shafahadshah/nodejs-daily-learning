const express = require('express');
const router = express.Router();
const cache = require('./cacheMiddleware');
const { getPosts } = require('./service');

router.get('/posts', cache, async (req, res) => {
  const data = await getPosts();
  res.json(data);
});

module.exports = router;