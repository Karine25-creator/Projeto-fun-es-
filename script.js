const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está num safári e vê um animal raro passando. O que você faz?",
        alternativas: [
            {
                texto: "Pego a câmera e tento registrar o momento sem assustá-lo.",
                afirmacao: "Você é observador e respeita o espaço dos outros."
            },
            {
                texto: "Me aproximo devagar para tentar interagir.",
                afirmacao: "Você é curioso e não tem medo de explorar."
            }
        ]
    },
    {
        enunciado: "Na floresta, você encontra um filhote perdido. Qual sua reação?",
        alternativas: [
            {
                texto: "Procuro a mãe dele por perto e mantenho distância para não atrapalhar.",
                afirmacao: "Você entende a importância do equilíbrio da natureza."
            },
            {
                texto: "Tento ajudar e levo o filhote para um local seguro.",
                afirmacao: "Você é protetor e gosta de cuidar."
            }
        ]
    },
    {
        enunciado: "Se fosse escolher um habitat para viver, qual seria?",
        alternativas: [
            {
                texto: "Uma praia ensolarada, cheia de vida marinha.",
                afirmacao: "Você é tranquilo e gosta de relaxar no seu ambiente."
            },
            {
                texto: "Uma floresta cheia de aventuras e segredos.",
                afirmacao: "Você é aventureiro e adora explorar o desconhecido."
            }
        ]
    },
    {
        enunciado: "Qual tipo de animal mais combina com você?",
        alternativas: [
            {
                texto: "Um ágil e esperto, que está sempre atento.",
                afirmacao: "Você é rápido nas decisões e adaptável."
            },
            {
                texto: "Um calmo e paciente, que observa antes de agir.",
                afirmacao: "Você é estrategista e sabe esperar o momento certo."
            }
        ]
    },
    {
        enunciado: "Se tivesse um superpoder animal, qual escolheria?",
        alternativas: [
            {
                texto: "Voar como uma águia.",
                afirmacao: "Você ama liberdade e ver o mundo de cima."
            },
            {
                texto: "Nadar como um golfinho.",
                afirmacao: "Você gosta de leveza, diversão e conexão com os outros."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu lado animal é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
