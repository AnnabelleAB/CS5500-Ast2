import React from "react";

import "./Formula.css";

// FormulaComponentProps
// we pass in value for the formula
// and the value for the current result
type FormulaProps = {
  formulaString: string;
  resultString: string;
}; // interface FormulaProps

const Formula: React.FC<FormulaProps> = ({ formulaString, resultString }) => {
  return (
    <div>
      <span data-testid="FormulaTitle" style={{ fontSize: "20px" }}>
        Formula{" "}
      </span>
      <br/>
      <div className="formula">
        <span data-testid="FormulaValue">{formulaString} </span>
      </div>
      <br/>
      <span data-testid="Result" style={{ fontSize: "20px" }}>
        Result
      </span>
      <br/>
      <div className="formula">
        <span data-testid="FormulaResult">{resultString}</span>
      </div>
    </div>
  );
}; // const Formula

export default Formula;
