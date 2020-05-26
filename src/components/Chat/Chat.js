import React  from 'react';
import { connect } from 'react-redux' 

import { addMessage } from '../../redux/actions'

import useStyles from './Chat.style';

import MessageList from "./Chat.MessageList"
import MessageInput from "./Chat.Input"

import {Divider, Box} from '@material-ui/core';

function Chat({ addMessage }) {
  const classes = useStyles();

  const websocket = React.useRef(null)

  const [connected, setConnected] = React.useState(true);
  const [newMessageContent, setNewMessageContent] = React.useState("");

  const addNewMessage = (content, origin, date) => { 
    addMessage({ content, origin, date }); 
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
    <Box className={classes.root}> 
      <Box className={classes.messageListContainer}>
        <MessageList />
      </Box>
      <Box elevation={2} className={classes.inputContainer}>
        <Divider />
        <MessageInput 
          value={newMessageContent}
          handleChange={handleMessageInput} 
          handleSubmit={handleMessageSubmit} 
          enabled={connected} 
        />
      </Box>
    </Box>
  );
}

export default connect(null, {
  addMessage
})(Chat)
