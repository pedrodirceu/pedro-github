const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    "enunciado": "A substituição total dos livros impressos por materiais 100% digitais nas escolas públicas traria melhorias reais para o aprendizado dos alunos?",
    "alternativas": [
      {
        "texto": "Sim, pois modernizaria o ensino, reduziria custos com impressões e facilitaria o acesso a conteúdos sempre atualizados através da internet.",
        "afirmacao": "A digitalização escolar democratiza o acesso a materiais didáticos atualizados em tempo real, eliminando barreiras geográficas e logísticas na distribuição de livros."
      },
      {
        "texto": "Não necessariamente, pois o uso exclusivo de telas pode aumentar a distração dos estudantes e prejudicar a fixação da leitura profunda.",
        "afirmacao": "Embora a tecnologia traga dinamismo, estudos apontam que a leitura em papel estimula uma maior concentração e retenção de conteúdo complexo na infância e adolescência."
      }
    ]
  },
  {
    "enunciado": "Diante do crescimento de formatos rápidos como audiobooks e resumos em vídeo, o hábito de ler livros longos perdeu o seu valor na sociedade moderna?",
    "alternativas": [
      {
        "texto": "Sim, porque esses novos formatos transmitem a mesma informação essencial em muito menos tempo, otimizando a rotina das pessoas.",
        "afirmacao": "Formatos alternativos como resumos e audiobooks atendem à necessidade de dinamismo do mundo moderno, permitindo o consumo de informação de forma prática."
      },
      {
        "texto": "Não, pois a leitura detalhada desenvolve o pensamento crítico, a paciência e a capacidade de interpretação que os resumos rápidos não conseguem oferecer.",
        "afirmacao": "O consumo de conteúdos resumidos oferece apenas uma camada superficial do conhecimento, sendo insubstituível o ganho cognitivo gerado pelo ato de ler uma obra na íntegra."
      }
    ]
  },
  {
    "enunciado": "Os projetos de criação de bibliotecas comunitárias em bairros periféricos são eficazes para transformar os índices de leitura do país?",
    "alternativas": [
      {
        "texto": "Com certeza, pois aproximam fisicamente os livros das populações que não possuem condições financeiras de comprá-los.",
        "afirmacao": "Iniciativas locais de incentivo à leitura criam espaços de convivência e inclusão cultural, servindo como portas de entrada eficientes para novos leitores."
      },
      {
        "texto": "Apenas parcialmente, pois além do acesso ao livro físico, é necessário haver políticas públicas de incentivo e mediação de leitura para criar leitores frequentes.",
        "afirmacao": "A existência de uma biblioteca isolada não garante a formação do hábito; o estímulo contínuo através de oficinas e contação de histórias é indispensável para o sucesso do projeto."
      }
    ]
  }
]

   
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
