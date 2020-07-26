import React, { createContext, useContext, Children } from "react";

interface Props {
  name: string;
}

const AppContext = createContext({} as Props);

export const AppProvider: React.FC = ({ children }) => {
  const context = {
    name: "Matheus",
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
