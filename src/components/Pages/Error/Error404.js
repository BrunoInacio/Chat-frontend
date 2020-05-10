import React from 'react';
import useStyles from './Error.style';

import {
  Paper, Typography
} from '@material-ui/core';


export default function Error404() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>

      <Paper elevation={4} className={classes.desc}>

        <Typography variant="h2" color="error" align="left" gutterBottom>
          Página não encontrada
        </Typography>

        <Typography variant="subtitle1" color="error" align="left" >
          Utilize o menu lateral para navegar apenas por páginas válidas.
        </Typography>

      </Paper>
    </div>
  );
}
