import React from "react";
import styles from "./Item.module.scss";
import { ITarefa } from "../../../types/tarefa";

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
}: ITarefa) {
  console.table({ tarefa, tempo, selecionado, completado, id });
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
