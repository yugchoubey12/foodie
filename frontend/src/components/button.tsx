// frontend/src/components/Button.tsx
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 rounded-lg focus:outline-none ${className}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
