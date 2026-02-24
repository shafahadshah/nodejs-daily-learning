const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('REST CRUD API Running...');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});