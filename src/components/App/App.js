import React from 'react';

import Box from '@material-ui/core/Box'
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from './App.theme'
import useStyles from './App.style';

import Routes from './App.routes'
import Navigation from '../Navigation';

export default function App() {
  const classes = useStyles();
  
  return (
    <Box className={classes.root} display="flex" overflow="hidden">
      <MuiThemeProvider theme={Theme}>
          <Navigation />
          <Box className={classes.content} flexGrow={1} display="flex" flexDirection="column">
            <Box className={classes.appBarSpacer} />
            <Box flexGrow={1} p={2} overflow="auto"><Routes /></Box>
          </Box>
      </MuiThemeProvider>
    </Box>
  );
}
