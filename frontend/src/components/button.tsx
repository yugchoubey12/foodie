import React from "react";

interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  disabled: boolean;
}

const Button = ({ title, type, className, disabled }: ButtonProps) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
