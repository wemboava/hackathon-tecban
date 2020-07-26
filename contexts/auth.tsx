import React, { createContext, useContext, Children } from "react";

interface Props {
  logged: boolean;
}

const AuthContext = createContext({} as Props);

export const AuthProvider: React.FC = ({ children }) => {
  const context = {
    logged: true,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
