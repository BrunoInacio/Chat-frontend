import React from 'react';
import { Link } from "react-router-dom";

import useStyles from './Sidebar.style';

import {
  Drawer, List, Typography, Divider, IconButton, 
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';

import {
  Home as HomeIcon,
  Help as HelpIcon,
  Mail as MailIcon,
  Info as InfoIcon,
  People as PeoplIcon,
  ChevronLeft as ChevronLeftIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from '@material-ui/icons';

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" className={classes.drawer}
        classes={{
          paper: props.open ? classes.drawerOpen : classes.drawerClose
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h4" color="secondary">
            Chatbot
          </Typography>

          <IconButton onClick={props.closeMenu} className={classes.menuButton}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button key="inicio" component={Link} to="/home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button key="chatbot" component={Link} to="/chatbot">
            <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
            <ListItemText primary="Chatbot" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key="contato" component={Link} to="/contact">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Entrar em contato" />
          </ListItem>
          <ListItem button key="duvidas" component={Link} to="/questions">
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Dúvidas comuns" />
          </ListItem>
          <ListItem button key="team" component={Link} to="/team">
            <ListItemIcon><PeoplIcon /></ListItemIcon>
            <ListItemText primary="Equipe" />
          </ListItem>
          <ListItem button key="info" component={Link} to="/info">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Informações" />
          </ListItem>
        </List>
        
        <div className={props.open ? classes.footer : classes.hide}>
          <Divider />

          <Typography variant="caption">
            Projeto de formatura
          </Typography>
          <br />
          <Typography variant="overline">
            PCS - USP
          </Typography>
        </div>
      </Drawer>

    </div>
  );
}
