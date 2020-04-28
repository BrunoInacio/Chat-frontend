import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  // Menu Button
  menuButton: {
    position: 'fixed',
    left: theme.spacing(2),
  },
  titleDisplaced: {
    marginLeft: theme.spacing(0),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  titleOrigin: {
    marginLeft: theme.spacing(4),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
