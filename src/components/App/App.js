import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Theme from './App.theme'
import Routes from './App.routes'

import Navigation from '../Navigation';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />

      <ThemeProvider theme={Theme}>
        <Navigation />
        <Routes />
      </ThemeProvider>
    </div>
  );
}
