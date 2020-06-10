import React  from 'react';

export default function useInputMessage(sendMessage) {
  const [newMessageContent, setNewMessageContent] = React.useState("");

  const handleMessageInput = (e) => {
    setNewMessageContent(e.target.value);
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (!/^\s*$/.test(newMessageContent)) {
      const msg = {
        content: newMessageContent,
        origin: "user",
        date: new Date().toISOString()
      };

      sendMessage(msg);
      setNewMessageContent("");
    }
  };

  return [newMessageContent, handleMessageInput, handleMessageSubmit];
}
