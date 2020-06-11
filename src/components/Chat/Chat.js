import React  from 'react';

import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import { Divider, Box, Button, TextField } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import MessageList from "./Chat.MessageList"
import ConnectWebSocket from './ConnectWebSocket';
import useInputMessage from './useInputMessage';

function Chat({ addMessage }) {
  const classes = useStyles();
  const connection = ConnectWebSocket(addMessage);
  
  const [message, handleInput, handleSubmit] = useInputMessage((msg) => {
    addMessage(msg);
    connection.current.send(JSON.stringify(msg));
  });

  return (
    <Box className={classes.root}> 
      <Box className={classes.messageListContainer}>
        <MessageList />
      </Box>

      <Box elevation={2} className={classes.inputContainer}>
        <Divider />
        <form className={classes.flexDisplay} onSubmit={handleSubmit}>
          <TextField autoFocus fullWidth
            label="Mensagem"
            placeholder="Digite sua mensagem aqui."
            color="primary"
            margin="dense"
            value={message}
            onChange={handleInput}
            id="new-message"
          />
          <Button
            type="submit"
            variant="text"
            color="primary"
            className={classes.sendButton}
            aria-label="Enviar mensagem"
          >
            <SendIcon />
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default connect(null, { addMessage })(Chat);
