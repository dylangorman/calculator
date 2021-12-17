import { useState } from "react";
import "./Calculator.css";
// import { evaluate } from "mathjs";

// FUNCTION TO SET UP ARRAYS TO TAKE NUMBERS USING EMPTY STRINGS
const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  //   ARRAY FOR OPERATORS
  const ops = ["/", "x", "+", "-", "."];

  //   update calc function
  const updateCalc = (value) => {
    //   if statement, if our ops includes value and calc is = 0 or ops includes vale and ops includes the last value we enter return 0
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  //   FUNCTION TO DUPLICATE NUMBER BUTTONS 1-9
  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        //   need to push the updates to strings
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  //   function to calculate inputs
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  //   else if (userInput === "AC" clear screen""")
  //   function to clear screen
  const cancel = () => {
    if (calc === "") {
      return [0];
    }
  };
  //   CALC APP
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">
          {/* if there is a value it will show  */}
          {result ? <span>({result})</span> : ""}
          {/* if not it wont ?  */}
          {calc || "0"}
        </div>
        {/* //ON CLICK EACH OPERATOR WILL UPDATE THE CALCULATOR TO EACH SPECIFIC
        OPERATOR FOR EQUATION IT WILL HAVE A STRING VALUE// */}
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("x")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={() => calc("")}>AC</button>
        </div>
        <div className="numbers">
          {createNumbers()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

// NOTES

//   const
// if else statement for if BUTTON is "AC" (clear screen) else if BUTTON CLICKED is "=" EVALUATE INPUT else KEEP ADDING SELECTED BUTTONS TO STRING
// if (userInput === "=" sum input)
// else if (userInput === "AC" clear screen""")
// else (keep adding selected buttons to string)
