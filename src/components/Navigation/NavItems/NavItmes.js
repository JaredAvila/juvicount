import React from "react";
import NavItem from "./NavItem/NavItem";

import * as styles from "./NavItmes.module.css";

const NavItmes = props => {
  return (
    <ul className={styles.NavItmes} onClick={props.clicked}>
      <NavItem link="/">Login</NavItem>
      <NavItem link="/register">Register</NavItem>
      <NavItem link="/wallet">Wallet</NavItem>
    </ul>
  );
};

export default NavItmes;
