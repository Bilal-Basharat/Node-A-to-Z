const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes')

const PORT = 4000;
const bodyParser = require('body-parser');
require('./utilis/db');

app.use(bodyParser.json());

app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the website');
});

app.get('/welcome', (req, res) => {
  res.send('Welcome Bilal Basharat');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
    });

// Path: package.json