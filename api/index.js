const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Vercel Express API!' });
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is a simple project deployed on Vercel.' });
});

module.exports = app;
