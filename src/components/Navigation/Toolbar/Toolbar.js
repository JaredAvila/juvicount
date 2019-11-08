import React from "react";
import NavItems from "../NavItems/NavItmes";

import * as styles from "./Toolbar.module.css";

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <h1>Juvicount</h1>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
