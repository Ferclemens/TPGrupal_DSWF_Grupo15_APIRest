import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
  return (
    <div className={styles.container}>
      <h5 className={styles.textDescription}>
        No se encuentra la página - URL inválida
      </h5>
      <img className={styles.emogi} src="src/assets/404_rick.png" />
      <Link className={styles.link} to="/">
        Volver
      </Link>
    </div>
  );
}

export default Error;
