// src/pages/Dashboard.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If there's no token in sessionStorage, redirect to the login page
    if (!sessionStorage.getItem("token")) {
      navigate("/");  // Redirect to login if not logged in
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Welcome back! You are logged in.</p>
    </div>
  );
};

export default Dashboard;
