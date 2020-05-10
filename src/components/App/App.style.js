import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
  },
  content: {
    margin: theme.spacing(2),
    maxWidth: theme.breakpoints.values['xl'],
  }
}));
