import React, { createContext, useState, useContext, ReactNode } from "react";

export interface AUTH_TYPE {
  loading: boolean;
  onLogin: (data: { email: string; password: string }) => void;
  onSignup: (data: { email: string; password: string }) => void;
}

const AuthenticationContext = createContext<AUTH_TYPE | null>(null);

export const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const onLogin = async (data: { email: string; password: string }) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      sessionStorage.setItem("token", "dummy_token");
      sessionStorage.setItem("email", data.email);
      setLoading(false);
      alert("Login successful!");
    }, 1000);
  };

  const onSignup = async (data: { email: string; password: string }) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      alert("Signup successful!");
      setLoading(false);
    }, 1000);
  };

  return (
    <AuthenticationContext.Provider value={{ loading, onLogin, onSignup }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthenticationProvider");
  }
  return context;
};
