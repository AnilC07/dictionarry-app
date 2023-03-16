import React, { useCallback, useContext, useEffect, useState } from "react";

import cls from "classnames";

import { themes, ThemeContext } from "../ThemeCtx";

import classes from "./Header.module.css";

import blackLogo from "../img/blackBook.svg";
import whiteLogo from "../img/whiteBook.svg";
import moon from "../img/moon.svg";
import sun from "../img/light-up.svg";

const Header = () => {
  // move indicator
  const [displayMode, setDisplayMode] = useState(false);
  // change background
  const [darkMode, setDarkMode] = useState(false);

  const context = useContext(ThemeContext);
  console.log({ context });

  const changeDisplayMode = useCallback(() => {
    setDarkMode(!darkMode);
    console.log(ThemeContext);
    context.changeTheme(darkMode ? themes.dark : themes.light);
  }, [darkMode, context]);

  useEffect(() => {
    changeDisplayMode();
  }, [displayMode]);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        {!darkMode ? (
          <img src={whiteLogo} alt="logo" />
        ) : (
          <img src={blackLogo} alt="logo" />
        )}
      </div>

      <div className={classes.daynight}>
        <div className={classes.sun}>
          <img src={sun} alt="sun" />
        </div>

        <div
          className={classes.btn}
          onClick={() => setDisplayMode(!displayMode)}
        >
          <div
            className={cls(classes.indicator, displayMode && classes.darkMode)}
          ></div>
        </div>

        <div className={classes.moon}>
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
