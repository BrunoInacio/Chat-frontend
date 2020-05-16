import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    position: 'relative',
    maxWidth: theme.breakpoints.values['lg'],
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(2, 1, 2, 1),
  }
}));
