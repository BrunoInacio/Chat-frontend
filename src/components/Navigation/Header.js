import React from 'react';
import clsx from 'clsx';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import useStyles from './Header.style';

export default function Header(props) {
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="primary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="open drawer"
            onClick={props.openMenu}
            className={clsx(classes.menuButton, {
              [classes.hide]: props.open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Chatbot
          </Typography>

          <div className={classes.grow} />
          
          <div className={classes.section}>
            <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="false" onClick={()=>{}} color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
