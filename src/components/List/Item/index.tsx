import React from "react";
import styles from "./Item.module.scss";
import { ITarefa } from "../../../types/tarefa";

interface ItemProps extends ITarefa {
  handleTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  handleTarefa,
}: ItemProps) {
  return (
    <li
      className={
        styles.item +
        (selecionado ? " " : " " + styles.itemSelecionado) +
        (completado ? " " + styles.itemCompletado : " ")
      }
      onClick={() => {
        if (completado === false) {
          handleTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
          });
        }
      }}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span
          className={styles.concluido}
          aria-label="tarefa completada"
        ></span>
      )}
    </li>
  );
}
