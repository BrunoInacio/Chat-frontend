import React from 'react';
import useStyles from './Pages.style';

import {
  Paper, Typography
} from '@material-ui/core';


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.content}>

        <Typography variant="h2" color="secondary" className={classes.title} gutterBottom>
          Chatbot
        </Typography>
        
        <br />

        <div className={classes.desc}>
          <Typography paragraph variant="h5">
            Olá,
          </Typography>

          <Typography paragraph variant="subtitle1">
            Este site é a demonstração do Projeto de Formatura entitulado 
            <Typography variant="overline">
              <b> Chatbots para Antecipação de Demanda de Clientes numa Distribuidora de Energia Elétrica </b>
            </Typography>
            do curso de Engenharia Elétrica com Ênfase em Computação da Escola Politécnica da Universidade de São Paulo (POLI-USP)
            e foi desenvolvido pelos alunos Bruno Brandão Inácio e Pedro de Moraes Ligabue.
          </Typography>

          <Typography paragraph variant="subtitle1">
            Por favor, utilize o menu na lateral esquerda para navegar pelo site. Nele você encontrará a página 'Chatbot', onde
            será possível observar e realizar testes com o chatbot em funcionamento. Além disso, outras páginas apresentam todas as informações
            relevantes sobre o projeto, como a descrição completa, equipe, tecnologias e contato.
          </Typography>
        </div>
        
      </Paper>
    </div>
  );
}
