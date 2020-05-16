import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container, Box } from '@material-ui/core';

import Theme from './App.theme'
import useStyles from './App.style';

import Routes from './App.routes'
import Navigation from '../Navigation';

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />

        <Navigation />

        <Box flexGrow={1} display="flex" flexDirection="column">
          <div className={classes.appBarSpacer} />
            
          <Box overflow="auto">
            <Container className={classes.content}>
              <Routes />
            </Container>
          </Box>
        </Box>

      </MuiThemeProvider>
    </div>
  );
}