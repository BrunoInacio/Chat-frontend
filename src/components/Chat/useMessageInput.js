import React  from 'react';

import { useDispatch } from 'react-redux'
import { addMessage } from '../../redux/actions';

export default function useInputMessage(websocket) {
  const [messageContent, setMessageContent] = React.useState("");
  
  const dispatch = useDispatch();
  const sendMessage = (messageContent) => {
    const msg = {
      content: messageContent,
      origin: "user",
      date: new Date().toISOString()
    };

    dispatch(addMessage(msg));
    websocket.current.send(JSON.stringify(msg));
  }

  const handleInput = (e) => {
    setMessageContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\s*$/.test(messageContent))
      return;

    sendMessage(messageContent);
    setMessageContent("");
  };

  return [messageContent, handleInput, handleSubmit]
}
