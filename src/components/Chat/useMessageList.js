import React  from 'react';

import { useSelector } from 'react-redux';
import { sameDay, formatTime } from '../../utils';

export default function useMessageList() {
  const [sortedMessages, setSortedMessages] = React.useState([]);
  const messages = useSelector(state => state.messages);

  const addDateMessages = (sortedMessages) => {
    if (sortedMessages.length < 1)
      return []

    let datedIndex = 0
    let datedMessages = []
    let lastDate = []
  
    for (let i = 0; i < sortedMessages.length; i++) {
      const message = sortedMessages[i]

      if (message.sender === undefined) {
        throw new Error("Missing 'sender' parameter.");
      } else if (message.sender !== "bot" && message.sender !== "user" && message.sender !== "date") {
        throw new Error("Sender can only be 'user', 'date' or 'bot'.");
      }

      if (!sameDay(new Date(message.date), new Date(lastDate)) && message.sender !== "date") {
        datedMessages[datedIndex++] = { 
          sender: "date",
          message: formatTime.day(new Date(message.date)),
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

