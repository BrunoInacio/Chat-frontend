import { createMuiTheme } from '@material-ui/core/styles';

import { 
  indigo, blue, blueGrey, amber
 } from '@material-ui/core/colors/';

export default function getTheme(paletteType) {
  return createMuiTheme({
    palette: {
      type: paletteType,
      primary: paletteType === 'light' ? indigo : {
        main: blue['A200'],
        dark: indigo['A500'],
        light: blueGrey[700],
      },
      secondary: {
        main: amber['700'],
      },
      background: {
        default: paletteType === 'light' ? "#fafafa" : "#121212",
        paper: paletteType === 'light' ? "#ffffff" : "#1e1e1e",
        header: paletteType === 'light' ? indigo[500] : "#1f1f1f",
      },
    },
    status: {
      danger: 'orange',
    },
  });
}
