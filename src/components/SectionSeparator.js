import React from "react";

import classes from "./SectionSeparator.module.css";

const SectionSeparator = (props) => {
  console.log(props)
  return (
    <div className={classes.separator}>
      {props.datas.length > 0 ? (
        <>
          <h4>name</h4> <span className={classes.trait}></span>
        </>
      ) : (
        <>
          <h4>name</h4> <span className={classes.trait}></span>
        </>
      )}
    </div>
  );
};

export default SectionSeparator;
