import React  from 'react';

import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions';

import ConnectWebSocket from './ConnectWebSocket';

export default function ChatConnect() {
  const websocket = ConnectWebSocket();
  const dispatch = useDispatch();

  React.useEffect(() => {
    websocket.current.onmessage = (e) => dispatch(addMessage(JSON.parse(e.data)))

    websocket.current.sendMessage = (messageContent) => {
      const msg = {
        content: messageContent,
        origin: "user",
        date: new Date().toISOString()
      };
  
      dispatch(addMessage(msg));
      websocket.current.send(JSON.stringify(msg));
    }
  }, [websocket, dispatch])

  return websocket;
}
