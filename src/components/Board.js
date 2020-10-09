import React from "react";

export default function board({
  updateCurrentOperand,
  updatePreviousOperand,
  currentOperand,
  previousOperand,
  clearAll,
  deleteOneNumber,
  calculate,
  updateCurrentOperandWithDot,
}) {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={clearAll}>
        AC
      </button>
      <button onClick={deleteOneNumber}>DEL</button>
      <button
        value={"÷"}
        onClick={(e) => updatePreviousOperand(e.target.value)}
      >
        ÷
      </button>
      <button value={1} onClick={(e) => updateCurrentOperand(e.target.value)}>
        1
      </button>
      <button value={2} onClick={(e) => updateCurrentOperand(e.target.value)}>
        2
      </button>
      <button value={3} onClick={(e) => updateCurrentOperand(e.target.value)}>
        3
      </button>
      <button
        value={"*"}
        onClick={(e) => updatePreviousOperand(e.target.value)}
      >
        *
      </button>
      <button value={4} onClick={(e) => updateCurrentOperand(e.target.value)}>
        4
      </button>
      <button value={5} onClick={(e) => updateCurrentOperand(e.target.value)}>
        5
      </button>
      <button value={6} onClick={(e) => updateCurrentOperand(e.target.value)}>
        6
      </button>
      <button
        value={"+"}
        onClick={(e) => updatePreviousOperand(e.target.value)}
      >
        +
      </button>
      <button value={7} onClick={(e) => updateCurrentOperand(e.target.value)}>
        7
      </button>
      <button value={8} onClick={(e) => updateCurrentOperand(e.target.value)}>
        8
      </button>
      <button value={9} onClick={(e) => updateCurrentOperand(e.target.value)}>
        9
      </button>
      <button
        value={"-"}
        onClick={(e) => updatePreviousOperand(e.target.value)}
      >
        -
      </button>
      <button
        value={"."}
        onClick={(e) => updateCurrentOperandWithDot(e.target.value)}
      >
        .
      </button>
      <button value={0} onClick={(e) => updateCurrentOperand(e.target.value)}>
        0
      </button>
      <button onClick={calculate} className="span-two">
        =
      </button>
    </div>
  );
}
