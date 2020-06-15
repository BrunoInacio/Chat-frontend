import React  from 'react';

import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions';

import useSocket from './useSocket';

export default function useChat() {
  const socket = useSocket();
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.onmessage = (e) => dispatch(addMessage(JSON.parse(e.data)))

    socket.sendMessage = (messageContent) => {
      const msg = {
        content: messageContent,
        origin: "user",
        date: new Date().toISOString()
      };

      dispatch(addMessage(msg));
      socket.safeSend(JSON.stringify(msg));
    }
  }, [socket, dispatch])

  return [socket.sendMessage, socket.isConnected];
}
