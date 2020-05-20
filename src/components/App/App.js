import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import Theme from './App.theme'
import useStyles from './App.style';
import Navigation from '../Navigation';
import Routes from './App.routes'

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

      <Navigation title={title} isMobile={isMobile}>
        <Container className={classes.content}>
          <Routes setTitle={setTitle} />
        </Container>
      </Navigation>
    </MuiThemeProvider>
  );
}
