import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import getTheme from './App.theme'
import Navigation from '../Navigation';
import Routes from './App.routes'

import { useWidth } from '../../utils';

export default function App() {
  const [title, setTitle] = React.useState("");
  const [Theme, setTheme] = React.useState(getTheme('light'));
  const isMobile = useWidth() < Theme.breakpoints.values['sm'];
  
  const switchTheme = () => {
    setTheme(Theme.palette.type === 'light' ? getTheme('dark') : getTheme('light'));
  };

  React.useEffect(() => {
    document.title = "Chatbot" + (title ? " - " + title : "");
    document.querySelector("meta[name=theme-color]")
            .setAttribute("content", Theme.palette.background.header);
  });

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />

      <Navigation title={title} switchTheme={switchTheme} isMobile={isMobile}>
        <Routes setTitle={setTitle} />
      </Navigation>
    </MuiThemeProvider>
  );
}
