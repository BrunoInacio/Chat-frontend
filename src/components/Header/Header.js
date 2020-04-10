import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block', 
  },
  section: {
    display: 'flex',
  },
}));

export default function Header() {
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
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
