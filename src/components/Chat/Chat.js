import React  from 'react';
import useStyles from './Chat.style';

import MessageList from "./Chat.MessageList"
import MessageInput from "./Chat.Input"

import Box from '@material-ui/core/Box';

export default function Chat(props) {
  const classes = useStyles();

  const websocket = React.useRef(null)

  const [connected, setConnected] = React.useState(true);
  const [newMessageContent, setNewMessageContent] = React.useState("");
  const [messages, setMessages] = React.useState([
    { origin: "user", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing.", date: "2020-04-23T11:05Z"},
    { origin: "bot", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus aliquet urna, ac interdum tellus imperdiet ac. Nulla id maximus ipsum. Suspendisse erat odio, tempus sit amet feugiat nec, malesuada vitae mauris. Sed tincidunt quam nulla. Fusce congue sollicitudin varius. Nulla facilisi. Sed sollicitudin dignissim erat, a imperdiet massa pulvinar eget. Donec ut suscipit sem. Pellentesque porttitor ex tellus, sit amet euismod eros porttitor in. Curabitur ultricies id urna placerat pharetra. Donec ultricies, elit ullamcorper condimentum efficitur, velit metus ullamcorper ex, vel bibendum sapien turpis consectetur sapien. Curabitur vitae suscipit neque, ut consequat nunc.", date: "2020-04-25T11:06Z"},
    { origin: "user", content: "Pellentesque tellus enim, efficitur sit amet ullamcorper in, luctus eu tortor. Nam sit amet pretium sem. Morbi semper sapien nulla, vitae blandit quam consectetur non. Donec egestas nunc eu mollis vestibulum. Phasellus id dapibus dui.", date: "2020-04-24T11:05Z"},
    { origin: "user", content: "Sed vel molestie risus, ac ullamcorper est. Nam sit amet urna felis. Suspendisse ut tortor laoreet, bibendum nulla vitae, ullamcorper purus. Nam ultrices volutpat purus. Aliquam sapien justo, ultrices vel risus eget, auctor pharetra elit. Maecenas sed justo nec nisl imperdiet viverra. Morbi gravida mauris sit amet iaculis dictum. In ornare magna quis magna imperdiet elementum.", date: "2020-04-22T11:06Z"},
  ]);

  const addNewMessage = (content, origin, date) => { 
    setMessages(prevMessages => [...prevMessages, { origin, content, date }]); 
  }

  const sendMessage = () => {
    addNewMessage(newMessageContent, "user", new Date().toISOString())
    websocket.current.send(JSON.stringify({
      content: newMessageContent,
      origin: "user",
      date: new Date().toISOString()
    }))
    setNewMessageContent("")
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (!/^[ ]*$/.test(newMessageContent)) {
      sendMessage()
    }
  }

  const handleMessageInput = (e) => { setNewMessageContent(e.target.value) }

  React.useEffect(() => {
    websocket.current = new WebSocket("ws://localhost:6789")
    websocket.current.onopen = () => { console.log("CONNECTED") }
    websocket.current.onclose = () => { console.log("DISCONNECTED") }
    websocket.current.onmessage = (e) => {
      let { content, origin, date } = JSON.parse(e.data)
      addNewMessage(content, origin, date)
    }
    setConnected(true)
    return () => {
      websocket.current.close()
    }
  }, []);

  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column" boxSizing="border-box"> 
      <MessageList messages={messages} />
      <MessageInput 
        value={newMessageContent}
        handleChange={handleMessageInput} 
        handleSubmit={handleMessageSubmit} 
        enabled={connected} 
      />
    </Box>
  );
}