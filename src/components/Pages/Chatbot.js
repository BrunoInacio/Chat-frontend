import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './Pages';

import Chat from '../Chat';

import {
  Paper, Box
} from '@material-ui/core';


function ChatBot(props) {
  const pageClasses = usePageStyles();
  React.useEffect(() => props.setTitle("Conversa"));

  return (
    <Paper elevation={2} className={pageClasses.fullBox}>
      <Chat />
    </Paper>
  );
}

export default withPages(ChatBot);
