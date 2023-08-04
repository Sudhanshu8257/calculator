import React, { useContext } from "react";
import BtnGroup from "./BtnGroup";
import classes from "../LightIndex.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import ThemeContext from "../store/ThemeContext";
const IcnGroup = () => {
  const ctx = useContext(ThemeContext);
  const toggleDarkMode = ctx.toggleDarkMode
  const darkMode = ctx.darkMode

  const handleMailClick = () => {
    const email = "lohanasudhanshu@example.com";
    const subject = "Hello";
    const body = "I would like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  const handletwitterClick = () => {
    window.open(
      "https://twitter.com/Sudhans83606527?t=64ov1uBDjxoloKgIPM_GSg&s=09",
      "_blank"
    );
  };

  const handlelinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/sudhanshu-lohana-b7834821b",
      "_blank"
    );
  };

  const handleGitClick = () => {
    window.open("https://github.com/Sudhanshu8257", "_blank");
  };
  return (
    <div className={classes.iconGroup}>
      <BtnGroup
        icon={
          !darkMode ? (
            <MdDarkMode className={classes.iconGroupIcn} />
          ) : (
            <MdLightMode className={classes.iconGroupIcn} />
          )
        }
        fun={toggleDarkMode}
      />
      <BtnGroup
        icon={<BsLinkedin className={classes.iconGroupIcn} />}
        fun={handlelinkedinClick}
      />
      <BtnGroup
        icon={<BsGithub className={classes.iconGroupIcn} />}
        fun={handleGitClick}
      />
      <BtnGroup
        icon={<BiLogoGmail className={classes.iconGroupIcn} />}
        fun={handleMailClick}
      />
      <BtnGroup
        icon={<BsTwitter className={classes.iconGroupIcn} />}
        fun={handletwitterClick}
      />
    </div>
  );
};

export default IcnGroup;
