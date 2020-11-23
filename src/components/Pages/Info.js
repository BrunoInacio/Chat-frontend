import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './withPages';

import {
  Paper, Typography, Button,
} from '@material-ui/core';


function Info({ setTitle }) {
  const pageClasses = usePageStyles();
  React.useEffect(() => { setTitle("Informações") }, [setTitle])

  return (
    <Paper elevation={2} className={pageClasses.content}>

      <Typography variant="h2" color="primary" gutterBottom>
        Chatbot
      </Typography>

      <Typography paragraph variant="h5">
        Olá,
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Este site é a demonstração do Projeto de Formatura entitulado 
        <Typography variant="overline">
          <b> Chatbots para Antecipação de Demanda de Clientes
          numa Distribuidora de Energia Elétrica </b>
        </Typography>
        do curso de Engenharia Elétrica com Ênfase em Computação da 
        Escola Politécnica da Universidade de São Paulo (POLI-USP)
        e foi desenvolvido pelos alunos Bruno Brandão Inácio 
        e Pedro de Moraes Ligabue, sob orientação da
        professora Dra. Anarosa Brandão.

        Neste projeto de formatura foram estudados e implementados métodos de 
        apoio à interação, em forma de conversa de texto, entre usuários e 
        chatbots em um sistema de atendimento a clientes no contexto de uma 
        distribuidora de energia elétrica.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        O projeto conta com uma interface gráfica
        para plataforma web capaz de receber requisições de usuários,
        de maneira simples e intuitiva e que foi desenvolvida com especial
        cuidado com relação a recursos de 
        acessibilidade e ao uso de um design e
        de fluxos de interação próximos a padrões já consolidados, buscando
        tornar o site acessível ao máximo de clientes possível.

        Já os chatbots foram construídos a partir de uma análise de diferentes
        algoritmos de 
        Processamento de Linguagem Natural (PLN) que pudessem ser combinados
        para formar chatbots de capazes de identificar e responder questões
        dos usuários de forma coerente, sendo suficientemente parecido com uma
        interação humana para fornecer uma melhor experiência aos clientes.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Através do menu na lateral esquerda é possível navegar pelo site.
        Você encontrará opções referentes à página 'Chatbot', onde poderá
        realizar testes em tempo real com o chatbot desenvolvido. Além disso,
        outras páginas apresentam todas as informações relevantes sobre o
        projeto, como a as tecnologias utilizadas e dúvidas comuns. Por fim,
        na página referente à equipe, é possível encontrar mais informações
        e o contato dos autores do projeto.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        O desenvolvimento do projeto foi dividido entre as etapas de
        <i> front-end</i> e <i>back-end</i> e os
        códigos desenvolvidos estão disponíveis de forma aberta através do GitHub:
      </Typography>

      <Button color="primary" href="https://github.com/BrunoInacio/chat-front-end">
          Front-end
      </Button>
      <Button color="primary" href="https://github.com/Pligabue/rasa_chatbot">
          Back-end
      </Button>

    </Paper>
  );
}

export default withPages(Info);
