import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
  },
  content: {
    margin: 'auto',
    padding: theme.spacing(2, 1, 2, 1),
    maxWidth: theme.breakpoints.values['lg'],
  }
}));
