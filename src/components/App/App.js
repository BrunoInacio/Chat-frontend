import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import useTheme from './App.theme'
import Navigation from '../Navigation';
import Routes from './App.routes'

import { useWidth, useTitle } from '../../utils';

export default function App() {
  const [title, setTitle] = useTitle("");
  const [theme, switchTheme] = useTheme();
  const isMobile = useWidth() < theme.breakpoints.values['sm'];

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Navigation title={title} switchTheme={switchTheme} isMobile={isMobile}>
        <Routes setTitle={setTitle} />
      </Navigation>
    </MuiThemeProvider>
  );
}
