import React  from 'react';

export default function WebSocketAPI() {
  const websocket = React.useRef(null);

  React.useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789");
    
    websocket.current.onopen = () => console.log("CONNECTED");
    websocket.current.onclose = () => console.log("DISCONNECTED");
    websocket.current.onerror = () => console.log("ERROR");

    return () => websocket.current.close()
  }, []);

  return websocket;
}
