const questions = [
  {
    'title': "Questões sobre o projeto",
    'questions': [
      {
        'question': "Como posso testar o Chatbot?",
        'answer': "Para testar o chatbot basta abrir a página de conversa e \
                   você deverá receber uma mensagem do chatbot indicando algumas \
                   das ações disponíveis. Fique à vontade para fazer uma pergunta \
                   ou enviar alguma solicitação, assim como você faria com \
                   atendentes humanos em um serviço de atendimento.",
        'actions': [
          {
          'text': "Ir para Chatbot",
          'to': '/chatbot'
          },
        ]
      },
      {
        'question': "Que tipo de perguntas o chatbot é capaz de responder?",
        'answer': "O chatbot visa responder questões da mesma forma que \
                   atendentes humanos fariam em uma empresa de distribuição \
                   de energia elétrica. Assim, é possível realizar ações como: \
                   conferir situação de uma conta passada e os débitos \
                   pendentes, informar a central sobre quedas de energia ou \
                   consultrar a situação de geradores em determinada área, \
                   alterar informações de cadastro, entre outras.",
        'actions': [
          {
          'text': "Ir para Chatbot",
          'to': '/chatbot'
          },
        ]
      },
      {
        'question': "Como posso entrar em contato com os autores do projeto?",
        'answer': "Na página referente à Equipe, é possível clicar em cima da foto \
                   de um dos autores para expandir informações mais detalhadas \
                   sobre o autor, incluindo informações de contato.",
        'actions': [
          {
          'text': "Ver Equipe",
          'to': '/team'
          },
        ]
      },
      {
        'question': "Quais tecnologias foram utilizadas no projeto?",
        'answer': "Na página referente às tecnologias é possível observar uma \
                   lista de tecnologias que foram utilizadas no desenvolvimento \
                   do projeto. Entre elas estão a linguagem JavaScript, que foi \
                   utilizada na construção do front-end em conjunto com o React e \
                   o Material UI. \
                   Já os chatbots foram construídos em Python com base na biblioteca \
                   Rasa NLU. Por fim, a \
                   comunicação entre os serviços foi feita através da biblioteca \
                   Socket.IO. ",
        'actions': [
          {
          'text': "Ver Tecnologias utilizadas",
          'to': '/tech'
          },
        ]
      },
      {
        'question': "O projeto possui código de fonte aberto?",
        'answer': "Sim! O projeto foi desenvolvido em duas etapas: o front-end \
                   e o back-end. O código de ambas estão disponíveis na \
                   plataforma Github de forma totalmente livre. Para \
                   ver como acessar o código, basta abrir a página de \
                   informações.",
        'actions': [
          {
          'text': "Ver página de informações",
          'to': '/info'
          },
        ]
      },
    ]
  },
  {
    'title': "Questões teóricas",
    'questions': [
      {
        'question': "Quais as vantagens do uso de um Chatbot?",
        'answer': "Uma implementação adequada de atendimento automatizado gera \
                   benefícios tanto para as empresas quanto para os usuários \
                   envolvidos. \
                   Do ponto de vista da empresa, os chatbots representam um \
                   modelo de atendimento altamente escalável, que possibilita \
                   geração de valor através da redução de gastos com centrais \
                   de atendimento. Esta economia pode ser realocada em recursos \
                   de outras áreas a fim de melhorar a experiência dos \
                   consumidores e de atrair e satisfazer um público mais \
                   jovem que está acostumado com interações mais humanas com \
                   a tecnologia. \
                   Do ponto de vista dos clientes, o sistema automatizado \
                   implica em uma redução do tempo gasto com ferramentas de \
                   busca e a simplificação do acesso a informações e \
                   recomendações.",
      },
      {
        'question': "O que é um Chatbot?",
        'answer': "Um chatbot é um software capaz de simular conversas humanas,\
                   possibilitando comunicação entre pessoas e computadores com \
                   base em linguagem natural, possibilitnado que o computador \
                   reproduza o comportamento um ser humano. \
                   Eles funcionam com base em técnicas de Inteligência Artificial,\
                   como Processamento de Linguagem Natural e Aprendizado de Máquina \
                   e podem ser classificados em: declarativos, que são baseados \
                   em regras e focam na execução de apenas uma tarefa, \
                   e conversacionais, que são mais sofisticados, utilizam mais \
                   técnicas de aprendizado de máquina e podem funcionar como \
                   assistentes virtuais que fornecme sugestões aos usuários e \
                   podem ser capazes de prever demandas.",
      },
      {
        'question': "O que é Processamento de Linguagem Natural (PLN)?",
        'answer': "O Processamento de Linguagem Natural é uma área de estudo \
                   da Inteligência Artificial \
                   que lida com a comunicação entre seres humanos e \
                   computadores através das linguagens naturais, ou seja, \
                   as línguas faladas pelos seres humanos. \
                   Segundo Russell e Norvig, as linguagens naturais se \
                   diferenciam das linguagens formais por, por exemplo, não \
                   conterem um conjunto definido de cadeias, formadas a \
                   partir de uma gramática com regras definidas, \
                   incluírem ambiguidade e mudarem constantemente. \
                   Por estes motivos, a modelagem de linguagens naturais é \
                   mais consistente se feita com o uso de modelos estatísticos \
                   no lugar de regras de produção, como uma gramática formal.",
      },
      {
        'question': "Quais técnicas de PLN foram usadas no Chatbot?",
        'answer': "O funcionamento do chatbot é muito complexo e envolve o \
                   uso de uma combinação de diferentes técnicas para atingir \
                   um resultado satisfatório. Três das principais técnicas \
                   presentes são: Classificação de Intenção, responsável por \
                   reconhecer a intenção de uma frase de acordo com uma lista \
                   de possibilidades previamente definida, feita com base \
                   em métricas de similaridade entre o texto digitado e textos \
                   utilizados durante treinamento; Extração de Entidade, que \
                   trata da identificação de termos específicos presentes em \
                   partes do texto, como por exemplo nome de uma pessoa, nome \
                   de um lugar ou documento de identificação; Seletor de \
                   Respostas, responsável por definir respostas adequadas de \
                   acordo com o fluxo da conversa.",
      },
    ]
  }
]

export default questions;