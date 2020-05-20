import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box, Container } from '@material-ui/core';

import Theme from './App.theme'
import useStyles from './App.style';

import Routes from './App.routes'
import Navigation from '../Navigation';

import { useWidth } from '../../utils';

export default function App() {
  const classes = useStyles();
  
  const isMobile = useWidth() < Theme.breakpoints.values['sm'];
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    document.title = "Chatbot" + (title ? " - " + title : "");
    document.querySelector("meta[name=theme-color]")
      .setAttribute("content", Theme.palette.primary.main);
  });

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />

      <Box display="flex" height="100%" width="100%">
        <Navigation title={title} isMobile={isMobile} />

        <Box flexGrow={1} display="flex" flexDirection="column">
          <Box className={classes.appBarSpacer} />

          <Box overflow="auto" flexGrow={1}>
            <Container className={classes.content}>
              <Routes setTitle={setTitle} />
            </Container>
          </Box>
        </Box>

      </Box>
    </MuiThemeProvider>
  );
}
