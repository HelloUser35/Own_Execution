import { useState, useEffect } from 'react';

export function useTheme() {
  // Initialize state with value from local storage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme');
    }
    // Check system preference once if no local storage value is found
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    
    // Add the current theme class
    root.classList.add(theme);

    // Save preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
}