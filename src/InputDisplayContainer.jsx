import React from "react";

const InputDisplayContainer = ({ input, result }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        value={input}
        style={{ fontSize: 24, width: 250, textAlign: "right" }}
        readOnly
      />
      <div style={{ fontSize: 24, marginTop: 10 }}>{result}</div>
    </div>
  );
};

export default InputDisplayContainer;
