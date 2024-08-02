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
// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '..', 'resultados')));
app.use(express.static(path.join(__dirname, '..', 'front')));

// Rotas para perguntas (1 a 13)
for (let i = 1; i <= 13; i++) {
    app.get(`/nivel1/pergunta${i}`, (req, res) => res.sendFile(path.join(__dirname, '..', 'front', 'nivel1', `pergunta${i}.html`)));
}

// Rotas para resultados
app.get('/nivel1/resultadoA', (req, res) => res.sendFile(path.join(__dirname, '..', 'resultados', 'nivel1', 'resultadoNivel1-A.html')));
app.get('/nivel1/resultadoB', (req, res) => res.sendFile(path.join(__dirname, '..', 'resultados', 'nivel1', 'resultadoNivel1-B.html')));
app.get('/nivel1/resultadoC', (req, res) => res.sendFile(path.join(__dirname, '..', 'resultados', 'nivel1', 'resultadoNivel1-C.html')));

// Rota para lidar com a resposta do formulário nível 1
app.post('/nivel1/answer', (req, res) => {
    const answer = req.body.answer; // Resposta selecionada pelo usuário
    const nextQuestion = parseInt(req.body.nextQuestion); // Próxima pergunta a ser exibida (convertida para número inteiro)

    // Incrementa a contagem da resposta selecionada
    if (respostas[answer] !== undefined) {
        respostas[answer]++;
    }

    // Redireciona para a próxima pergunta ou para a página de resultado final
    if (nextQuestion > 13) {
        // Determina a resposta mais escolhida
        const maxAnswer = Object.keys(respostas).reduce((a, b) => respostas[a] > respostas[b] ? a : b);
        return res.redirect(`/nivel1/resultado${maxAnswer}`);
    } else {
        return res.redirect(`/nivel1/pergunta${nextQuestion}`);
    }
});

// Rota para determinar o resultado final
app.get('/result', (req, res) => {
    let maxCount = -1;
    let maxAnswer = '';
    for (let key in respostas) {
        if (respostas[key] > maxCount) {
            maxCount = respostas[key];
            maxAnswer = key;
        }
    }
    res.redirect(`/nivel1/resultado${maxAnswer}`);
});

// Rotas para perguntas do nível 2
for (let i = 1; i <= 7; i++) {
    app.get(`/nivel2/pergunta${i}`, (req, res) => res.sendFile(path.join(__dirname, '..', 'front', 'nivel2', `pergunta${i}.html`)));
}

// Rotas para resultados corretos e errados do nível 2
for (let i = 1; i <= 7; i++) {
    app.get(`/nivel2/pergunta${i}/correto`, (req, res) => res.sendFile(path.join(__dirname, '..', 'resultados', 'nivel2', `correto${i}.html`)));
    app.get(`/nivel2/pergunta${i}/errado`, (req, res) => res.sendFile(path.join(__dirname, '..', 'resultados', 'nivel2', `errado${i}.html`)));
}

// Rota para lidar com a resposta do formulário do nível 2
app.post('/nivel2/answer', (req, res) => {
    const { answer, correctAnswer, questionNumber } = req.body;

    if (answer === correctAnswer) {
        return res.redirect(`/nivel2/pergunta${questionNumber}/correto`);
    } else {
        return res.redirect(`/nivel2/pergunta${questionNumber}/errado`);
    }
});


// Redirecionar para a home ao acessar a raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front', 'home.html'));
});

app.use('/api', usersRouter)
app.use('/api', loginRouter)

app.listen(PORT, () => {
    console.log(`Quiz app listening at http://localhost:${PORT}`);
});