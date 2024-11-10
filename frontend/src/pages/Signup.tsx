import React, { useState, FormEvent } from "react";
import { Input, Button } from "../../components";
import cogoToast from "cogo-toast";
import { validateEmail } from "../../utils";
import { useNavigate } from "react-router-dom";

type _STATE = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<_STATE>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleState = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(state.email)) {
      return cogoToast.error("Invalid email format");
    }

    // Password validation
    if (!state.password) {
      return cogoToast.error("Password is required");
    }

    // Confirm password check
    if (state.password !== state.confirmPassword) {
      return cogoToast.error("Passwords do not match");
    }

    // Proceed with registration logic (e.g., API call to create user)

    // Example success message after registration
    cogoToast.success("Account created successfully!");
    navigate("/login"); // Redirect to login page after successful signup
  };

  return (
    <div className="container bg-black text-white h-[100%] flex flex-col-reverse md:flex-row w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full h-full p-10"
      >
        <div className="flex flex-col gap-2 w-full md:w-[50%]">
          <h2 className="text-orange-500 font-extrabold text-xl underline underline-offset-4 ">
            Foodie - Signup
          </h2>

          <Input
            name="email"
            placeholder="Email"
            handleChange={handleState}
            type="text"
            className="bg-zinc-900 py-1 px-4 w-full shadow-xl placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
          />

          <Input
            name="password"
            placeholder="Password"
            handleChange={handleState}
            type="password"
            className="bg-zinc-900 py-1 px-4 w-full placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
          />

          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            handleChange={handleState}
            type="password"
            className="bg-zinc-900 py-1 px-4 w-full placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
          />

          <div className="w-full md:w-[50%] m-auto flex flex-col gap-2">
            <Button
              title="Sign Up"
              className="bg-orange-500 text-white hover:bg-orange-600 py-1 px-6 w-full"
              type="submit"
            />
          </div>
        </div>
      </form>
      <div className="w-full h-full saturate-200 ">
        <img
          src="path/to/your/image.jpg" // Optional background image
          alt="Signup background"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;

