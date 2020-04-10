import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  section: {
    display: 'flex',
  },
  hide: {
    display: 'none'
  },


  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

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
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
