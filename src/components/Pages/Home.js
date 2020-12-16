import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './withPages';

import {
  Paper, Typography, Button
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

      <Typography paragraph align="justify" variant="subtitle1">
        <b>Toda a interação com o chatbot é baseada em dados gerados 
        aleatóriamente, que são fornecidos no início de cada conversa.
        Desta forma, este projeto não coleta e não usa nenhum tipo de 
        informação pessoal.</b>
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1">
        Ao final da interação com o chatbot, solicitamos que você responda,
        se possível, um breve formulário sobre a sua experiência de uso.
        Se por algum motivo não for possível chegar ao fim de uma interação,
        nos avise diretamente através do formulário:
      </Typography>

      <Button color="primary" href="https://forms.gle/3X5ufm5YG5WLz4k86">
        Formulário
      </Button>
    </Paper>
  );
}

export default withPages(Home);
