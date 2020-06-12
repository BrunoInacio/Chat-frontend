import React  from 'react';

import withPages from './withPages';
import useStyles from './Chatbot.style';

import { Paper } from '@material-ui/core';

import ChatConnect from '../Chat/ChatConnect';
import MessageInput from "./Chatbot.MessageInput"
import MessageList from "./Chatbot.MessageList"

function ChatBot({ setTitle }) {
  const classes = useStyles();
  const chat = ChatConnect();

  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  return (
    <Paper elevation={2} className={classes.root}>
      <MessageList />
      <MessageInput chat={chat} />
    </Paper>
  );
}

export default withPages(ChatBot);
