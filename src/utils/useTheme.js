import { useState, useEffect } from 'react'

export default function useTheme(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.querySelector("meta[name=theme-color]")
            .setAttribute("content", theme.palette.background.header);
  }, [theme]);

  return [theme, setTheme]
}