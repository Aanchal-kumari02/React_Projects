import React from 'react';

const Display = ({ input }) => {
  return (
    <input
      type="text"
      className="calculator-screen z-depth-1 rounded-1"
      value={input}
      disabled
    />
  );
};

export default Display;
