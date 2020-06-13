import React from 'react';

import useStyles from './Chatbot.style';

import { Box, Typography, Paper } from '@material-ui/core';

import { formatTime } from '../../utils';
import useMessageList from '../Chat/useMessageList'

export default function MessageList() {
  const classes = useStyles();
  const messageList = React.useRef(null)
  const sortedMessages = useMessageList();

  React.useEffect(() => {
    let node = messageList.current;
    node.scrollTo(0, node.scrollHeight);
    window.scrollTo(0, node.scrollHeight);
  }, [sortedMessages]);

  return (
    <Box ref={messageList} className={classes.messageListContainer}>
      <Box display="flex" flexDirection="column">

        {sortedMessages.map((message, index) => (
          <Paper key={index} className={classes.message + ' ' + classes[message.origin]}>
            <Typography
              variant={message.origin !== "date" ? "body1" : "subtitle2"}
              component="h2"
            >
              {message.content}
              {message.origin !== "date" ? (
                <span className={classes.miniTime}>
                  {formatTime.hour(new Date(message.date))}
                </span>
              ) : null}
            </Typography>
          </Paper>
        ))}
        
      </Box>
    </Box>
  );
}
