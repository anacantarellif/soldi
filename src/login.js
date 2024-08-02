const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const loginRouter = require('./routers/loginRouter');


const port = 3000;

app.use(bodyParser.json());
app.use('/api', loginRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
