import { createMuiTheme } from '@material-ui/core/styles';

import { 
  indigo, deepPurple, lightBlue,
 } from '@material-ui/core/colors/';

export default function getTheme(paletteType) {
  return createMuiTheme({
    palette: {
      type: paletteType,
      primary: indigo,
      secondary: paletteType == 'light' ? deepPurple : lightBlue,
    },
    status: {
      danger: 'orange',
    },
  });
}
