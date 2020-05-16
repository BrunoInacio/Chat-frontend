import React from 'react';
import useStyles from './Chat.style';

import { formatTime } from '../../utils';

import {
  Typography, Box, Paper, Alert,
} from '@material-ui/core';

export default function Message(props) {
  const { origin, date } = props;

  if (origin === undefined) {
    throw new Error("Missing 'origin' parameter.")
  } else if (origin !== "bot" && origin !== "user" && origin !== "date") {
    throw new Error("Origin can only be 'user' or 'bot'.")
  }

  const classes = useStyles();
  const content = props.children
  const isMessage = origin !== "date";

  const message = (
    <Box className={classes.message + ' ' + classes[origin]}>
      <Typography variant="body1">
        {content}
      </Typography>

      <span className={classes.miniTime}>
        {formatTime.hour(new Date(date))}
      </span>
    </Box>
  )

  const alert = (
    <Box className={classes.message + ' ' + classes[origin]}>
      <Typography variant="subtitle2">
        {content}
      </Typography>
    </Box>
  )

  return (
    <div className={classes[origin + 'Container']}>
      {isMessage ? message : alert}
    </div>
  )
}