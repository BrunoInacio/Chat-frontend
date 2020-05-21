import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Header
  toolbar: {
    width: props => props.drawerSize.width,
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
    position: 'absolute',
    bottom: 0,
    width: props => props.drawerSize.width,
    textAlign: 'center',
  },
  // Itens
  selected: {
    color: theme.palette.primary.main,
  },
  // Drawer
  drawer: {
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    overflowX: 'hidden',
    width: props => props.drawerSize.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: 'hidden',
    width: props => props.drawerSize.closedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));
