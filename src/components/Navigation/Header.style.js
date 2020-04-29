import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  // Menu Button
  menuButton: {
    position: 'fixed',
    left: theme.spacing(2),
  },
  hideButton: {
    display: 'none',
  },
  titleDisplaced: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  titleOrigin: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
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
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  appBarShift: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.navigation.drawer.width,
      width: `calc(100% - ${theme.navigation.drawer.width}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
}));
