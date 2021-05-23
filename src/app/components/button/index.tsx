import React, { memo } from "react";
import "./index.scss";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
  disabled?: boolean;
  shape?: "circle" | "round";
  color?: "blue" | "yellow" | "green" | "default";
}

const Button = ({
  onClick,
  text = "",
  className = "",
  disabled = false,
  shape = "circle",
  color = "default",
}: ButtonProps) => (
  <button
    className={`btn btn-shape--${shape} btn-color--${color} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default memo(Button);
