import React from "react";
import ListHeading from "./ListHeading";

import classes from "./Source.module.css";

const Source = (props) => {
  console.log(props.datas[0].sourceUrls[0]);

  return (
    <div className={classes.source}>
      <ListHeading>Source : </ListHeading>
      {props.datas.length > 0 ? (
        <a href={props.datas[0].sourceUrls[0]}>
          {props.datas[0].sourceUrls[0]}
        </a>
      ):(<a href={props.datas[0].sourceUrls[0]}>
          {props.datas[0].sourceUrls[0]}
        </a>)}
    </div>
  );
};

export default Source;
