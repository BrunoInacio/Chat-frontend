import React from 'react';
import { Link } from 'react-router-dom';

import usePageStyles from '../Pages.style';
import withPages from '../withPages';

import {
  Paper, Typography, Button,
} from '@material-ui/core';


function Error404({ setTitle }) {
  const pageClasses = usePageStyles();
  React.useEffect(() => { setTitle("Página não encontrada") }, [setTitle])
  
  return (
    <Paper elevation={2} className={pageClasses.content}>

      <Typography variant="h2" color="error" gutterBottom>
        Página não encontrada
      </Typography>

      <Typography paragraph align="justify" variant="subtitle1" color="error">
        Utilize o menu lateral para navegar apenas por páginas válidas.
      </Typography>

      <Button color="primary" component={Link} to="/home">
        Voltar para o início
      </Button>

    </Paper>
  );
}

export default withPages(Error404);
