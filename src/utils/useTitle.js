import { useEffect } from 'react'

export default function useTitle(newTitle, setTitle) {
  useEffect(() => { 
    setTitle(newTitle)
  });
} 