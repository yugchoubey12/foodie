// frontend/src/components/Input.tsx
import React from "react";

type InputProps = {
  name: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  handleChange,
  type,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className={`p-2 rounded-lg focus:outline-none ${className}`}
    />
  );
};

export default Input;
