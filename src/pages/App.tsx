import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import StopWatch from "../components/StopWatch";
import { ITarefa } from "../types/tarefa";

function App() {
  // Criando a array 'tarefas' com a interface 'Tarefa'
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function handleTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizaTarefa() {
    if (selecionado) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa; // Retorna a tarefa sem modificações caso não seja a tarefa selecionada
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <StopWatch selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
      <List handleTarefa={handleTarefa} tarefas={tarefas} />
    </div>
  );
}

export default App;
