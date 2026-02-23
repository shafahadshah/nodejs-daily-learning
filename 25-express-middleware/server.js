const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: "Server is running" });
});

app.get('/secure', auth, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});