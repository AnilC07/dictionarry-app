import React, { useState } from "react";

import cls from "classnames";


import classes from "./Header.module.css";

import logo from "../img/book.svg";
import moon from "../img/moon.svg";
import sun from "../img/light-up.svg";

const Header = () => {
  const [displayMode, setDisplayMode] = useState(false)

 const setDisplay = () => {
   setDisplayMode(!displayMode)
  }


  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={classes.daynight}>
        <div className={classes.sun}>
          <img src={sun} alt="sun" />
        </div>

        <div className={classes.btn}  onClick={setDisplay}>
          <div className={cls(classes.indicator, displayMode && classes.darkMode)}></div>
        </div>
        <div className={classes.moon}>
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
