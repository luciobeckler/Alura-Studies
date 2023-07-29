import React, { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.scss";

export default function Form() {
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

  return (
    <form className={styles.novaTarefa} action="">
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
      <Button texto="Adicionar" />
    </form>
  );
}
