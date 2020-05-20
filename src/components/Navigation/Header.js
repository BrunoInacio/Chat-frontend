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
  const classes = useStyles({ drawerSize: props.drawerSize });
  
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary"
        className={(props.open ? classes.appBarShift : classes.appBar)}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={props.openMenu}
            className={(props.open ? classes.hideButton : classes.menuButton)}>
            <MenuIcon />
          </IconButton>

          <Typography noWrap variant="h6" 
            className={(props.open ? classes.titleDisplaced : classes.titleOrigin)}>
            {props.title}
          </Typography>

          <Box flexGrow={1} />

          <Box display="flex">
            <IconButton color="inherit" onClick={props.switchTheme}>
              <WbIncandescentIcon />
            </IconButton>
            <IconButton  color="inherit" onClick={() => { }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Toolbar />
    </React.Fragment>
  );
}
