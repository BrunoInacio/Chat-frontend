const questions = [
  {
    'question': "Como posso testar o Chatbot?",
    'answer': "Para testar o chatbot basta enviar uma pergunta ou alguma mensagem\
               de início de conversa e o programa automaticamente responderá\
               adequadamente.",
    'actions': [
      {
      'text': "Ir para Chatbot",
      'to': '/chatbot'
      },
    ]
  },
  {
    'question': "O que é um Chatbot?",
    'answer': "Chatbot é um software de computador que simula conversas \
               humanas, em forma de texto ou de voz, possibilitando comunicação \
               entre pessoas e computadores com base em linguagem natural, \
               fazendo com que o computador se comporte como um ser humano.\
               \
               Eles funcionam com base em técnicas de Inteligência Artificial \
               como Processamento de Linguagem Natural e Aprendizado de Máquina \
               e podem ser classificados em: (i) declarativos, que são baseados \
               em regras e focam na execução de apenas uma tarefa; \
               e (ii) conversacionais, que são mais sofisticados, utilizam mais \
               técnicas de aprendizado de máquina e podem funcionar como \
               assistentes virtuais que fornecme sugestões aos usuários e \
               podem ser capazes de prever demandas",
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
]

export default questions;