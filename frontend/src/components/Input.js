import React from "react";

function Input({
  text,
  name,
  onChange,
  className,
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      className={`border px-4 py-1 rounded-full text-sm font-light focus:outline-0 focus:border-blue-200 placeholder:text-gray-500 w-full ${className}`}
    />
  );
}

export default Input;
