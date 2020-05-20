import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Header
  toolbar: {
    width: theme.navigation.drawer.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  // Footer
  footer: {
    width: theme.navigation.drawer.width,
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  },
  // Itens
  selected: {
    color: theme.palette.secondary.main,
  },
  // Drawer
  drawer: {
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    overflowX: 'hidden',
    width: theme.navigation.drawer.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: 'hidden',
    width: theme.navigation.drawerClosed.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));
