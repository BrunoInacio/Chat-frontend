import React  from 'react';

import useStyles from './Chatbot.style';

import { Button, TextField, Box, Divider } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import useMessageInput from '../Chat/useMessageInput'

export default function ChatInput({ websocket }) {
  const classes = useStyles();
  const [messageContent, handleInput, handleSubmit] = useMessageInput(websocket);
  
  return (
    <Box className={classes.inputContainer}>
      <Divider />

      <form className={classes.flexDisplay} onSubmit={handleSubmit}>
        <TextField autoFocus fullWidth
          label="Mensagem"
          placeholder="Digite sua mensagem aqui."
          color="primary"
          margin="dense"
          value={messageContent}
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
  );
}
