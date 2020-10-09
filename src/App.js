import React, { useState, useRef } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const prevCurrentOperandRef = useRef();
  const operands = ["+", "-", "*", "/"];
  prevCurrentOperandRef.current = currentOperand;
  const prevCurrentOperand = prevCurrentOperandRef.current;

  const updateCurrentOperand = (buttonValue) => {
    if (prevCurrentOperand !== "∞") {
      setCurrentOperand(prevCurrentOperand + buttonValue.toString());
    } else {
      setCurrentOperand("");
    }
  };

  const updateCurrentOperandWithDot = (dot) => {
    if (prevCurrentOperand.toString().includes(dot)) return;
    setCurrentOperand(prevCurrentOperand + dot.toString());
  };

  const updatePreviousOperand = (buttonValue) => {
    if (previousOperand !== "") {
      if (operands.lastIndexOf(buttonValue) !== -1 && currentOperand === "") {
        return;
      }
      switch (buttonValue) {
        case "+":
          if (previousOperand[0] !== "∞") {
            calculate();
          } else {
            setPreviousOperand("");
            setCurrentOperand("∞");
          }
          break;
        case "-":
          if (previousOperand[0] !== "∞") {
            calculate();
          } else {
            setPreviousOperand("");
            setCurrentOperand("∞");
          }

          break;
        case "*":
          if (previousOperand[0] !== "∞") {
            calculate();
          } else {
            setPreviousOperand("");
            setCurrentOperand("∞");
          }
          break;
        case "÷":
          if (previousOperand[0] !== "∞") {
            calculate();
          } else {
            setPreviousOperand("");
            setCurrentOperand("∞");
          }
          break;
        default:
          return;
      }
    } else {
      if (currentOperand !== "") {
        setPreviousOperand(currentOperand + buttonValue);
        setCurrentOperand("");
      } else {
        return;
      }
    }
  };

  const clearAll = () => {
    setPreviousOperand("");
    setCurrentOperand("");
  };

  const deleteOneNumber = () => {
    if (currentOperand !== "")
      setCurrentOperand(currentOperand.toString().slice(0, -1));
  };

  const calculate = () => {
    if (currentOperand !== "") {
      switch (previousOperand[previousOperand.length - 1]) {
        case "+":
          if (previousOperand[0] === "∞") {
            setCurrentOperand("∞");
            setPreviousOperand("");
          } else {
            setCurrentOperand(
              (
                parseFloat(previousOperand) + parseFloat(currentOperand)
              ).toFixed(2)
            );
            setPreviousOperand("");
          }
          break;
        case "-":
          if (previousOperand[0] === "∞") {
            setCurrentOperand("∞");
            setPreviousOperand("");
          } else {
            setCurrentOperand(
              (
                parseFloat(previousOperand) - parseFloat(currentOperand)
              ).toFixed(2)
            );
            setPreviousOperand("");
          }
          break;
        case "*":
          if (previousOperand[0] === "∞") {
            setCurrentOperand("∞");
            setPreviousOperand("");
          } else {
            setCurrentOperand(
              (
                parseFloat(previousOperand) * parseFloat(currentOperand)
              ).toFixed(2)
            );
            setPreviousOperand("");
          }
          break;
        case "÷":
          if (currentOperand === "0" || previousOperand[0] === "∞") {
            setCurrentOperand("∞");
            setPreviousOperand("");
          } else {
            setCurrentOperand(
              (
                parseFloat(previousOperand) / parseFloat(currentOperand)
              ).toFixed(2)
            );
            setPreviousOperand("");
          }
          break;
        default:
          return;
      }
    }
  };
  return (
    <div className="App">
      <Board
        updateCurrentOperand={updateCurrentOperand}
        updatePreviousOperand={updatePreviousOperand}
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        clearAll={clearAll}
        deleteOneNumber={deleteOneNumber}
        calculate={calculate}
        updateCurrentOperandWithDot={updateCurrentOperandWithDot}
      />
    </div>
  );
}

export default App;
