import React from 'react';
import usePageStyles from './Pages.style';

import Chat from '../Chat';

import {
  Paper, Typography, Grid
} from '@material-ui/core';


export default function ChatBot(props) {
  const pageClasses = usePageStyles();

  React.useEffect(() => {
    props.setTitle("Conversa");
  })

  return (
    <Paper elevation={2} className={pageClasses.fullBox}>
      <Chat />
    </Paper>
  );
}
