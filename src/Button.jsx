import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button
      style={{ width: 60, height: 60, fontSize: 24, borderRadius: 10 }}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
