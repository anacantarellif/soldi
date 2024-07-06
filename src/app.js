const express = require('express');
const app = express();


const dotenv = require('dotenv').config();

const usersRouter = require('./routes/usersRouter')

app.set('port', process.env.PORT);
app.set(express.json());

// Habilitar utilização em nossa aplicação
app.use('/api', usersRouter);

module.exports = app;