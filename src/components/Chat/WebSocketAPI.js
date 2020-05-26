import React  from 'react';

export default class WebSocketAPI {
  constructor(listener) {
    this.websocket = React.useRef(null);
    [this.connected, this.setConnected] = React.useState(false)

    React.useEffect(() => {
      this.websocket.current = new WebSocket("ws://localhost:6789");
      this.websocket.current.onopen = () => console.log("CONNECTED");
      this.websocket.current.onclose = () => console.log("DISCONNECTED");
      this.websocket.current.onmessage = (e) => listener(JSON.parse(e.data));

      this.setConnected(true);
  
      return () => this.websocket.current.close()
    }, []);
  };

  send(message) {
    this.websocket.current.send(message);
  }

}
