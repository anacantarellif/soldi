const perguntas = [
    {
        pergunta: "com o que ganha por mês consegue pagar todas suas despesa?",
        respostas: [
            { letra: 'A', texto: "pago tudo e ainda sobra 10%" },
            { letra: 'B', texto: "consigo mas gasto exatamente o que eu ganho" },
            { letra: 'C', texto: "não, preciso pedir emprestado pro banco ou familiares e amigos" }
        ]
    },
    {
        pergunta: "Como você realiza o pagamento dessas despesas?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "você possui alguma dívida em atraso?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Realiza orçamento financeiro mensalmente?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Você consegue fazer algum tipo de investimento?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Como planeja a aposentadoria?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "O que você entende sobre Independência Financeira?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Você sabe quais são suas metas e objetivos de curto, médio e longo prazo?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Você realiza pesquisa de preços antes de compar?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Antes de fazer uma nova prestação, você soma as que já precisa pagar no fim do mês?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Se acontecesse um imprevisto que alterasse sua condição financeira, demissão, por exemplo, qual seria sua reação?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "Por quanto tempo conseguiria manter seu padrão de vida se parasse de receber o que ganha?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
    {
        pergunta: "O que você faz quando quer comprar um produto?",
        respostas: [
            { letra: 'A', texto: "Alternativa A" },
            { letra: 'B', texto: "Alternativa B" },
            { letra: 'C', texto: "Alternativa C" }
        ]
    },
];

const resultados = [
    {
        texto: "Parabéns! Você sabe exatamente onde está sendo utilizado o seu dinheiro e as principais possibilidades de investimento e segurança para caso ocorra algum imprevisto, mantendo sua saúde financeira. Ser financeiramente consciente não é uma tarefa fácil, exige além de disciplina, muita força de vontade para mudar de vida.",
    },
    {
        texto: "Sua vida financeira está em um bom nível de estabilidade, mas a ausência ou o controle de dívidas não pode se tornar um hábito. Isso, pois mesmo com o controle das suas contas, você ainda não possui o costume de poupar dinheiro ou investi-los de forma a adquirir lucros futuros. Sua vida financeira está baseada no equilíbrio de gastos e isso pode acabar se desestabilizando caso ocorra alguma surpresa no futuro.Portanto, existe a necessidade, hoje, de que você realize um diagnóstico financeiro juntamente com a sua família. Para isso é necessário que vocês estabeleçam um período de cotação de gastos, onde tudo que for comprado deve ser registrado no tempo definido por vocês. A partir deste diagnóstico, você pode traçar metas a curto, médio e longo prazo, visando os seus sonhos de acordo com o tempo e o custo de cada objetivo.",
    },
    {
        texto: "O seu padrão financeiro saiu um pouco dos eixos, mas não se preocupe, isso nem sempre significa um problema. Agora, você precisa traçar um diagnóstico para saber em qual momento a sua situação financeira deu um deslize. A partir daí, você deverá focar para aprender um pouco mais sobre educação financeira, entender suas alternativas, para que então seja possível definir um plano de ação. Tenha calma! O importante neste momento é não se desanimar e colocar a cabeça para cima. Novos caminhos estão por vir e o importante é que tenhamos maturidade e foco para passar pelos desafios mantendo os pés no chão",
    }
]

let indicePerguntaAtual = 0;
let contagemA = 0;
let contagemB = 0;
let contagemC = 0;

const containerPergunta = document.getElementById('container-pergunta');
const botaoProximaPergunta = document.getElementById('proxima-pergunta');
const botaoFinalizarQuiz = document.getElementById('finalizar-quiz');
const barraProgresso = document.getElementById('progresso');

function mostrarPergunta(pergunta) {
    containerPergunta.innerHTML = `
        <div class="pergunta">${pergunta.pergunta}</div>
        <ul class="respostas">
            ${pergunta.respostas.map((resposta, indice) => `
                <li><button onclick="selecionarResposta('${resposta.letra}')">${resposta.texto}</button></li>
            `).join('')}
        </ul>
    `;
}

function selecionarResposta(letra) {
    if (letra === 'A') {
        contagemA++;
    } else if (letra === 'B') {
        contagemB++;
    } else if (letra === 'C') {
        contagemC++;
    }

    if (indicePerguntaAtual < perguntas.length - 1) {
        botaoProximaPergunta.style.display = 'block';
    } else {
        botaoProximaPergunta.style.display = 'none';
        botaoFinalizarQuiz.style.display = 'block';
    }
}

function atualizarBarraProgresso() {
    const progresso = ((indicePerguntaAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = progresso + '%';
}

botaoProximaPergunta.addEventListener('click', () => {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta(perguntas[indicePerguntaAtual]);
        botaoProximaPergunta.style.display = 'none';
        atualizarBarraProgresso();
    }
});

function mostrarResultado() {
    let resultadoFinal = '';
    if (contagemA > contagemB && contagemA > contagemC) {
        resultadoFinal = 'Investidor';
    } else if (contagemB > contagemA && contagemB > contagemC) {
        resultadoFinal = 'Equilibrado financeiramente';
    } else if (contagemC > contagemA && contagemC > contagemB) {
        resultadoFinal = 'Endividado';
    } else {
        resultadoFinal = 'Indefinido';
    }

    containerPergunta.innerHTML = `
        <div class="resultado-final">Seu perfil financeiro é: <strong>${resultadoFinal}</strong></div>
    `;
    botaoFinalizarQuiz.style.display = 'none';
}

// Mostrar a primeira pergunta
mostrarPergunta(perguntas[indicePerguntaAtual]);
// Inicializar barra de progresso
atualizarBarraProgresso();
