import React from 'react';

export function Input({ name, value, type, placeholder, handleChange }) {
  return (
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
