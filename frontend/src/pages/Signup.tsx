import React, { FormEvent, useState } from "react";
import { Input, Button } from "../../components";
import { useAuth } from "../../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import cogoToast from "cogo-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { loading, onSignup } = useAuth();
  const [state, setState] = useState({ email: "", password: "" });

  const handleState = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      return cogoToast.error("Please fill all fields");
    }
    await onSignup(state);
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" handleChange={handleState} type="email" />
        <Input name="password" placeholder="Password" handleChange={handleState} type="password" />
        <Button title={loading ? "Loading" : "Sign Up"} type="submit" className="btn" disabled={loading} />
      </form>
    </div>
  );
};

export default Signup;
