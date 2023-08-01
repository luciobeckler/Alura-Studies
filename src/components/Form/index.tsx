import React, { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

type SetTarefas = React.Dispatch<React.SetStateAction<ITarefa[]>>;

interface FormProps {
  setTarefas: SetTarefas;
}

export default function Form({ setTarefas }: FormProps) {
  console.log("Renderizando FORM");
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00:00",
  });

  /* Atualiza tanto a tarefa quanto o tempo */
  const handleChange = (event: any) => {
    console.log("handleChange chamado");
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit chamado");
    event.preventDefault();

    const newTarefa: ITarefa = {
      tarefa: state.tarefa,
      tempo: state.tempo,
      selecionado: false,
      completado: false,
      id: uuidv4(),
    };

    setTarefas((tarefasAntigas) => [...tarefasAntigas, newTarefa]);

    setState({
      tarefa: "",
      tempo: "00:00:00",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.novaTarefa} action="">
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          placeholder="O que você quer estudar?"
          required
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          onChange={handleChange}
          value={state.tempo}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" texto="Adicionar" />
    </form>
  );
}
