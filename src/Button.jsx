import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <input
      type="button"
      style={{ width: 60, height: 60, fontSize: 24, borderRadius: 10 }}
      onClick={() => onClick(value)}
      value={value}
    />
  );
};

export default Button;
