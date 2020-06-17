import React  from 'react';

import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions';

import useSocket from './useSocket';

export default function useChat() {
  const socket = useSocket();
  const dispatch = useDispatch();

  React.useEffect(() => {
    
    socket.current.on("bot_uttered", (res) => {
      dispatch(addMessage({
        message: res.text,
        sender: "bot",
        date: new Date().toISOString()
      }))
    })
    
    socket.current.sendMessage = (messageContent) => {
      const msg = {
        message: messageContent,
        sender: "user",
        date: new Date().toISOString()
      };

      dispatch(addMessage(msg));
      socket.current.safeSend(msg);
    }
  }, [socket, dispatch])

  return [socket.current.sendMessage, socket.current.connected];
}
