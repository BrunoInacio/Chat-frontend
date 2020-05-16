import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
  content: {
    position: 'relative',
    maxWidth: theme.breakpoints.values['lg'],
    padding: theme.spacing(2, 1, 2, 1),
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));
