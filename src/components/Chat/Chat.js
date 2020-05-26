import React  from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import MessageList from "./Chat.MessageList"
import MessageInput from "./Chat.Input"
import WebSocketAPI from './WebSocketAPI';

import { Divider, Box } from '@material-ui/core';

function Chat({ addMessage }) {
  const classes = useStyles();

  const [newMessageContent, setNewMessageContent] = React.useState("");
  const connection = new WebSocketAPI(msg => addMessage(msg));

  const sendMessage = () => {
    const msg = {
      content: newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    };

    addMessage(msg);
    connection.send(JSON.stringify(msg))
    setNewMessageContent("")
  };

  const handleMessageInput = (e) => setNewMessageContent(e.target.value);
  const handleMessageSubmit = (e) => {
    e.preventDefault()

    if (!/^\W*$/.test(newMessageContent))
      sendMessage()
  };


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
