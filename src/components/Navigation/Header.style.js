import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Menu Button
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  // Itens
  section: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  // Drawer
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.navigation.drawer.width,
    width: `calc(100% - ${theme.navigation.drawer.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));
