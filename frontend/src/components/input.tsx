import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  className: string;
}

const Input = ({ name, placeholder, handleChange, type, className }: InputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      className={className}
    />
  );
};

export default Input;

