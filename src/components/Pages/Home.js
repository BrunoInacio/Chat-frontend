import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './withPages';

import {
  Paper, Typography
} from '@material-ui/core';


function Home({ setTitle }) {
  const pageClasses = usePageStyles();
  React.useEffect(() => { setTitle("Início") }, [setTitle])

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
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Sinta-se à vontade para explorar o site através do menu presente na
        lateral esquerda.
        Nele você encontrará a página 'Chatbot',
        onde será possível conversar em tempo real com o chatbot e realizar
        testes de funcionamento.
        Além disso, outras páginas apresentam todas as informações relevantes 
        sobre o projeto, como informações de uso, tecnologias utilizadas, 
        equipe de trabalho e informações de contato.
      </Typography>
    </Paper>
  );
}

export default withPages(Home);
