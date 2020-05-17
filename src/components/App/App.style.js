import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  content: {
    position: 'relative',
    height: "100%",
    maxWidth: theme.breakpoints.values['lg'],
    padding: theme.spacing(2, 1, 2, 1),
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));
