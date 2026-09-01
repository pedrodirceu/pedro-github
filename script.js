const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os benefícios da leitura para os jovens?",
        alternativas: [
            {
                texto: "A leitura ajuda a aumentar o conhecimento, melhorar a escrita e desenvolver a criatividade.",
                afirmacao: "A leitura contribui para a formação dos jovens, ampliando seus conhecimentos, melhorando a escrita e estimulando a criatividade."
            },
            {
                texto: "A leitura serve apenas para melhorar as notas na escola.",
                afirmacao: "A leitura possui benefícios que vão além da escola, contribuindo também para o desenvolvimento pessoal e intelectual dos jovens."
            }
        ]
    },
    {
        enunciado: "Como as redes sociais podem influenciar o hábito de leitura dos jovens?",
        alternativas: [
            {
                texto: "Como as redes sociais podem influenciar o hábito de leitura dos jovens?",
                afirmacao: "As redes sociais podem influenciar positivamente ou negativamente a leitura, dependendo da forma e do tempo que os jovens utilizam essas plataformas."
            },
            {
                texto: "As redes sociais não possuem nenhuma influência sobre o hábito de leitura.",
                afirmacao: "As redes sociais fazem parte da rotina de muitos jovens e podem influenciar seus hábitos, inclusive o contato com livros e conteúdos literários."
            }
        ]
    },
    {
        enunciado: "Qual é uma boa maneira de incentivar os jovens a lerem mais?",
        alternativas: [
            {
                texto: "Oferecer livros de diferentes gêneros e permitir que os jovens escolham assuntos que despertem seu interesse.",
                afirmacao: "Permitir que os jovens tenham contato com diferentes tipos de livros e escolham assuntos de seu interesse pode tornar a leitura mais prazerosa e ajudar na criação do hábito."
            },
            {
                texto: "Obrigar os jovens a lerem apenas livros considerados importantes.",
                afirmacao: "A obrigação de ler apenas determinados livros pode diminuir o interesse, sendo mais adequado apresentar diferentes opções para despertar a curiosidade dos jovens."
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
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
