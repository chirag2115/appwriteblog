import React from "react";

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
