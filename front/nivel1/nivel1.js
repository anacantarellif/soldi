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
            { letra: 'A', texto: "quase sempre pago em dia e á vista mas parcelo quando são em alto valor"},
            { letra: 'B', texto: "quase sempre pago em dia e á vista mas parcelo quando são em alto valor" },
            { letra: 'C', texto: "preciso fazer o parcelamento e utilizo cartão de crédito ou crediário." }
        ]
    },
    {
        pergunta: "você possui alguma dívida em atraso?",
        respostas: [
            { letra: 'A', texto: "não possuo dívidas" },
            { letra: 'B', texto: "tenho algumas mas nenhuma se encontra em atraso" },
            { letra: 'C', texto: "possuo dívidas em atraso e mal sei quais são" }
        ]
    },
    {
        pergunta: "Realiza orçamento financeiro mensalmente?",
        respostas: [
            { letra: 'A', texto: "sempre faço orçamento e comparo no final do mês para analisar os gastos" },
            { letra: 'B', texto: "registro mas não comparo no final do mês" },
            { letra: 'C', texto: "não faço nenhum tipo de registro e orçamento" }
        ]
    },
    {
        pergunta: "Você consegue fazer algum tipo de investimento?",
        respostas: [
            { letra: 'A', texto: "utilizo pelo menos 10% da minha renda em investimentos" },
            { letra: 'B', texto: "quando sobra, invisto, principalmente na poupança" },
            { letra: 'C', texto: "nunca invisto nenhuma quantidade, de dinheiro" }
        ]
    },
    {
        pergunta: "Como planeja a aposentadoria?",
        respostas: [
            { letra: 'A', texto: "com planos alternativos para contribuir na previdência privada e social " },
            { letra: 'B', texto: "contribuo para a previdência social, não consigo realizar nenhum extra" },
            { letra: 'C', texto: "não contribuo nem para a privada nem para a social" }
        ]
    },
    {
        pergunta: "O que você entende sobre Independência Financeira?",
        respostas: [
            { letra: 'A', texto: "que posso trabalhar por prazer e não por necessidade" },
            { letra: 'B', texto: "que posso ter dinheiro para viver de forma confortável com minha família" },
            { letra: 'C', texto: "que posso curtir a vida intensamente sem se preocupar com os gastos" }
        ]
    },
    {
        pergunta: "Você sabe quais são suas metas e objetivos de curto, médio e longo prazo?",
        respostas: [
            { letra: 'A', texto: "sei quais são, quanto vão me custar e  por quanto tempo terei que poupar" },
            { letra: 'B', texto: "sei quais são, quanto vão custar mas não sei como alcança-los" },
            { letra: 'C', texto: "não tenho ou acabo sempre adiando por não conseguir poupar dinheiro" }
        ]
    },
    {
        pergunta: "Você realiza pesquisa de preços antes de comprar?",
        respostas: [
            { letra: 'A', texto: "sempre pesquiso antes de efetuar uma compra" },
            { letra: 'B', texto: "algumas vezes pesquiso mas não é sempre" },
            { letra: 'C', texto: "não realizo nenhum tipo de pesquisa antes de comprar" }
        ]
    },
    {
        pergunta: "Antes de fazer uma nova prestação, você soma as que já precisa pagar no fim do mês?",
        respostas: [
            { letra: 'A', texto: "não costumo realizar compras em prestação" },
            { letra: 'B', texto: "sempre somo os valores antes de finalizar uma nova prestação" },
            { letra: 'C', texto: "verifico se ainda tenho limite no meu cartão" }
        ]
    },
    {
        pergunta: "Se acontecesse um imprevisto que alterasse sua condição financeira, demissão, por exemplo, qual seria sua reação?",
        respostas: [
            { letra: 'A', texto: "registraria todos os meus gastos e ganhos, um diagnóstico financeiro" },
            { letra: 'B', texto: "cortaria despesas e gastos desnecessários" },
            { letra: 'C', texto: "não saberia por onde começar e só de pensar já ficaria com medo" }
        ]
    },
    {
        pergunta: "Por quanto tempo conseguiria manter seu padrão de vida se parasse de receber o que ganha?",
        respostas: [
            { letra: 'A', texto: "conseguiria seguir normal por, no mínimo, mais 5 anos" },
            { letra: 'B', texto: "manteria meu padrão de vida por, no máximo, 4 anos" },
            { letra: 'C', texto: "conseguia me manter por só alguns meses, ou nem isso" }
        ]
    },
    {
        pergunta: "O que você faz quando quer comprar um produto?",
        respostas: [
            { letra: 'A', texto: "planejo uma forma de investimento pra comprar" },
            { letra: 'B', texto: "parcelo se o valor estiver dentro do meu orçamento" },
            { letra: 'C', texto: "compro e depois vejo como vou conseguir comprar" }
        ]
    },
];


let indicePerguntaAtual = 0;
let contagemA = 0;
let contagemB = 0;
let contagemC = 0;

const containerPergunta = document.getElementById('container-pergunta');
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

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta(perguntas[indicePerguntaAtual]);
        atualizarBarraProgresso();
    } else {
        mostrarResultado();
    }
}

function atualizarBarraProgresso() {
    const progresso = ((indicePerguntaAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = progresso + '%';
}

function mostrarResultado() {
    let resultadoFinal = '';
    let explicacao = '';

    if (contagemA > contagemB && contagemA > contagemC) {
        resultadoFinal = 'Investidor';
        explicacao = 'Parabéns! Você sabe exatamente onde está sendo utilizado o seu dinheiro e as principais possibilidades de investimento e segurança para caso ocorra algum imprevisto, mantendo sua saúde financeira. Ser financeiramente consciente não é uma tarefa fácil, exige além de disciplina, muita força de vontade para mudar de vida.';
    } else if (contagemB > contagemA && contagemB > contagemC) {
        resultadoFinal = 'Equilibrado financeiramente';
        explicacao = 'Sua vida financeira está em um bom nível de estabilidade, mas a ausência ou o controle de dívidas não pode se tornar um hábito. Isso, pois mesmo com o controle das suas contas, você ainda não possui o costume de poupar dinheiro ou investi-los de forma a adquirir lucros futuros. Sua vida financeira está baseada no equilíbrio de gastos e isso pode acabar se desestabilizando caso ocorra alguma surpresa no futuro.Portanto, existe a necessidade, hoje, de que você realize um diagnóstico financeiro juntamente com a sua família. Para isso é necessário que vocês estabeleçam um período de cotação de gastos, onde tudo que for comprado deve ser registrado no tempo definido por vocês.A partir deste diagnóstico, você pode traçar metas a curto, médio e longo prazo, visando os seus sonhos de acordo com o tempo e o custo de cada objetivo.';
    } else if (contagemC > contagemA && contagemC > contagemB) {
        resultadoFinal = 'Endividado';
        explicacao = 'O seu padrão financeiro saiu um pouco dos eixos, mas não se preocupe, isso nem sempre significa um problema. Agora, você precisa traçar um diagnóstico para saber em qual momento a sua situação financeira deu um deslize. A partir daí, você deverá focar para aprender um pouco mais sobre educação financeira, entender suas alternativas, para que então seja possível definir um plano de ação. Tenha calma! O importante neste momento é não se desanimar e colocar a cabeça para cima. Novos caminhos estão por vir e o importante é que tenhamos maturidade e foco para passar pelos desafios mantendo os pés no chão';
    } else {
        resultadoFinal = 'Indefinido';
        explicacao = 'Seu perfil financeiro não pôde ser determinado claramente.';
    }

    containerPergunta.innerHTML = `
        <div class="resultado-final">
            <img src="../img/relatorio.png">
            <div>
                <strong>Seu perfil financeiro é... </strong>
                <h1>${resultadoFinal}</h1>
            </div>
            <p>${explicacao}</p>
        </div>
    `;
    botaoFinalizarQuiz.style.display = 'block';
}

// Mostrar a primeira pergunta
mostrarPergunta(perguntas[indicePerguntaAtual]);
// Inicializar barra de progresso
atualizarBarraProgresso();

async function nextLevel(event) {
    event.preventDefault();
    
    
    let id = localStorage.getItem('usuarioId');
    let dataDados = {id}

    const responseDados = await fetch(`http://localhost:3000/api/user/dados`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" }, 
        body: JSON.stringify(dataDados)
    });

    const resultsDados = await responseDados.json();
    console.log(resultsDados)
    
    //pegar os dados do localstorage
    let Id_user = localStorage.getItem('usuarioId');
    let Nivel_user = resultsDados.data.nivel;
    let Pontos_user = resultsDados.data.pontos;
    let Nivel_atual = 1;

    let data = {Id_user, Nivel_user, Pontos_user, Nivel_atual}
    console.log(data)
    localStorage.setItem('usuarioPontos', data.Pontos_user)

    //csontruir rota para atualizar nivel do usuario no banco
    const response = await fetch(`http://localhost:3000/api/user/${Id_user}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });

    //converter de volta para json

    console.log(Pontos_user);
    if (Nivel_atual>=Nivel_user){
        window.location.href = "../conquista/conquista.html"

    }else{
        if (Nivel_user == 1) {
            window.location.href = "../home.html"
        } else if (Nivel_user == 2 ) {
            window.location.href = "../home2.html"
        } else {
            window.location.href = "../home3.html"
        }
    }
}