import React  from 'react';

import withPages from './withPages';
import useStyles from './Chatbot.style';

import { Paper } from '@material-ui/core';

import ChatConnect from '../Chat/ChatConnect';
import ConnectedAlert from '../Chat/ConnectedAlert';

import MessageInput from "./Chatbot.MessageInput"
import MessageList from "./Chatbot.MessageList"

function ChatBot({ setTitle }) {
  const classes = useStyles();
  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  const chat = ChatConnect();

  return (
    <Paper elevation={2} className={classes.root}>
      <ConnectedAlert chat={chat} />
      <MessageList />
      <MessageInput chat={chat} />
    </Paper>
  );
}

export default withPages(ChatBot);
