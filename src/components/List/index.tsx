import React from "react";
import styles from "./List.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

interface ListProps {
  tarefas: ITarefa[];
  handleTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function List({ tarefas, handleTarefa }: ListProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item: ITarefa) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              tarefa={item.tarefa}
              tempo={item.tempo}
              selecionado={item.selecionado}
              completado={item.completado}
              handleTarefa={handleTarefa}
            />
          );
        })}
      </ul>
    </aside>
  );
}
