import React from "react";
import styles from "./Card.module.css";

function Card404() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Personaje no encotrado</h2>
      <h2 className={styles.title}>Pruebe buscar otro personaje</h2>
    </div>
  );
}

export default Card404;
