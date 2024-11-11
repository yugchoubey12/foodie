import React, { FormEvent, useState, useLayoutEffect } from "react";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthenticationContext";
import cogoToast from "cogo-toast";

const Landing = () => {
  const navigate = useNavigate();
  const { loading, onLogin } = useAuth();
  const [state, setState] = useState({ email: "", password: "" });

  useLayoutEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleState = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      return cogoToast.error("Please fill all fields");
    }
    await onLogin(state);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" handleChange={handleState} type="email" />
        <Input name="password" placeholder="Password" handleChange={handleState} type="password" />
        <Button title={loading ? "Loading" : "Login"} type="submit" className="btn" disabled={loading} />
      </form>
    </div>
  );
};

export default Landing;
