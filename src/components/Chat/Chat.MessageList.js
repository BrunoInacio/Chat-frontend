import React from 'react';

import { Box } from '@material-ui/core';

import MessageDisplay from './Chat.MessageDisplay'
import useMessagesList from './useMessagesList'

export default function MessageList(props) {
  const messageList = React.useRef(null)
  const sortedMessages = useMessagesList();

  const goToTheBottom = () => {
    let node = messageList.current;
    node.scrollTop = node.scrollHeight;
  }

  React.useEffect(() => {
    goToTheBottom()
  }, [sortedMessages]);

  return (
    <Box ref={messageList} display="flex" flexDirection="column">
      {sortedMessages.map((message, index) => (
        <MessageDisplay key={index} origin={message.origin} date={message.date}>
          {message.content}
        </MessageDisplay>
      ))}
    </Box>
  );
}
