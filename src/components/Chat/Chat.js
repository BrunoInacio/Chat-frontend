import React  from 'react';

import useStyles from './Chat.style';

import { Divider, Box, Paper } from '@material-ui/core';

import MessageInput from "./Chat.MessageInput"
import MessageList from "./Chat.MessageList"

export default function Chat() {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <Box className={classes.messageListContainer}>
        <MessageList />
      </Box>

      <Box className={classes.inputContainer}>
        <Divider />
        <MessageInput />
      </Box>
    </Paper>
  );
}
