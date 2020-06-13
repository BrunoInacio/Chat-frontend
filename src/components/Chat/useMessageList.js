import React  from 'react';

import { useSelector } from 'react-redux';
import { sameDay, formatTime } from '../../utils';

export default function useMessageList() {
  const [sortedMessages, setSortedMessages] = React.useState([]);
  const messages = useSelector(state => state.messages);

  const addDateMessages = (sortedMessages) => {
    if (sortedMessages.length < 1)
      return []

    let datedMessages = []
    let datedIndex = 0
    let lastDate = sortedMessages[0].date
  
    for (let i = 0; i < sortedMessages.length; i++) {
      const message = sortedMessages[i]

      if (message.origin === undefined) {
        throw new Error("Missing 'origin' parameter.");
      } else if (message.origin !== "bot" && message.origin !== "user" && message.origin !== "date") {
        throw new Error("Origin can only be 'user', 'date' or 'bot'.");
      }

      if (!sameDay(new Date(message.date), new Date(lastDate)) && message.origin !== "date") {
        datedMessages[datedIndex++] = { 
          origin: "date",
          content: formatTime.day(new Date(message.date)),
          date: message.date 
        }
      }
  
      datedMessages[datedIndex++] = message
      lastDate = message.date
    }
    
    return datedMessages
  }

  React.useEffect(() => {
    let sortedMessages = [...messages]

    sortedMessages.sort((a, b) => (
        new Date(a.date) < new Date(b.date) ? -1 : 1
    ))
    
    sortedMessages = addDateMessages(sortedMessages)
    setSortedMessages(sortedMessages)
  }, [messages]);

  return sortedMessages;
}

