//import hook
import React, { useState } from "react";

////import components
import Card from "../Card/index";
import Data from "../../Data";

//import style
import styles from "./style.module.css";

function index() {
  const [active, setActive] = useState("firstCard");
  return (
    <div className={styles.container}>
      <nav className={styles.btnGroup}>
        <button
          className={styles.button}
          onClick={() => setActive("firstCard")}
        >
          KAYAKING
        </button>
        <button
          className={styles.button}
          onClick={() => setActive("secondCard")}
        >
          CAMPING
        </button>
      </nav>
      <div>
        {active === "firstCard" && <Card data={Data} cardIndex={0} />}
        {active === "secondCard" && <Card data={Data} cardIndex={1} />}
      </div>
    </div>
  );
}

export default index;
