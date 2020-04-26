import React from 'react';

import useStyles from './Header.style';

import {
  AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  WbIncandescent as WbIncandescentIcon,
} from '@material-ui/icons';

export default function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar + ' ' + (props.open ? classes.appBarShift : '')}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer"
            onClick={props.openMenu} className={classes.menuButton + ' ' + (props.open ? classes.hide : '')}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Chatbot
          </Typography>

          <div className={classes.grow} />
          
          <div className={classes.section}>
            <IconButton edge="end" aria-label="theme" onClick={() => { }} color="inherit">
              <WbIncandescentIcon />
            </IconButton>
            <IconButton edge="end" aria-label="account of current user" onClick={()=>{}} color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
