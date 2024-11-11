import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthenticationProvider>
  );
};

export default App;
