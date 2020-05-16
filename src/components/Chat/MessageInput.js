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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />

      <Button type="submit" variant="outlined" color="secondary">
        <SendIcon />
      </Button>
    </form>
  );
}
