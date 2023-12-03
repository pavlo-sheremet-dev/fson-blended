import { createContext, useState } from 'react';

export const ColorThemeContext = createContext({
  themeTitle: 'light',
  toggleTheme: () => {},
});

export const ColorThemeProvider = ({ children }) => {
  const [themeTitle, setThemeTitle] = useState('light');

  const toggleTheme = () => {
    setThemeTitle(p => (p === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorThemeContext.Provider value={{ themeTitle, toggleTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
