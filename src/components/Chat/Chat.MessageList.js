import React from 'react';
import { connect } from 'react-redux';

import useStyles from './Chat.style';

import Message from './Message'

import { Box } from '@material-ui/core';

import { sameDay, formatTime } from '../../utils';

function MessageList(props) {
  const classes = useStyles();

  const messageList = React.useRef(null)

  const goToTheBottom = () => {
    let node = messageList.current;
    node.scrollTop = node.scrollHeight;
  }

  const [sortedMessages, setSortedMessages] = React.useState([]);

  const addDateMessages = (sortedMessages) => {
    if (sortedMessages.length < 1) {
      return
    }
    let datedMessages = []
    let datedIndex = 0
    let lastDate = sortedMessages[0].date
    for (let i = 0; i < sortedMessages.length; i++) {
      let message = sortedMessages[i]
      if ((!sameDay(new Date(message.date), new Date(lastDate)) || i === 0) && message.origin !== "date") {
        datedMessages[datedIndex++] = { origin: "date", content: formatTime.day(new Date(message.date)), date: message.date }
      }
      datedMessages[datedIndex++] = message
      lastDate = message.date
    }
    return datedMessages
  }

  React.useEffect(() => {
    let sortedMessages = [...props.messages]
    sortedMessages.sort((a, b) => (
        new Date(a.date) < new Date(b.date) ? -1 : 1
    ))
    sortedMessages = addDateMessages(sortedMessages)
    setSortedMessages(sortedMessages)
  }, [props.messages]);

  React.useEffect(() => {
    goToTheBottom()
  }, [sortedMessages]);

  return (
    <Box 
      ref={messageList}
      flexGrow="1" 
      display="flex" 
      flexDirection="column" 
      bgcolor="background.messages" p={2} mb={2}
    > 
      {sortedMessages.map((message, index) => (
        <Message key={index} origin={message.origin} date={message.date}>
          {message.content}
        </Message>
      ))}
    </Box>
  );
}

const mapStateToProps = state => ({ messages: state.messages })

export default connect(mapStateToProps)(MessageList)