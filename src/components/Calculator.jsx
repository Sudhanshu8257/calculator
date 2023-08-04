import React, { useContext, useState } from "react";
import classes from "../LightIndex.module.css";
import Dclasses from "../DarkIndex.module.css";
import KeyBoard from "./KeyBoard";
import Screen from "./Screen";
import ThemeContext from "../store/ThemeContext";

const Calculator = () => {
  const ctx = useContext(ThemeContext)
  const darkMode = ctx.darkMode
  const defaultState = {
    prevInput: "",
    currInput: "",
    operation: null,
    replace: false,
  };
  const [calc, setCalc] = useState(defaultState);

  const inputHandler = (value) => {
    if (calc.replace) {
      setCalc({
        ...defaultState,
        currInput: value,
      });
    } else {
      if (calc.currInput.length < 16) {
        if (!(value === "0" && calc.currInput === "")) {
          if (value === "-") {
            setCalc((prev) => ({
              ...prev,
              currInput: calc.currInput.includes("-")
                ? prev.currInput.slice(1)
                : value + prev.currInput,
            }));
          } else if (value === ".") {
            !calc.currInput.includes(".") &&
              setCalc((prev) => ({
                ...prev,
                currInput: prev.currInput + value,
              }));
          } else {
            setCalc((prev) => ({
              ...prev,
              currInput: prev.currInput + value,
            }));
          }
        }
      }
    }
  };

  const eraseInput = () => {
    setCalc({
      prevInput: "",
      currInput: "",
      operation: null,
      replace: false,
    });
  };

  const percentageHandler = (input) => {
    let num = parseFloat(input)
    let result = (num /= Math.pow(100, 1));
    return String(result);
  };

  const operandHandler = (operand) => {
    if (!calc.operation && calc.currInput.length > 0) {
      operand === "%"
        ? setCalc( prev => ({
            ...prev,
            currInput: percentageHandler(prev.currInput),
          }))
        : setCalc((prev) => ({
            replace: false,
            prevInput: prev.currInput,
            operation: operand,
            currInput: "",
          }));
    }

    if (calc.operation && calc.currInput.length < 1) {
      operand === "%"
        ? setCalc( prev => ({
          ...prev,
          currInput: percentageHandler(prev.currInput),
        }))
        : setCalc((prev) => ({
            ...prev,
            operation: operand,
          }));
    }

    if (calc.operation && calc.currInput && calc.prevInput) {
      operand === "%"
        ? setCalc(prev=>({
            ...prev,
            currInput:percentageHandler(prev.currInput),
          }))
        : setCalc({
            prevInput: evaluate(calc),
            operation: operand,
            currInput: "",
            replace: false,
          });
    }
  };

  const evaluate = ({ prevInput, currInput, operation }) => {
    let temp;
    let a = parseFloat(prevInput);
    let b = parseFloat(currInput);
    switch (operation) {
      case "+":
        temp = a + b;
        break;
      case "-":
        temp = a - b;
        break;
      case "x":
        temp = a * b;
        break;
      case "÷":
        temp = a / b;
        break;
      default:
        return
    }
    return temp;
  };

  const clearInputValue = () => {
    setCalc((prev) => ({
      ...prev,
      currInput: prev.currInput.slice(0, prev.currInput.length - 1),
    }));
  };

  const calculate = () => {
    if (calc.operation && !calc.currInput && calc.prevInput) {
      setCalc((prev) => ({
        prevInput: "",
        operation: "",
        currInput: String(prev.prevInput),
        replace: true,
      }));
    }
    if (calc.operation && calc.currInput && calc.prevInput) {
      setCalc({
        ...defaultState,
        currInput: String(evaluate(calc)),
        replace: true,
      });
    }
  };

  return (
    <div className={darkMode ? Dclasses.calcBackground:classes.calcBackground}>
      <Screen
        prevInput={calc.prevInput}
        currInput={calc.currInput}
        operation={calc.operation}
        replace={calc.replace}
        darkMode={darkMode}
      />
      <KeyBoard
        inputHandler={inputHandler}
        calculate={calculate}
        operandHandler={operandHandler}
        clearInputValue={clearInputValue}
        eraseInput={eraseInput}
      />
    </div>
  );
};

export default Calculator;
