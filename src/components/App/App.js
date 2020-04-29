import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Theme from './App.theme'

import Routes from './App.routes'
import Navigation from '../Navigation';

export default function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <Router>
          <CssBaseline />
          
          <Navigation />
          <Routes />
        </ Router>
      </MuiThemeProvider>
    </div>
  );
}
