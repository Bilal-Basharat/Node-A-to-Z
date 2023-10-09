const express = require('express');
const app = express();
const PORT = 4000;

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