import React from 'react';
import useStyles from './Chat.style';

import { Typography, Paper } from '@material-ui/core';

import { formatTime } from '../../utils';

export default function MessageDisplay({ origin, date, children }) {
  if (origin === undefined) {
    throw new Error("Missing 'origin' parameter.")
  } else if (origin !== "bot" && origin !== "user" && origin !== "date") {
    throw new Error("Origin can only be 'user' or 'bot'.")
  }

  const classes = useStyles();
  const isMessage = origin !== "date";

  return (
    <Paper className={classes.message + ' ' + classes[origin]}>
      <Typography variant={isMessage ? "body1" : "subtitle2"} component="h2">
        {children}
      </Typography>

      {isMessage ? (
        <span className={classes.miniTime}>
          {formatTime.hour(new Date(date))}
        </span>
      ) : null}
    </Paper>
  )
}
