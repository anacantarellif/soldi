const perguntas = [
    //pergunta 1
    {
        pergunta: "O que é a educação financeira? Um processo na qual:",
        respostas: [
            { texto: "os indivíduos melhoram a sua compreensão em relação ao dinheiro.", correta: true },
            { texto: "os indivíduos melhoram a sua compreensão em relação aos investimentos financeiros avançados", correta: false },
            { texto: "os indivíduos melhoram a sua compreensão em relação à contabilidade empresarial", correta: false }
        ],
        explicacao: "A educação financeira é o processo no qual os indivíduos melhoram a sua compreensão em relação ao dinheiro e produtos financeiros com informação, formação e orientação. Na prática, educação financeira é o conjunto de todos os aprendizados sobre como gerir bem as finanças. Mais do que apenas poupar, educação financeira é sobre saber como utilizar o dinheiro ou salário recebido, planejando, calculando e tomando decisões certeiras, que não vão impactar negativamente o bolso."
    },
    //pergunta 2
    {
        
        pergunta: "Ter educação financeira é um passo fundamental para a estabilidade financeira, mas ela exige:",
        respostas: [
            { texto: "Ter muita sorte e contatos influentes", correta: false },
            { texto: "Comprometimento e muita organização", correta: true },
            { texto: "Participar de eventos sociais e investimentos de alto risco", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    //pergunta 3
    {
        pergunta: "Ao você encontrar satisfação e equilíbrio emocial nas suas metas financeira, o que acontece? ",
        respostas: [
            { texto: "Diminui sua autoestima e aumenta o estresse financeiro.", correta: false },
            { texto: "Provoca insegurança e incertezas sobre o futuro financeiro.", correta: false },
            { texto: "aumenta sua autoestima e garante uma boa saúde emocional", correta: true }
        ],
        explicacao: "Ao você encontrar satisfação e equilíbrio emocial nas suas metas financeira aumenta sua autoestima e garante uma boa saúde emocional.Embora o clichê seja que dinheiro não traz felicidade, o trabalho de se dedicar às finanças gera resultados positivos. Isso te deixa satisfeito consigo mesmo por ter atingido uma meta, aumenta sua autoestima e, consequentemente, garante uma boa saúde emocional. E ainda é um incentivo para continuar poupando e investindo no que realmente vale a pena.."
    },
    //pergunta 4
    {
        pergunta: "Ter uma boa educação financeira afeta de que forma sua qualidade de vida?",
        respostas: [
            { texto: "De forma positiva, me ajudando a ter uma vida melhor", correta: true },
            { texto: "De forma negativa, faz eu ter mais ganância e estresse", correta: false },
            { texto: "Se mantém igual, não melhora nem ajuda minha qualidade de vida ", correta: false }
        ],
        explicacao: "A educação financeira exige comprometimento e muita organização. Trata-se de um processo contínuo de aprendizado sobre como gerir bem as finanças, planejando e tomando decisões conscientes."
    },
    //pergunta 5
    {
        pergunta: "O que é uma meta financeira de médio prazo?",
        respostas: [
            { texto: "6 meses a 1 ano (Exemplo: fazer uma viagem internacional)", correta: false },
            { texto: "2 a 5 anos (Exemplo: comprar um carro à vista)", correta: true },
            { texto: "Mais de 10 anos (Exemplo: comprar uma casa própria) ", correta: false }
        ],
        explicacao: "Uma meta financeira de médio prazo é de 2 a 5 anos (Exemplo: comprar um carro à vista). A partir da criação de metas, você aprende a controlar melhor as despesas. Afinal, com um objetivo fica mais fácil deixar o impulso de compras de lado. O planejamento financeiro é muito importante para isso. Estipule um valor máximo para cada despesa e evite extrapolar, isso vale desde uma lista de mercado."
    },
    //pergunta 6
    {
        pergunta: "A reserva de emergência se refere a uma quantia para ser usada em situações de imprevisto, como: ",
        respostas: [
            { texto: "Comprar um novo smartphone", correta: false },
            { texto: "Fazer uma viagem de férias", correta: false },
            { texto: "Uma cirurgia de última hora", correta: true }
        ],
        explicacao: "A reserva de emergência se refere a uma quantia para ser usada em situações de imprevisto como uma cirurgia de última hora. É uma quantia de dinheiro que uma pessoa mantém disponível e acessível de forma imediata para ser utilizada em situações de imprevistos ou emergências financeiras. A principal função dessa reserva é proporcionar segurança financeira para enfrentar gastos inesperados sem recorrer a empréstimos, comprometer investimentos de longo prazo ou recorrer ao crédito de alto custo, como cartões de crédito."
    },
    //pergunta 7
    {
        pergunta: "Ter uma boa educação financeira afeta que que forma sua qualidade de vida?",
        respostas: [
            { texto: "De forma positiva, me ajudando a ter uma vida melhor", correta: true },
            { texto: "De forma negativa, faz eu ter mais ganância e estresse", correta: false },
            { texto: "Se mantém igual, não melhora nem ajuda minha qualidade de vida ", correta: false }
        ],
        explicacao: "Gastos invisíveis são aqueles que você consegue refletir antes de fazer como pedir delivery por preguiça de cozinhar. Outro exemplo é a corrida particular por aplicativo que 'vai ficar quase o mesmo preço do ônibus', esses gastos acabam consumindo seu orçamento mais do que você imagina. Um levantamento do GuiaBolso indica que aplicativos de carona costumam reter até 10% do orçamento mensal."
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
        }, 1000);
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

async function nextLevel(event) {
    event.preventDefault();
    
    //pegar os dados do localstorage
    let Id_user = localStorage.getItem('usuarioId');
    let Nivel_user = localStorage.getItem('usuarioNivel');
    let Pontos_user = localStorage.getItem('usuarioPontos');

    let data = {Id_user, Nivel_user, Pontos_user}
    console.log(data)

    //csontruir rota para atualizar nivel do usuario no banco
    const response = await fetch('http://localhost:3000/api/user/updateID', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });

    //converter de volta para json

    window.location.href = "../home3.html"

}