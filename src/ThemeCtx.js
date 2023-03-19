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


const express = require('express');
const fs = require('fs');

// Install it via npm : 'npm i morgan'
const morgan = require('morgan');

const app = express();

// Like body-parser
// Middleware show requests informations
app.use(morgan('dev'))
// Middleware body-parser
app.use(express.json());

// Example of middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 🐣');
  next();
});

// 3) ROUTES

app.route('/api/v1/tours')
  .get(handler)
  .post(handler);
app.route('/api/v1/tours/:id')
  .get(handler)
  .patch(handler)
  .delete(handler);

// Run server
const port = '3000';
app.listen(port, () => {
  console.log(`Server listenin on port port...`);
});