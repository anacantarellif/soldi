// const perguntas = [
//     {
//         pergunta: "O que é a educação financeira? Um processo no qual:",
//         respostas: [
//             { texto: "os indivíduos melhoram a sua compreensão em relação ao dinheiro.", correta: true },
//             { texto: "os indivíduos melhoram a sua compreensão em relação aos investimentos financeiros avançados.", correta: false },
//             { texto: "os indivíduos melhoram a sua compreensão em relação à contabilidade empresarial.", correta: false }
//         ],
//         explicacao: "A educação financeira é o processo no qual os indivíduos melhoram a sua compreensão em relação ao dinheiro e produtos financeiros com informação, formação e orientação. Na prática, educação financeira é o conjunto de todos os aprendizados sobre como gerir bem as finanças. Mais do que apenas poupar, educação financeira é sobre saber como utilizar o dinheiro ou salário recebido, planejando, calculando e tomando decisões certeiras, que não vão impactar negativamente o bolso."
//     },
//     {
//         pergunta: " Ter educação financeira é um passo fundamental para a estabilidade financeira, mas ela exige ",
//         respostas: [
//             { texto: "Ter muita sorte e contatos influentes", correta: false },
//             { texto: "Comprometimento e muita organização", correta: true },
//             { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
//         ],
//         explicacao: "Colocar os gastos no papel, anotar as sobras e planejar riscos é fundamental para que você obtenha tranquilidade em relação às suas finanças mesmo em um momento de dificuldade econômica"
//     },
//     // Adicione mais perguntas aqui no mesmo formato
// ];

const perguntas = [
    {
        pergunta: "Ter educação financeira é um passo fundamental para a estabilidade financeira, mas ela exige:",
        respostas: [
            { texto: "Ter muita sorte e contatos influentes", correta: false },
            { texto: "Comprometimento e muita organização", correta: true },
            { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    {
        pergunta: "Ter educação financeira é um passo fundamental para a estabilidade financeira, mas ela exige:",
        respostas: [
            { texto: "Ter muita sorte e contatos influentes", correta: false },
            { texto: "Comprometimento e muita organização", correta: true },
            { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    {
        pergunta: "Ter educação financeira é um passo fundamental para a estabilidade financeira, mas ela exige:",
        respostas: [
            { texto: "Ter muita sorte e contatos influentes", correta: false },
            { texto: "Comprometimento e muita organização", correta: true },
            { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    // Adicione mais perguntas aqui no mesmo formato
];

let indicePerguntaAtual = 0;

const containerPergunta = document.getElementById('container-pergunta');
const containerResultado = document.getElementById('resultado');
const botaoProximaPergunta = document.getElementById('proxima-pergunta');
const barraProgresso = document.getElementById('progresso');

function mostrarPergunta(pergunta) {
    containerPergunta.innerHTML = `
        <div class="pergunta">${pergunta.pergunta}</div>
        <ul class="respostas">
            ${pergunta.respostas.map((resposta, indice) => `
                <li><button onclick="selecionarResposta(${indice})">${resposta.texto}</button></li>
            `).join('')}
        </ul>
    `;
}

function selecionarResposta(indice) {
    const pergunta = perguntas[indicePerguntaAtual];
    const resposta = pergunta.respostas[indice];
    if (resposta.correta) {
        containerResultado.innerHTML = `<div class="correto"><strong>Correto!</strong> ${pergunta.explicacao}</div>`;
        containerResultado.classList.add('correto');
        containerResultado.classList.remove('errado');
    } else {
        containerResultado.innerHTML = `<div class="errado"><strong>Errado!</strong> ${pergunta.explicacao}</div>`;
        containerResultado.classList.add('errado');
        containerResultado.classList.remove('correto');
    }
    containerResultado.style.display = 'block';
    botaoProximaPergunta.style.display = 'block';
    atualizarBarraProgresso();
}

function atualizarBarraProgresso() {
    const progresso = ((indicePerguntaAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = progresso + '%';
}

botaoProximaPergunta.addEventListener('click', () => {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta(perguntas[indicePerguntaAtual]);
        containerResultado.style.display = 'none';
        botaoProximaPergunta.style.display = 'none';
    } else {
        containerPergunta.innerHTML = '<div class="pergunta">Quiz finalizado!</div>';
        botaoProximaPergunta.style.display = 'none';
    }
});

// Mostrar a primeira pergunta
mostrarPergunta(perguntas[indicePerguntaAtual]);
// Inicializar barra de progresso
atualizarBarraProgresso();