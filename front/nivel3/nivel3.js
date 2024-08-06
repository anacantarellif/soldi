const perguntas = [
    //pergunta 1
    {
        pergunta: "O que significa o pilar 'Reconhecer' na Educação Financeira?",
        respostas: [
            { texto: "Identificar problemas financeiros e definir prioridades", correta: true },
            { texto: "Registrar todos os ganhos e despesas", correta: false },
            { texto: "Investir em ações de alto risco", correta: false }
        ],
        explicacao: "Reconhecer é o primeiro passo para obter uma vida financeira saudável. Envolve identificar problemas financeiros, como dívidas e falta de poupança, e definir objetivos claros"
    },
    //pergunta 2
    {
        
        pergunta: "Qual é a função principal do pilar 'Registrar'?",
        respostas: [
            { texto: "Ter muita sorte e contatos influentes", correta: false },
            { texto: "Comprometimento e muita organização", correta: true },
            { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    //pergunta 3
    {
        pergunta: "O que se deve fazer na etapa de 'Revisar' na Educação Financeira?",
        respostas: [
            { texto: "Analisar comportamentos de consumo e corrigir hábitos ruins", correta: true },
            { texto: "Gastar sem se preocupar com o orçamento", correta: false },
            { texto: "Ignorar dívidas acumuladas.", correta: false }
        ],
        explicacao: "Revisar envolve analisar seus hábitos financeiros, identificar comportamentos de consumo impulsivos ou desnecessários e fazer ajustes para melhorar sua saúde financeira."
    },
    //pergunta 4
    {
        pergunta: "Qual é o objetivo final do pilar 'Realizar'?",
        respostas: [
            { texto: "ontinuar com os mesmos hábitos financeiros.", correta: false },
            { texto: "Agir em prol dos objetivos financeiros, cortando custos e investindo estrategicamente", correta: true },
            { texto: "Adquirir mais dívidas para realizar sonhos", correta: false }
        ],
        explicacao: "Realizar é a etapa onde você coloca em prática as ações necessárias para alcançar seus objetivos financeiros, como cortar custos e fazer investimentos estratégicos."
    },
    //pergunta 5
    {
        pergunta: "Por que é importante o registro contínuo das finanças?",
        respostas: [
            { texto: "Para esquecer onde se está gastando o dinheiro.", correta: false },
            { texto: "Para manter um controle efetivo dos ganhos e despesas.vista)", correta: true },
            { texto: "Para aumentar as dívidas mensais.", correta: false }
        ],
        explicacao: "Manter um registro contínuo das finanças ajuda a ter uma visão clara de onde o dinheiro está sendo gasto, facilitando a gestão e o planejamento financeiro."
    },
    //pergunta 6
    {
        pergunta: "O que deve ser feito ao identificar despesas desnecessárias durante a revisão?",
        respostas: [
            { texto: "Ignorar e continuar gastando.", correta: false },
            { texto: "Continuar a fazer compras impulsivas.", correta: false },
            { texto: "Adotar práticas de consumo consciente e cortar gastos desnecessários", correta: true }
        ],
        explicacao: "Ao identificar despesas desnecessárias, é importante adotar práticas de consumo consciente e eliminar gastos que não agregam valor, melhorando assim sua saúde financeira."
    },
];

let indicePerguntaAtual = 0;

const containerPergunta = document.getElementById('container-pergunta');
const containerResultado = document.getElementById('resultado');
const botaoProximaPergunta = document.getElementById('proxima-pergunta');
const botaoFinalizarQuiz = document.getElementById('finalizar-quiz');
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
    if (indicePerguntaAtual < perguntas.length - 1) {
        botaoProximaPergunta.style.display = 'block';
    } else {
        botaoProximaPergunta.style.display = 'none';
        setTimeout(() => {
            containerResultado.style.display = 'none';
            botaoFinalizarQuiz.style.display = 'block';
        }, 2000);
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
        containerResultado.style.display = 'none';
        botaoProximaPergunta.style.display = 'none';
        atualizarBarraProgresso();
    }
});

// Mostrar a primeira pergunta
mostrarPergunta(perguntas[indicePerguntaAtual]);
// Inicializar barra de progresso
atualizarBarraProgresso();