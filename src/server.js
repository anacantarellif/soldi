// const app = require('./app')
// const port = app.get('port')



const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Variáveis para armazenar as contagens de respostas
let respostas = { A: 0, B: 0, C: 0 };

// Middleware para analisar corpos de solicitações URL-encoded e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));



// Rotas para perguntas (1 a 13)
for (let i = 1; i <= 13; i++) {
    app.get(`/pergunta${i}`, (req, res) => res.sendFile(path.join(__dirname, 'views', `pergunta${i}.html`)));
}

// Rotas para resultados
app.get('/resultadoA', (req, res) => res.sendFile(path.join(__dirname, 'public', 'resultadoNivel1-A.html')));
app.get('/resultadoB', (req, res) => res.sendFile(path.join(__dirname, 'public', 'resultadoNivel1-B.html')));
app.get('/resultadoC', (req, res) => res.sendFile(path.join(__dirname, 'public', 'resultadoNivel1-C.html')));

// Rota para lidar com a resposta do formulário
app.post('/answer', (req, res) => {
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
        return res.redirect(`/resultado${maxAnswer}`);
    } else {
        return res.redirect(`/pergunta${nextQuestion}`);
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
    res.redirect(`/resultado${maxAnswer}.html`);
});

// Redirecionar para a primeira pergunta ao acessar a raiz
app.get('/', (req, res) => {
    res.redirect('../views/home.html');
});

app.listen(PORT, () => {
    console.log(`Quiz app listening at http://localhost:${PORT}`);
});
