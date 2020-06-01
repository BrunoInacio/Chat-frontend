import { useState, useEffect } from 'react'

export default function useTitle(initialTitle) {

  const [title, setTitle] = useState(initialTitle);

  useEffect(() => { 
    document.title = "Chatbot" + (title ? " - " + title : ""); 
  }, [title]);

  return [title, setTitle]
} 