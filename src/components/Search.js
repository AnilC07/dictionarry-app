import React, { useRef, useState } from "react";

import classes from "./Search.module.css";

import search from "../img/magnifying-glass.svg";

const Search = ({ launchReq }) => {
  const word = useRef();
  const [emptyWord, setEmptyWord] = useState(false);

  const getWord = (e) => {
    e.preventDefault();

    if (word.current.value === "") {
      setEmptyWord(true);
    } else {
      setEmptyWord(false);
    }
    launchReq(word.current.value);
  };

  return (
    <>
      <form className={classes.form} onSubmit={getWord}>
        <input
          className={classes.form__input}
          ref={word}
          type="text"
          placeholder="Your word here"
        />
        <button className={classes.search}>
          <img src={search} alt="Search icon" />
        </button>
      </form>
      {emptyWord && (
        <div className={classes.error}>
          <p className={classes.error_text}>
            Please enter a valid word. Only available for US words. Thank you.
          </p>
        </div>
      )}
    </>
  );
};

export default Search;
