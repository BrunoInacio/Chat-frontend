import React from 'react';
import { useLocation, Link } from "react-router-dom";

import useStyles from './Sidebar.style';
import menuItens from './Sidebar.itens';

import {
  Drawer, SwipeableDrawer, List, Typography, IconButton, 
  Divider, ListItem, ListItemIcon, ListItemText,
  useMediaQuery, useTheme,
} from '@material-ui/core';

import {
  ChevronLeft as ChevronLeftIcon,
} from '@material-ui/icons';

export default function Sidebar(props) {
  const theme = useTheme();
  const classes = useStyles();
  const pathname = useLocation().pathname;
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  const drawerContent = (
    <div className={classes.drawer}>
      <div className={classes.toolbar}>
        <Typography variant="h4" color="secondary" className={classes.title}>
          Chatbot
        </Typography>
        <IconButton onClick={props.closeMenu} className={classes.menuButton}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />
      <List>
        {menuItens.map((item, _) => (
          <ListItem button key={item.title} component={Link} to={item.to} divider={item.divider}
            selected={item.to === pathname} classes={{ selected: classes.selected }}>
            <ListItemIcon className={(item.to === pathname ? classes.selected : '')}>
              {(item.to === pathname ? item.iconSelected : item.icon)}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>

      <div className={(props.open ? classes.footer : classes.hide)}>
        <Divider />
        <Typography variant="caption" align="center">
          Projeto de formatura
          </Typography>
        <br />
        <Typography variant="overline">
          PCS - USP
      </Typography>
      </div>
    </div>
  );

  const mobileMenu = (
    <SwipeableDrawer classes={{ paper: classes.drawerOpen }}
      open={props.open} onClose={props.closeMenu} onOpen={props.openMenu}>
      {drawerContent}
    </SwipeableDrawer>
  );

  const desktopMenu = (
    <Drawer variant="permanent"
      classes={{ paper: props.open ? classes.drawerOpen : classes.drawerClose }}>
      {drawerContent}
    </Drawer>
  );

  return (
    <div className={classes.root}>
      {mobile ? mobileMenu : desktopMenu}
    </div>
  );
}
