import React from "react";
import Button from "../Button";
import styles from "./Form.module.scss";

export default function Form() {
  console.log("Renderizando FORM");

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
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor=""></label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button texto="Adicionar" />
    </form>
  );
}
