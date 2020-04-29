import React from 'react';
import { useLocation, Link } from "react-router-dom";

import useStyles from './Sidebar.style';

import {
  Drawer, List, Typography, Divider, IconButton, 
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';

import {
  Home as HomeIcon, HomeOutlined as HomeIconOutlined,
  Mail as MailIcon, MailOutlined as MailIconOutlined,
  Info as InfoIcon, InfoOutlined as InfoIconOutlined,
  Help as HelpIcon, HelpOutlineOutlined as HelpIconOutlined,
  People as PeoplIcon, PeopleOutlined as PeoplIconOutlined,
  ChevronLeft as ChevronLeftIcon, ChevronLeftOutlined as ChevronLeftIconOutlined,
  QuestionAnswer as QuestionAnswerIcon, QuestionAnswerOutlined as QuestionAnswerIconOutlined,
} from '@material-ui/icons';

export default function Sidebar(props) {
  const classes = useStyles();
  const pathname = useLocation().pathname;

  const menu = [
    {
      title: 'Início',
      to: '/home',
      iconSelected: <HomeIcon />,
      icon: <HomeIconOutlined />,
    },
    {
      title: 'Chatbot',
      to: '/chatbot',
      iconSelected: <QuestionAnswerIcon />,
      icon: <QuestionAnswerIconOutlined />,
      divider: true,
    },
    {
      title: 'Entrar em contato',
      to: '/contact',
      iconSelected: <MailIcon />,
      icon: <MailIconOutlined />,
    },
    {
      title: 'Dúvidas comuns',
      to: '/questions',
      iconSelected: <HelpIcon />,
      icon: <HelpIconOutlined />,
    },
    {
      title: 'Equipe',
      to: '/team',
      iconSelected: <PeoplIcon />,
      icon: <PeoplIconOutlined />,
    },
    {
      title: 'Informações',
      to: '/info',
      iconSelected: <InfoIcon />,
      icon: <InfoIconOutlined />,
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
              selected={item.to === pathname} classes={{selected: classes.selected}}>
              <ListItemIcon className={(item.to === pathname ? classes.selected : '')}>
                {(item.to === pathname ? item.iconSelected:item.icon)}
              </ListItemIcon>
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
