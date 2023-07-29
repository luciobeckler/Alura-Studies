import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import { v4 as uuidv4 } from "uuid";
import StopWatch from "../components/StopWatch";

function App() {
  // Criando a array 'tarefas' com a interface 'Tarefa'
  let tarefas = [
    {
      id: uuidv4(),
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      id: uuidv4(),
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      id: uuidv4(),
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];

  return (
    <div className={style.AppStyle}>
      <Form />
      <StopWatch />
      <List tarefas={tarefas} />
    </div>
  );
}

export default App;
