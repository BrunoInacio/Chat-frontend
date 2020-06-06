import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';

import { 
  indigo, blue, blueGrey, amber
 } from '@material-ui/core/colors/';

 const lightTheme = {
  palette: {
    type: 'light',
    primary: indigo,
    secondary: {
      main: amber['700'],
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
      header: indigo[500],
    },
  },
  status: {
    danger: 'orange',
  },
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: blue['A200'],
      dark: indigo['A500'],
      light: blueGrey[700],
    },
    secondary: {
      main: amber['700'],
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
      header: "#1f1f1f",
    },
  },
  status: {
    danger: 'orange', 
  },
};

export default function useTheme() {
  const [theme, setTheme] = React.useState(createMuiTheme(lightTheme));
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    document.querySelector("meta[name=theme-color]")
      .setAttribute("content", theme.palette.background.header);
  }, [theme]);

  const switchPalette = () => {
    setTheme(createMuiTheme(theme.palette.type === 'light' ? darkTheme : lightTheme));
  };

  const isMobile = width < theme.breakpoints.values['sm'];

  return [theme, isMobile, switchPalette]
}
