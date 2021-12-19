import React from "react";

function Input({ text, onChange, placeholder, className }) {
  return (
    <input
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      className={`border px-4 py-1 rounded-full text-sm font-light focus:outline-0 focus:border-blue-200 placeholder:text-gray-500 ${className}`}
    />
  );
}

export default Input;
