import React  from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import MessageList from "./Chat.MessageList"
import MessageInput from "./Chat.Input"
import WebSocketAPI from './WebSocketAPI';

import { 
  Divider, Box, Button, TextField,
 } from '@material-ui/core';

 import { Send as SendIcon } from '@material-ui/icons';

function Chat({ addMessage }) {
  const classes = useStyles();

  const connection = new WebSocketAPI(msg => addMessage(msg));
  const [newMessageContent, setNewMessageContent] = React.useState("");

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
        <form className={classes.flexDisplay} onSubmit={handleMessageSubmit}>
          <TextField autoFocus fullWidth
            label="Mensagem"
            placeholder="Digite sua mensagem aqui."
            color="primary"
            margin="dense"
            value={newMessageContent}
            onChange={handleMessageInput}
          />
          <Button
            type="submit"
            variant="text"
            color="primary"
            className={classes.sendButton}
          >
            <SendIcon />
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default connect(null, { addMessage })(Chat);
