import React from 'react';
import useStyles from './Chat.style';

import {
  Button, TextField,
} from "@material-ui/core"

import {
  Send as SendIcon,
} from '@material-ui/icons';

export default function MessageInput(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={props.handleSubmit}>
      <TextField autoFocus fullWidth multiline rows={1} rowsMax={4}
        label="Mensagem" placeholder="Digite sua mensagem aqui."
        className={classes.form} color="primary"
        disabled={!props.enabled} value={props.value} onChange={props.handleChange} />

      <Button type="submit" variant="outlined" className={classes.sendButton}>
        <SendIcon />
      </Button>
    </form>
  );
}
