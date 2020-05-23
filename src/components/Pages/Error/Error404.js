import React from 'react';

import useErrorStyles from './Error.style';
import withPages from '../Pages';

import {
  Paper, Typography
} from '@material-ui/core';


function Error404() {
  const errorClasses = useErrorStyles();
  
  return (
    <div className={errorClasses.root}>
      <Paper elevation={4} className={errorClasses.content}>

        <Typography variant="h2" className={errorClasses.title} gutterBottom>
          Página não encontrada
        </Typography>

        <Typography variant="subtitle1" className={errorClasses.desc}>
          Utilize o menu lateral para navegar apenas por páginas válidas.
        </Typography>

      </Paper>
    </div>
  );
}

export default withPages(Error404);
