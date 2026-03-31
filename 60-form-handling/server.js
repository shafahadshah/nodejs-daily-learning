// commit: setup express server
const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/form', formRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});