import React from 'react';

import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, List, Typography, CssBaseline} from '@material-ui/core';
import { Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    alignSelf: "flex-center",
    bottom: 0,
  },
  menuButton: {
    marginRight: 36,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },


  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const theme = useTheme();
  
  const handleToggleMenu = () => props.closeMenu();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h4">
            Chatbot
          </Typography>

          <IconButton onClick={handleToggleMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>



        <Divider />

        <List>
          <ListItem button key="inicio">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button key="chatbot">
            <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
            <ListItemText primary="Chatbot" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key="duvidas">
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Dúvidas comuns" />
          </ListItem>
          <ListItem button key="contato">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Entrar em contato" />
          </ListItem>
          <ListItem button key="info">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Informações" />
          </ListItem>
        </List>
      
        <div className={classes.grow} />
        
        <div className={clsx({
          [classes.footer]: props.open,
          [classes.hide]: !props.open,
        })}>
          <Divider />

          <Typography variant="caption">
            Projeto de formatura
          </Typography>

          <Typography paragraph variant="overline">
            PCS - USP
          </Typography>
        </div>

      </Drawer>

    </div>
  );
}
