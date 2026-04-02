const express = require('express');
const cacheRoute = require('./routes');

const app = express();

app.use('/api', cacheRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});