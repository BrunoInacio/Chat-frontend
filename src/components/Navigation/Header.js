import React from 'react';

import useStyles from './Header.style';

import {
  Box, AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  WbIncandescent as WbIncandescentIcon,
} from '@material-ui/icons';

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed"
      className={(props.open ? classes.appBarShift : classes.appBar)}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={props.openMenu}
          className={(props.open ? classes.hideButton : classes.menuButton)}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap 
          className={(props.open ? classes.titleDisplaced : classes.titleOrigin)}>
          {props.title}
        </Typography>

        <Box flexGrow={1} />

        <Box display="flex">
          <IconButton edge="end" onClick={() => { }} color="inherit">
            <WbIncandescentIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => { }} color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
