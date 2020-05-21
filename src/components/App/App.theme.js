import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';

import { 
  indigo, deepPurple, lightBlue, red, pink, purple, blue, cyan, teal, amber
 } from '@material-ui/core/colors/';

export default function getTheme(paletteType) {
  return createMuiTheme({
    palette: {
      type: paletteType,
      primary: paletteType == 'light' ? indigo : {
        main: blue['A400'],
      },
      secondary: pink,
      background: {
        default: paletteType == 'light' ? "#fafafa" : "#121212",
        paper: paletteType == 'light' ? "#ffffff" : "#1e1e1e",
      },
    },
    status: {
      danger: 'orange',
    },
  });
}
