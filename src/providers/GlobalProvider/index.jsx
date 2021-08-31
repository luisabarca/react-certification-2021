import React, { useContext, useState, useCallback, useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

export const GlobalContext = React.createContext(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('GlobalContext not available');
  }

  return context;
};

export const GlobalProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [query, setQuery] = useState('Wizeline');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const selectedTheme = createTheme({
    palette: {
      type: theme,
    },
  });

  const providerProps = {
    query,
    setQuery,
    theme,
    setTheme,
    toggleTheme,
    authenticated,
    login,
    logout,
  };

  return (
    <GlobalContext.Provider value={providerProps}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
