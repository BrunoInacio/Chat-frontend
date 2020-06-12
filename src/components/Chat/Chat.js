import React  from 'react';

import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import { Box, Paper } from '@material-ui/core';

import ConnectWebSocket from './ConnectWebSocket';
import MessageInput from "./Chat.MessageInput"
import MessageList from "./Chat.MessageList"

function Chat({ addMessage }) {
  const classes = useStyles();
  const connection = ConnectWebSocket(addMessage);

  const sendMessage = (newMessageContent) => {
    const msg = {
      content: newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    };

    addMessage(msg);
    connection.current.send(JSON.stringify(msg));
  }

  return (
    <Paper elevation={2} className={classes.root}>
      <Box className={classes.messageListContainer}>
        <MessageList />
      </Box>

      <MessageInput sendMessage={sendMessage} />
    </Paper>
  );
}

export default connect(null, { addMessage })(Chat);
