import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Header
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  // Footer
  hide: {
    display: 'none'
  },
  footer: {
    width: theme.navigation.drawer.width,
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  },
  // Drawer
  drawer: {
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: theme.navigation.drawer.width,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: theme.navigation.drawerClosed.width,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));
