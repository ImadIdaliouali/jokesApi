const express = require('express');

const jokeRoutes = require('./routes/jokeRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/jokes', jokeRoutes);

module.exports = app;
