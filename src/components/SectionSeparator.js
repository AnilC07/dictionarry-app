import React from "react";

import classes from "./SectionSeparator.module.css";

const SectionSeparator = (props) => {
  return (
    <div className={classes.separator}>
      {props.datas.length > 0 ? (
        <>
          <h4>{props.datas[0].meanings[0].partOfSpeech}</h4> <span className={classes.trait}></span>
        </>
      ) : (
        <>
          <span className={classes.trait}></span>
        </>
      )}
    </div>
  );
};

export default SectionSeparator;
