import React from "react";
import styles from "./Button.module.scss";

export default function Button({ texto }: { texto: string }) {
  console.log("Renderizando BUTTON");
  return <button className={styles.botao}>{texto}</button>;
}
