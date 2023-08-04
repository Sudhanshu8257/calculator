import React,{useContext} from "react";
import classes from "../LightIndex.module.css";
import Dclasses from "../DarkIndex.module.css";
import { MdBackspace } from "react-icons/md";
import ThemeContext from "../store/ThemeContext";
const KeyBoard = ({eraseInput,operandHandler,clearInputValue,inputHandler,calculate }) => {
  const ctx = useContext(ThemeContext)
  const darkMode = ctx.darkMode
  const btnClass = darkMode? Dclasses.btn : classes.btn
  return (
    <>
      <div className={classes.layout}>
        <button onClick={eraseInput} className={btnClass}>
          CE
        </button>
        <button onClick={() => operandHandler("%")} className={btnClass}>
          %
        </button>
        <button onClick={clearInputValue} className={btnClass}>
          <MdBackspace className={classes.icn} />
        </button>
        <button onClick={() => operandHandler("÷")} className={btnClass}>
          ÷
        </button>
      </div>
      <div className={classes.layout}>
        <button onClick={() => inputHandler("7")} className={btnClass}>
          7
        </button>
        <button onClick={() => inputHandler("8")} className={btnClass}>
          8
        </button>
        <button onClick={() => inputHandler("9")} className={btnClass}>
          9
        </button>
        <button onClick={() => operandHandler("x")} className={btnClass}>
          x
        </button>
      </div>
      <div className={classes.layout}>
        <button onClick={() => inputHandler("4")} className={btnClass}>
          4
        </button>
        <button onClick={() => inputHandler("5")} className={btnClass}>
          5
        </button>
        <button onClick={() => inputHandler("6")} className={btnClass}>
          6
        </button>
        <button onClick={() => operandHandler("-")} className={btnClass}>
          -
        </button>
      </div>
      <div className={classes.layout}>
        <button onClick={() => inputHandler("1")} className={btnClass}>
          1
        </button>
        <button onClick={() => inputHandler("2")} className={btnClass}>
          2
        </button>
        <button onClick={() => inputHandler("3")} className={btnClass}>
          3
        </button>
        <button onClick={() => operandHandler("+")} className={btnClass}>
          +
        </button>
      </div>
      <div className={classes.layout}>
        <button onClick={() => inputHandler("-")} className={btnClass}>
          +-
        </button>
        <button onClick={() => inputHandler("0")} className={btnClass}>
          0
        </button>
        <button onClick={() => inputHandler(".")} className={btnClass}>
          .
        </button>
        <button onClick={calculate} className={btnClass}>
          =
        </button>
      </div>
    </>
  );
};

export default KeyBoard;
