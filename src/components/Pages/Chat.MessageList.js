import React from 'react';

import useStyles from './Chatbot.style';

import { Box } from '@material-ui/core';

import MessageDisplay from './Chat.MessageDisplay'
import useMessageList from '../Chat/useMessageList'

export default function MessageList({ websocket }) {
  const classes = useStyles();
  const messageList = React.useRef(null)
  const sortedMessages = useMessageList(websocket);

  React.useEffect(() => {
    let node = messageList.current;
    node.scrollTop = node.scrollHeight;
  }, [sortedMessages]);

  return (
    <Box ref={messageList} className={classes.messageListContainer}>
      <Box display="flex" flexDirection="column">
        {sortedMessages.map((message, index) => (
          <MessageDisplay key={index} origin={message.origin} date={message.date}>
            {message.content}
          </MessageDisplay>
        ))}
      </Box>
    </Box>
  );
}
