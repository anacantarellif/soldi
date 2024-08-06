const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const usersRouter = require('./routes/usersRouter')
const loginRouter = require('./routes/loginRouter');

// Variáveis para armazenar as contagens de respostas
let respostas = { A: 0, B: 0, C: 0 };

// Middleware para analisar corpos de solicitações URL-encoded e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Redirecionar para a home ao acessar a raiz

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front', 'walktrough', 'walktrough.html'));
});

app.use('/api', usersRouter)
app.use('/api', loginRouter)

app.listen(PORT, () => {
    console.log(`Quiz app listening at http://localhost:${PORT}`);
});