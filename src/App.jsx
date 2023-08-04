import React, {useContext } from "react";
import Calculator from "./components/Calculator";
import IcnGroup from "./components/IcnGroup";
import classes from "./LightIndex.module.css";
import Dclasses from "./DarkIndex.module.css";
import ThemeContext from "./store/ThemeContext";
function App() {
  const ctx = useContext(ThemeContext);
  const darkMode = ctx.darkMode;
  return (
    <div className={darkMode ? Dclasses.wrapper : classes.wrapper}>
      <h1 className={darkMode ? Dclasses.name : classes.name}>CALCULATOR</h1>
      <Calculator/>
      <IcnGroup />
    </div>
  );
}

export default App;
