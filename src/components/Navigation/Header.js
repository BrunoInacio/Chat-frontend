import React from 'react';

import useStyles from './Header.style';

import {
  Box, IconButton, Typography,
  Fade, Slide, useScrollTrigger,
  AppBar, Toolbar
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  WbIncandescent as WbIncandescentIcon,
} from '@material-ui/icons';

export default function Header(props) {
  const classes = useStyles({ drawerSize: props.drawerSize });

  const trigger = useScrollTrigger();

  return (
    <React.Fragment>
      <Slide appear={false} direction="down" in={(!props.mobile || !trigger)}>
        <AppBar
          position="fixed"
          className={props.open ? classes.appBarShift : classes.appBar}
        >
          <Toolbar>
            <Fade in={!props.open} style={{ transitionDelay: '150ms' }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props.openMenu}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Fade>

            <Typography 
              noWrap
              variant="h6"
              className={props.open ? classes.titleDisplaced : classes.titleOrigin}
            >
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
      </Slide>

      <Toolbar />
    </React.Fragment>
  );
}
