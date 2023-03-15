
import {useState } from "react";
import classes from "./App.module.css";
import Definition from "./components/Definition";

import Header from "./components/Header";
import Search from "./components/Search";
import SectionSeparator from "./components/SectionSeparator";

import Word from "./components/Word";

function App() {
  const [datas, setDatas] = useState([]);

  const launchRequest = (enteredWord) => {
    if (enteredWord !== '') {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`)
        .then((header) => header.json())
        .then((res) => {
          setDatas(res);
        });
    } else {
      console.log("no word");
    }
  };

  return (
        <div className={classes.main}>
          <Header />
          <Search launchReq={launchRequest} />
          <Word datas={datas} />
          <SectionSeparator datas={datas} />
          <Definition datas={datas} />
          <SectionSeparator datas={datas} />
          <Definition datas={datas} />
          <SectionSeparator />
          {/* <Source datas={datas}/> */}
        </div>
  );
}

export default App;
