import React, { useContext, useState, useCallback } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

export const GlobalContext = React.createContext(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('GlobalContext not available');
  }

  return context;
};

export const GlobalProvider = ({ children }) => {
  const [query, setQuery] = useState('Wizeline');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  }, [theme]);

  const selectedTheme = createTheme({
    palette: {
      type: theme,
    },
  });

  return (
    <GlobalContext.Provider value={{ query, setQuery, theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
