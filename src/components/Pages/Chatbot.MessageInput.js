import React  from 'react';

import useStyles from './Chatbot.style';

import { Button, TextField, Box, Divider } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

export default function ChatInput({ chat }) {
  const classes = useStyles();
  const [messageContent, setMessageContent] = React.useState("");
  
  const handleInput = (e) => {
    setMessageContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\s*$/.test(messageContent))
      return;

    chat.current.sendMessage(messageContent);
    setMessageContent("");
  };
  
  return (
    <Box className={classes.inputContainer}>
      <Divider />

      <form className={classes.flexDisplay} onSubmit={handleSubmit} autoComplete="off">
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
