import React from "react";

// import play from "../img/controller-play.svg";

import classes from "./Word.module.css";

const Word = (props) => {
  console.log(props);

  const launchAudio = () => {};

  return (
    <section className={classes.section__word}>
      {props.datas.length > 0 ? (
        <>
            <div>
                  <h1 className={classes.word}>{props.datas[0].word}</h1>
                  <h3 className={classes.phonetic}>{props.datas[0].phonetic}</h3>

                </div>
                <div className={classes.sound} onClick={launchAudio}>
                  {/* <img src={play} alt="play icon" /> */}
                  {/* <audio controls src={props.datas[0].phonetics[1].audio} /> */}
                </div>
        </>
      ) : (
        <div>
          <h1 className={classes.word}>???</h1>
          <h3 className={classes.phonetic}>???</h3>
        </div>
      )}
    </section>
  );
};

export default Word;
