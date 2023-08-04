import React, { useContext } from 'react'
import classes from "../LightIndex.module.css";
import Dclasses from "../DarkIndex.module.css";
import ThemeContext from '../store/ThemeContext';
const BtnGroup = ({icon,fun}) => {
  const ctx = useContext(ThemeContext)
  const darkMode = ctx.darkMode
  return (
    <div className={darkMode?Dclasses.btnbg:classes.btnbg} onClick={fun}>
      {icon}
    </div>
  )
}

export default BtnGroup
