import React  from 'react';

export default function ConnectWebSocket() {
  const websocket = React.useRef([]);
  
  const [isConnected, setConnected] = React.useState(null);
  websocket.current.isConnected = isConnected;

  React.useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789");

    websocket.current.onopen = () => {
      setConnected(true);
      console.log("CONNECTED");
    }

    websocket.current.onclose = (e) => {
      if (!e.wasClean)
        setConnected(false);
        
      console.log("DISCONNECTED");
    }

    websocket.current.onerror = () => {
      console.log("ERROR");
    }

    websocket.current.waitForConnection = (callback, interval, maxCalls = 30) => {
      if (maxCalls <= 0)
        return;

      if (websocket.current.readyState === 1) {
        callback();
      } else {
        setTimeout(() => {
          websocket.current.waitForConnection(callback, interval, --maxCalls)
        }, interval);
      }
    }

    websocket.current.safeSend = (msg) => {
      websocket.current.waitForConnection(() => {
        websocket.current.send(msg)
      }, 1000)
    }

    return () => websocket.current.close()
  }, []);

  return websocket;
}
