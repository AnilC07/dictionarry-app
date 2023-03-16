import React, { createContext, useEffect, useState } from "react";

export const themes = {
  dark: "dark-content",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});

 const ThemeCtx = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add("dark-content");
        break;
      case themes.light:
        document.body.classList.remove("dark-content");
        break;
      default:
        console.log("default state");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeCtx