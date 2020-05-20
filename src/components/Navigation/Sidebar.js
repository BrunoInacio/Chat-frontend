import React from 'react';
import { useLocation, Link } from "react-router-dom";

import useStyles from './Sidebar.style';
import menuItens from './Sidebar.itens';

import {
  Drawer, SwipeableDrawer, Box, Typography, IconButton, 
  List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';

import {
  ChevronLeft as ChevronLeftIcon,
} from '@material-ui/icons';

export default function Sidebar(props) {
  const classes = useStyles({ drawerSize: props.drawerSize });
  const pathname = useLocation().pathname;

  const drawerContent = (
    <Box className={classes.drawer}>
      <Box className={classes.toolbar}>
        <Typography variant="h4" color="secondary">
          Chatbot
        </Typography>
        <IconButton onClick={props.closeMenu} className={classes.menuButton}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {menuItens.map((item) => (
          <ListItem button key={item.title} component={Link} divider={item.divider}
            selected={item.to === pathname} classes={{ selected: classes.selected }}
            onClick={props.mobile ? props.closeMenu : null} to={item.to}>
            <ListItemIcon className={(item.to === pathname ? classes.selected : null)}>
              {(item.to === pathname ? item.iconSelected : item.icon)}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>

      <Box className={classes.footer} display={(props.open || props.mobile ? 'block':'none')}>
        <Divider />
        <Typography variant="caption" align="center">
          Projeto de formatura
        </Typography>
        <br />
        <Typography variant="overline">
          PCS - USP
        </Typography>
      </Box>
    </Box>
  );

  return props.mobile ? (
      <SwipeableDrawer classes={{ paper: classes.drawerOpen }}
        open={props.open} onClose={props.closeMenu} onOpen={props.openMenu}>
        {drawerContent}
      </SwipeableDrawer>
    ) : (
      <Drawer variant="permanent"
        className={props.open ? classes.drawerOpen : classes.drawerClose}
        classes={{ paper: props.open ? classes.drawerOpen : classes.drawerClose }}>
        {drawerContent}
      </Drawer>
    )
}
