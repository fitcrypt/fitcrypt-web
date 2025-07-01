import React from "react";

function Button({
  backgroundColor = "bg-primary-500",
  textColor = "text-onPrimary",
  hoverClass = "hover:bg-primary-600",
  text = "",
  className = "",
}) {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${hoverClass} cursor-pointer px-4 py-2 rounded-full ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;