import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import getTheme from './App.theme'
import Navigation from '../Navigation';
import Routes from './App.routes'

import { useWidth, useTheme, useTitle } from '../../utils';

export default function App() {
  const [title, setTitle] = useTitle("");
  const [Theme, setTheme] = useTheme(getTheme('light'));
  const isMobile = useWidth() < Theme.breakpoints.values['sm'];
  
  const switchTheme = () => {
    setTheme(Theme.palette.type === 'light' ? getTheme('dark') : getTheme('light'));
  };

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />

      <Navigation title={title} switchTheme={switchTheme} isMobile={isMobile}>
        <Routes setTitle={setTitle} />
      </Navigation>
    </MuiThemeProvider>
  );
}
