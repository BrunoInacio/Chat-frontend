import { createMuiTheme } from '@material-ui/core/styles';

import { indigo, blue } from '@material-ui/core/colors/';

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
  },
  status: {
    danger: 'orange',
  },

  navigation: {
    drawer: {
      width: 240,
    },
    drawerClosed: {
      width: 60,
    }
  },
});
