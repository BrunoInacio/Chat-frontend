import React  from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import MessageList from "./Chat.MessageList"
import MessageInput from "./Chat.Input"
import WebSocketAPI from './WebSocketAPI';

import {Divider, Box} from '@material-ui/core';

function Chat({ addMessage }) {
  const classes = useStyles();

  const addNewMessage = (content, origin, date) => { 
    addMessage({ content, origin, date }); 
  }

  const connection = new WebSocketAPI(msg => {
    let { content, origin, date } = msg
    addNewMessage(content, origin, date)
  });

  const [newMessageContent, setNewMessageContent] = React.useState("");

  const sendMessage = () => {
    addNewMessage(newMessageContent, "user", new Date().toISOString())
    connection.send(JSON.stringify({
      content: newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    }))
    setNewMessageContent("")
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (!/^[ ]*$/.test(newMessageContent)) {
      sendMessage()
    }
  }

  const handleMessageInput = (e) => { setNewMessageContent(e.target.value) }

  return (
    <Box className={classes.root}> 
      <Box className={classes.messageListContainer}>
        <MessageList />
      </Box>
      <Box elevation={2} className={classes.inputContainer}>
        <Divider />
        <MessageInput 
          value={newMessageContent}
          handleChange={handleMessageInput} 
          handleSubmit={handleMessageSubmit} 
          enabled={true} 
        />
      </Box>
    </Box>
  );
}

export default connect(null, {
  addMessage
})(Chat)
