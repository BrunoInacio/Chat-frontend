import React  from 'react';

import useStyles from './Chat.style';

import { Button, TextField, Box, Divider } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

export default function ChatInput({ sendMessage }) {
  const classes = useStyles();
  const [newMessageContent, setNewMessageContent] = React.useState("");

  const handleMessageInput = (e) => {
    setNewMessageContent(e.target.value);
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (!/^\s*$/.test(newMessageContent)) {
      sendMessage(newMessageContent);
      setNewMessageContent("");
    }
  };

  return (
    <Box className={classes.inputContainer}>
      <Divider />

      <form className={classes.flexDisplay} onSubmit={handleMessageSubmit}>
        <TextField autoFocus fullWidth
          label="Mensagem"
          placeholder="Digite sua mensagem aqui."
          color="primary"
          margin="dense"
          value={newMessageContent}
          onChange={handleMessageInput}
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
