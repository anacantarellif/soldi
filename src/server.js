const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

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


const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Tarefas',
        version: '1.0.0',
        description: 'API CRUD para gerenciar tarefas',
      },
      servers: [{ url: 'http://localhost:3000' }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
  };

// Redirecionar para a home ao acessar a raiz

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front', 'login', 'login.html'));
});

app.use('/api', usersRouter)
app.use('/api', loginRouter)

app.listen(PORT, () => {
    console.log(`Quiz app listening at http://localhost:${PORT}`);
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
