// src/context/AuthenticationContext.tsx
import React, { createContext, useState } from 'react';

// Define the context type
type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  onLogin: (data: { email: string, password: string }) => void;
};

export const AuthenticationContext = createContext<AuthContextType | undefined>(undefined);

// This will wrap your app and provide auth-related state and methods
export const AuthenticationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (data: { email: string, password: string }) => {
    // Simple login check - replace with real API call
    if (data.email === 'admin@example.com' && data.password === 'password') {
      setIsAuthenticated(true);
      sessionStorage.setItem('token', 'fake-token');  // Save token in sessionStorage
      sessionStorage.setItem('email', data.email);   // Save email for further use
    }
  };

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated, onLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
