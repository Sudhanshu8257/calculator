import React,{useContext} from "react";
import classes from "../LightIndex.module.css";
import Dclasses from "../DarkIndex.module.css";
import ThemeContext from "../store/ThemeContext";
const Screen = ({ prevInput, operation, replace, currInput }) => {
  const ctx = useContext(ThemeContext)
  const darkMode = ctx.darkMode
  return (
    <>
      <div className={darkMode ? Dclasses.display :classes.display }>
        <div className={classes.displaySub}>
          {prevInput} {operation} {!replace && currInput}
        </div>
        <div className={classes.displayMain}>{currInput}</div>
      </div>
    </>
  );
};

export default Screen;
