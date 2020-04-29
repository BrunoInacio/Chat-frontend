import React from 'react';
import { useLocation, Link } from "react-router-dom";

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
  const pathname = useLocation().pathname;

  const menu = [
    {
      title: 'Início',
      to: '/home',
      icon: <HomeIcon />,
    },
    {
      title: 'Chatbot',
      to: '/chatbot',
      icon: <QuestionAnswerIcon />,
      divider: true,
    },
    {
      title: 'Entrar em contato',
      to: '/contact',
      icon: <MailIcon />,
    },
    {
      title: 'Dúvidas comuns',
      to: '/questions',
      icon: <HelpIcon />,
    },
    {
      title: 'Equipe',
      to: '/team',
      icon: <PeoplIcon />,
    },
    {
      title: 'Informações',
      to: '/info',
      icon: <InfoIcon />,
    }
  ]

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" className={classes.drawer}
        classes={{paper: props.open ? classes.drawerOpen : classes.drawerClose}}>

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
          {menu.map((item, _) => (
            <ListItem button key={item.title} component={Link} to={item.to} divider={item.divider}
              selected={item.to == pathname}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        
        <div className={classes.grow} />

        <div className={props.open ? classes.footer : classes.hide}>
          <Divider />

          <Typography variant="caption" align="center">
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
