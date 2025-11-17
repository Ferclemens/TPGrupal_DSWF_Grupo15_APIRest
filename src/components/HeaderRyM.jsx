import React from "react";
import styles from "./HeaderRyM.module.css";
import Logo from "../assets/Rick-and-Morty1.png";
import { Link } from "react-router-dom";

function HeaderRyM() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.image} src={Logo}></img>
      </Link>
    </div>
  );
}

export default HeaderRyM;
