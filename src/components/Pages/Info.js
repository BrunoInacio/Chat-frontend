import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './Pages';

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
        e foi desenvolvido pelos alunos
        Bruno Brandão Inácio e Pedro de Moraes Ligabue.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Neste projeto de formatura são estudados métodos de apoio à interação,
        em forma de conversa de texto entre usuários e chatbots em um sistema 
        de atendimento ao cliente. A fim de atingir seu objetivo, é realizado 
        primeiramente o desenvolvimento de uma interface gráfica para plataforma 
        web, capaz de receber requisições de usuários e se comunicar com um
        servidor, possibilitando uma interação simples e intuitiva por meio de 
        conversas de texto entre os usuários e os chatbots.
        Em seguida, é feita a análise de diferentes algoritmos de Processamento 
        de Linguagem Natural (PLN) que possam ser aplicados aos chatbots de 
        forma que eles sejam capazes de identificar e responder questões
        dos usuários de forma coerente, sendo suficientemente parecido com uma
        interação humana para fornecer uma melhor experiência aos clientes.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Através do menu na lateral esquerda é possível navegar pelo site.
        Você encontrará opções referentes à página 'Chatbot', onde poderá
        observar e realizar testes com o chatbot desenvolvido. Além disso,
        outras páginas apresentam todas as informações relevantes sobre o
        projeto, como a as tecnologias utilizadas e dúvidas comuns. Por fim,
        na página referente à equipe, é possível encontrar mais informações
        e o contato dos autores do projeto.
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        O projeto foi dividido em duas partes: o front-end e o back-end e os
        códigos desenvolvidos estão disponíveis de forma aberta em repositórios
        do GitHub:
      </Typography>

      <Button color="primary" href="https://github.com/BrunoInacio/chat-front-end">
          Front-end
      </Button>
      <Button color="primary" href="/" disabled>
          Back-end
      </Button>

    </Paper>
  );
}

export default withPages(Info);
