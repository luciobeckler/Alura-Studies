import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import StopWatch from "../components/StopWatch";
import { ITarefa } from "../types/tarefa";

function App() {
  // Criando a array 'tarefas' com a interface 'Tarefa'
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <StopWatch />
      <List tarefas={tarefas} />
    </div>
  );
}

export default App;
