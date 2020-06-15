import React  from 'react';

export default function useSocket() {
  const socket = React.useRef([]);
  
  const [isConnected, setConnected] = React.useState(null);
  socket.current.isConnected = isConnected;

  React.useEffect(() => {
    socket.current = new WebSocket("ws://localhost:6789");

    socket.current.onopen = () => {
      setConnected(true);
      console.log("CONNECTED");
    }

    socket.current.onclose = (e) => {
      if (!e.wasClean)
        setConnected(false);
        
      console.log("DISCONNECTED");
    }

    socket.current.onerror = () => {
      console.log("ERROR");
    }

    socket.current.waitForConnection = (callback, interval, maxCalls = 30) => {
      if (maxCalls <= 0)
        return;

      if (socket.current.readyState === 1) {
        callback();
      } else {
        setTimeout(() => {
          socket.current.waitForConnection(callback, interval, --maxCalls)
        }, interval);
      }
    }

    socket.current.safeSend = (msg) => {
      socket.current.waitForConnection(() => {
        socket.current.send(msg)
      }, 1000)
    }

    return () => socket.current.close()
  }, []);

  return socket.current;
}
