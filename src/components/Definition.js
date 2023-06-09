import React from "react";

import classes from "./Definition.module.css";
import ListHeading from "./ListHeading";

const Definition = (props) => {
  console.log(props);
  return (
    <section className="meanings">
      {props.datas.length > 0 ? (
        <>
          <div className={classes.meaning}>
            <ListHeading>Meaning : </ListHeading>
            <ul className={classes.list}>
              {props.datas[0].meanings[0].definitions.map((el, idx) => {
                return (
                  <li key={idx} className={classes.item}>
                    {el.definition}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={classes.synonyms}>
            <ListHeading>Synonym : </ListHeading>
            <ul className={classes.synonyms_list}>
              {props.datas[0].meanings[0].synonyms.map((el, idx) => {
                return (
                  <li key={idx} className={classes.item}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className={classes.meaning}>
            <ListHeading>Meaning : </ListHeading>
          </div> 
          <div className={classes.synonyms}>
            <ListHeading>Synonym : </ListHeading>
          </div>
        </>
      )}
    </section>
  );
};

export default Definition;
