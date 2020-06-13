import React  from 'react';

export default function WebSocketAPI() {
  const websocket = React.useRef([]);
  
  const [isConnected, setConnected] = React.useState(null);
  websocket.current.isConnected = isConnected;

  React.useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789");
    return () => websocket.current.close()
  }, []);

  React.useEffect(() => {
    websocket.current.onopen = () => {
      setConnected(true);
      console.log("CONNECTED");
    }

    websocket.current.onclose = (e) => {
      setConnected(false);
      console.log("DISCONNECTED");
    }

    websocket.current.onerror = (e) => {
      console.log("ERROR");
    }
  })

  return websocket;
}
