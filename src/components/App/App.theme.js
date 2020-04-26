import { createMuiTheme } from '@material-ui/core/styles';

import { indigo, blue } from '@material-ui/core/colors/';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
  },
  status: {
    danger: 'orange',
  },

  navigation: {
    drawer: {
      width: 240,
    },
  },
});
