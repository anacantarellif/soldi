const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const usersRouter = require('./routes/usersRouter')
app.set('port', process.env.PORT);
app.use(express.json());

console.log("teste")
// Habilitar utilização em nossa aplicação
app.use('/api', usersRouter);

module.exports = app;