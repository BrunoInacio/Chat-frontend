import React from 'react';
import useStyles from './Messages.style';

import {
  Button, TextField,
} from "@material-ui/core"

import {
  Send as SendIcon,
} from '@material-ui/icons';


export default function MessageInput(props) {
  const classes = useStyles();

  return (
    <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
      <div className={classes.root}>
        <TextField value={props.value} label="Mensagem" placeholder="Digite sua mensagem aqui." 
          disabled={!props.enabled} fullWidth className={classes.form} />
        <Button type="submit" variant="outlined" color="secondary"><SendIcon /></Button>
      </div>
    </form>
  );
}
