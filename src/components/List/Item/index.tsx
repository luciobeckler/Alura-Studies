import React from "react";
import styles from "./Item.module.scss";

export default function Item({
  tarefa,
  tempo,
}: {
  tarefa: string;
  tempo: string;
}) {
  console.log("Renderizando ITEM!!" + "tarefa:" + tarefa + " e tempo:" + tempo);
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
