import React from "react";

import classes from "./Definition.module.css";
import ListHeading from "./ListHeading";


const Definition = (props) => {
  return (
    <section className="meanings">
    {props.datas.length > 0 ?
      (<><div className={classes.meaning}>
        <ListHeading>Meaning : </ListHeading>
        <ul className={classes.list}>
          <li className={classes.item}>ABC</li>
          <li className={classes.item}>123</li>
          <li className={classes.item}>Lorem ipsum</li>
        </ul>
      </div>
      <div className={classes.synonyms}>
        <ListHeading>Synonym : </ListHeading>
        <ul className={classes.synonym_list}>
          <li className={classes.synonym_item}>coucou</li>
          <li className={classes.synonym_item}>coucou 35698</li>
        </ul>
      </div></>):(<><div className={classes.meaning}>
        <ListHeading>Meaning : </ListHeading>
        <ul className={classes.list}>
          <li className={classes.item}>???</li>  
        </ul>
      </div>
      <div className={classes.synonyms}>
        <ListHeading>Synonym : </ListHeading>
        <ul className={classes.synonym_list}>
          <li className={classes.synonym_item}>???</li>
        </ul>
      </div></>)}
    </section>
  );
};

export default Definition;
