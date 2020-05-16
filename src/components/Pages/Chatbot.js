import React from 'react';
import usePageStyles from './Pages.style';

import Chat from '../Chat';

import {
  Paper, Typography, Grid
} from '@material-ui/core';


export default function ChatBot() {
  const pageClasses = usePageStyles();

  return (
    <div className={pageClasses.root}>
      <Paper elevation={2} className={pageClasses.fullBox}>
        <Chat />
      </Paper>
    </div>
  );
}
