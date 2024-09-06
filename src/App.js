import React, { useState } from "react";
import InputDisplayContainer from "./InputDisplayContainer";
import ButtonContainer from "./ButtonContainer";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(calculateExpression(input));
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateExpression = (expression) => {
    try {
      expression = expression.replace(/\s+/g, "");

      const numbers = expression.split(/[\+\-\*\/]/).map(Number);
      const operators = expression.match(/[\+\-\*\/]/g);

      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
          const operationResult =
            operators[i] === "*"
              ? numbers[i] * numbers[i + 1]
              : numbers[i] / numbers[i + 1];
          numbers.splice(i, 2, operationResult);
          operators.splice(i, 1);
          i--;
        }
      }

      let result = numbers[0];
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
          result += numbers[i + 1];
        } else if (operators[i] === "-") {
          result -= numbers[i + 1];
        }
      }

      return result;
    } catch (error) {
      return "Error";
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 100,
      }}
    >
      <h1>React Calculator</h1>
      <InputDisplayContainer input={input} result={result} />
      <ButtonContainer onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
