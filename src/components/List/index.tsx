import React, { useState } from "react";
import styles from "./List.module.scss";
import Item from "./Item";

export default function List({ tarefas }: any) {
  return (
    <aside className={styles.listaTarefas}>
      <h2
        onClick={() => {
          tarefas = [
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "05:00:00" },
          ];
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item: any) => {
          console.log("Exibindo item:", item.tarefa + item.tempo); // Console.log dentro do mapeamento
          return <Item key={item.id} tarefa={item.tarefa} tempo={item.tempo} />;
        })}
      </ul>
    </aside>
  );
}
