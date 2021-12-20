import { useState } from "react";
import { evaluate } from "mathjs";
import "./calculator.css";

const Calculator = () => {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "AC"];
  const ops = ["/", "*", "+", "-"];
  const equals = ["="];
  const [display, setDisplay] = useState("");
  const handler = (button) => {
    if (button === "=") {
      setDisplay(evaluate(display));
    } else if (button === "AC") {
      setDisplay("");
    } else {
      setDisplay(display + button);
    }
  };

  return (
    <div className="screenWrapper">
      <div className="calculator">
        <div className="screen">
          {equals ? <span>{display}</span> : ""}
          {display || "0"}
        </div>
        <div className="operators">
          {ops.map((op, index) => {
            return <Op handler={handler} key={index} op={op} />;
          })}
        </div>
        <div className="digits">
          {digits.map((button, index) => {
            return <Button handler={handler} key={index} button={button} />;
          })}
        </div>
        <div className="equals">
          {equals.map((equal, index) => {
            return <Equal handler={handler} key={index} equal={equal} />;
          })}
        </div>
      </div>
    </div>
  );
};
const Op = (props) => {
  return <button onClick={() => props.handler(props.op)}>{props.op}</button>;
};
const Button = (props) => {
  return (
    <button onClick={() => props.handler(props.button)}>{props.button}</button>
  );
};
const Equal = (props) => {
  return (
    <button onClick={() => props.handler(props.equal)}>{props.equal}</button>
  );
};
export default Calculator;
