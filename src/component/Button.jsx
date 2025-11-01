import React from "react";

function Button({
  backgroundColor = "bg-transparent",
  textColor = "text-gray-700 dark:text-gray-300",
  hoverClass = "hover:bg-gray-100 dark:hover:bg-gray-800",
  text = "",
  className = "",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${textColor} ${hoverClass} cursor-pointer px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;