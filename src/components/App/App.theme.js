import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';

import { 
  indigo, blue, pink, blueGrey,
 } from '@material-ui/core/colors/';

export default function getTheme(paletteType) {
  return createMuiTheme({
    palette: {
      type: paletteType,
      primary: paletteType == 'light' ? indigo : {
        main: blue['A400'],
        dark: indigo['A500'],
        light: blueGrey[600],
      },
      secondary: pink,
      background: {
        default: paletteType == 'light' ? "#fafafa" : "#121212",
        paper: paletteType == 'light' ? "#ffffff" : "#1e1e1e",
        header: paletteType == 'light' ? indigo[500] : "#1e1e1e",
      },
    },
    status: {
      danger: 'orange',
    },
  });
}
