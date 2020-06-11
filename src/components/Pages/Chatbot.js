import React from 'react';

import withPages from './withPages';

import Chat from '../Chat';

function ChatBot({ setTitle }) {
  React.useEffect(() => { setTitle("Conversa") }, [setTitle])

  return (
    <Chat />
  );
}

export default withPages(ChatBot);
