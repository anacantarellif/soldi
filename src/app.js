const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();

const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors())

// Habilitar utilização em nossa aplicação
app.use('/api', usersRouter);
app.use('/api', loginRouter);

module.exports = app;