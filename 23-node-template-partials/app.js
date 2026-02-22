const express = require('express');
const path = require('path');
const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');

// Set public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});