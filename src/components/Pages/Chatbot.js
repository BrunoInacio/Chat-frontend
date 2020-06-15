import React  from 'react';

import withPages from './withPages';
import useStyles from './Chatbot.style';

import { Paper } from '@material-ui/core';

import useChat from '../Chat/useChat';
import ConnectedAlert from '../Chat/ConnectedAlert';

import MessageInput from "./Chatbot.MessageInput"
import MessageList from "./Chatbot.MessageList"

function ChatBot({ setTitle }) {
  const classes = useStyles();
  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  const [sendMessage, isConnected] = useChat();

  return (
    <Paper elevation={2} className={classes.root}>
      <ConnectedAlert isConnected={isConnected} />

      <MessageList />
      <MessageInput sendMessage={sendMessage} />
    </Paper>
  );
}

export default withPages(ChatBot);
