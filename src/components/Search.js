import React, { useRef } from "react";

import classes from "./Search.module.css";

import search from "../img/magnifying-glass.svg";

const Search = ({ launchReq }) => {
  const word = useRef();

  const getWord = (e) => {
    e.preventDefault();
    launchReq(word.current.value);
  };

  return (
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
  );
};

export default Search;
