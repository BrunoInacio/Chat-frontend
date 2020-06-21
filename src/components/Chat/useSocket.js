import React  from 'react';
import io from 'socket.io-client';

export default function useSocket() {
  const socket = React.useRef([]);
  
  const [isConnected, setConnected] = React.useState(null);

  React.useEffect(() => {
    socket.current = io();

    socket.current.on('connect', () => {
      setConnected(true);
      console.log("CONNECTED");
    })

    socket.current.on('disconnect', (reason) => {
      setConnected(false);  
      console.log("DISCONNECTED");
    })

    socket.current.on('error', () => {
      console.log("ERROR");
    })

    socket.current.waitForConnection = (callback, interval, maxCalls = 30) => {
      if (maxCalls <= 0)
        return;

      if (socket.current.connected) {
        callback();
      } else {
        setTimeout(() => {
          socket.current.waitForConnection(callback, interval, --maxCalls)
        }, interval);
      }
    }

    socket.current.safeSend = (msg) => {
      socket.current.waitForConnection(() => {
        socket.current.emit('user_uttered', msg)
      }, 1000)
    }

    return () => socket.current.close()
  }, []);

  return socket;
}
