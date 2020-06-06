import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import useTheme from './App.useTheme'
import Navigation from '../Navigation';
import Routes from './App.routes'

import { useTitle } from '../../utils';

export default function App() {
  const [title, setTitle] = useTitle("");
  const [theme, isMobile, switchTheme] = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Navigation title={title} switchTheme={switchTheme} isMobile={isMobile}>
        <Routes setTitle={setTitle} />
      </Navigation>
    </MuiThemeProvider>
  );
}
