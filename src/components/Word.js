import React from "react";

import classes from "./Word.module.css";

const Word = (props) => {
  return (
    <section className={classes.section__word}>
      {props.datas.length > 0 ? (
        <>
          <div>
            <h1 className={classes.word}>{props.datas[0].word}</h1>
            <h3 className={classes.phonetic}>{props.datas[0].phonetic}</h3>
          </div>
          <div className={classes.sound}>
            <audio controls src={props.datas[0].phonetics[0].audio} />
            {props.datas[0].phonetics[0].audio === "" && (
              <div className={classes.error}>
                <p className={classes.noAudio}>Audio unavailable.</p>{" "}
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Word;
