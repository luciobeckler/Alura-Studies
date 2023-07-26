import React from "react";
import Button from "../Button";
import "./styles.scss";

export default function Form() {
  return (
    <form className="novaTarefa" action="">
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          placeholder="O que você quer estudar?"
          required
          name="tarefa"
          id="tarefa"
        />
      </div>
      <div className="inputContainer">
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
      <Button />
    </form>
  );
}
