import React  from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions';

import withPages from './withPages';
import useStyles from './Chatbot.style';

import { Paper } from '@material-ui/core';

import ConnectWebSocket from '../Chat/ConnectWebSocket';
import MessageInput from "./Chat.MessageInput"
import MessageList from "./Chat.MessageList"

function ChatBot({ setTitle }) {
  const classes = useStyles();
  const websocket = ConnectWebSocket();

  const dispatch = useDispatch();

  React.useEffect(() => {
    websocket.current.onmessage = (e) => {
      dispatch(addMessage(JSON.parse(e.data)))
    }
  }, [websocket])

  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  return (
    <Paper elevation={2} className={classes.root}>
      <MessageList websocket={websocket} />
      <MessageInput websocket={websocket} />
    </Paper>
  );
}

export default withPages(ChatBot);
