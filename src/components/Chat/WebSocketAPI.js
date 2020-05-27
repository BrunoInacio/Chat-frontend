import React  from 'react';

export default function WebSocketAPI(listener) {
  const websocket = React.useRef(null);

  React.useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789");
    websocket.current.onopen = () => console.log("CONNECTED");
    websocket.current.onclose = () => console.log("DISCONNECTED");
    websocket.current.onerror = () => console.log("ERROR");
    websocket.current.onmessage = (e) => listener(JSON.parse(e.data));

    return () => websocket.current.close()
  }, []);

  return websocket.current;
}
