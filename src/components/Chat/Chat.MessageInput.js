import React  from 'react';

import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

import useStyles from './Chat.style';

import { Button, TextField } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import ConnectWebSocket from './ConnectWebSocket';
import useInputMessage from './useInputMessage';

function ChatInput({ addMessage }) {
  const classes = useStyles();
  const connection = ConnectWebSocket(addMessage);
  
  const [message, handleInput, handleSubmit] = useInputMessage((msg) => {
    addMessage(msg);
    connection.current.send(JSON.stringify(msg));
  });

  return (
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
  );
}

export default connect(null, { addMessage })(ChatInput);
