const questions = [
  {
    'title': "Questões sobre o projeto",
    'questions': [
      {
        'question': "Como posso testar o Chatbot?",
        'answer': "Para testar o chatbot basta abrir a página de conversa e \
                   você deverá receber uma mensagem do chatbot indicando algumas \
                   das ações disponíveis. Fique à vontade para fazer uma pergunta \
                   ou enviar alguma solicitação.",
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
    ]
  },
  {
    'title': "Questões sobre o projeto",
    'questions': [
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
        'question': "Quais as vantagens do uso de um Chatbot?",
        'answer': "Uma implementação adequada de atendimento automatizado gera \
                   benefícios para ambas as partes envolvidas. Para a empresa, \
                   é possível atrair público mais jovem, reduzir custos com \
                   centrais de atendimento e realocar funcionários e investimentos \
                   em outras áreas a fim de melhorar a experiência dos usuários e \
                   de gerar maiores retornos. Enquanto para o cliente, é possível \
                   reduzir o tempo gasto com ferramentas de busca e simplificar o \
                   acesso a informações e recomendações.",
      },
      {
        'question': "O que é Processamento de Linguagem Natural (PLN)?",
        'answer': "O Processamento de Linguagem Natural (PLN) é uma área que da \
                   Inteligência Artificial que interage com a Ciência da Computação \
                   e com a área de linguística visando estudar problemas \
                   relacionados à produção e interpretação de conteúdo em \
                   linguagens humanas (naturais). \
                   \
                   Segundo Russell e Norvig, as linguagens naturais se diferenciam \
                   das linguagens formais por, por exemplo, não conterem um \
                   conjunto definido de cadeias, formadas a partir de uma gramática \
                   com regras definidas, incluírem ambiguidade e mudarem \
                   constantemente. Por estes motivos, a modelagem de linguagens \
                   naturais é mais consistente se feita com o uso de modelos \
                   estatísticos no lugar de regras de produção, como uma gramática \
                   formal.",
      },
    ]
  }
]

export default questions;