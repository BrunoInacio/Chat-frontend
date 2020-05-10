import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import Theme from './App.theme'
import useStyles from './App.style';

import Routes from './App.routes'
import Navigation from '../Navigation';

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={Theme}>
        <Router>
          <CssBaseline />

          <Navigation />

          <Container className={classes.content} disableGutters>
            <div className={classes.appBarSpacer} />
            <Routes />
          </Container>

        </ Router>
      </MuiThemeProvider>
    </div>
  );
}
