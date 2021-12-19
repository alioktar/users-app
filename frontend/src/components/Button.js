import React from "react";

function Button({ label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border border-gray-400 bg-gray-400 text-white text-sm font-medium tracking-wider ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
