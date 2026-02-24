const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('REST CRUD API Running...');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});