import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box, Container } from '@material-ui/core';

import Theme from './App.theme'
import useStyles from './App.style';

import Routes from './App.routes'
import Navigation from '../Navigation';

export default function App() {
  const classes = useStyles();
  
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />

      <Box display="flex" height="100%" width="100%">
        <Navigation />

        <Box flexGrow={1} display="flex" flexDirection="column">
          <Box className={classes.appBarSpacer} />

          <Box overflow="auto" flexGrow={1}>
            <Container className={classes.content}>
              <Routes />
            </Container>
          </Box>
        </Box>
        
      </Box>
    </MuiThemeProvider>
  );
}
