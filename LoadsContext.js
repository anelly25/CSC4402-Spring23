import { createContext, useContext, useState } from 'react';

const LoadsContext = createContext();

export const useLoads = () => {
  return useContext(LoadsContext);
};

export const LoadsProvider = ({ children }) => {
  const [selectedLoads, setSelectedLoads] = useState([]);

  const value = {
    selectedLoads,
    setSelectedLoads,
  };

  return <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>;
};
