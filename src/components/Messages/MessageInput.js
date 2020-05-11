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
    <form onChange={props.handleChange} onSubmit={props.handleSubmit} className={classes.root}>
      <TextField value={props.value} disabled={!props.enabled} 
        label="Mensagem" placeholder="Digite sua mensagem aqui." 
        className={classes.form} color="secondary" fullWidth />
        
      <Button type="submit" variant="outlined" color="secondary"><SendIcon /></Button>
    </form>
  );
}
