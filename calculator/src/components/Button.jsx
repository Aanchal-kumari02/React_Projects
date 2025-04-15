import React from 'react';

const Button = ({ label, value, className, onClick }) => {
  return (
    <button
      type="button"
      value={value}
      className={className}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default Button;
