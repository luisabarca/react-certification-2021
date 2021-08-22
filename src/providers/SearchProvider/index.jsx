import React, { useContext, useState } from 'react';

export const SearchContext = React.createContext(null);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('SearchProvider not available');
  }

  return context;
};

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('Wizeline');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
