import React from 'react';

import usePageStyles from './Pages.style';
import withPages from './withPages';

import Chat from '../Chat';

import {
  Paper,
} from '@material-ui/core';


function ChatBot({ setTitle }) {
  const pageClasses = usePageStyles();
  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  return (
    <Paper elevation={2} className={pageClasses.fullBox}>
      <Chat />
    </Paper>
  );
}

export default withPages(ChatBot);
