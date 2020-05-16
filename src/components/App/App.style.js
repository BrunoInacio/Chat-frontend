import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    height: '100vh',
    width: '100vw'
  },
  content: {
    position: 'relative',
  }
}));
