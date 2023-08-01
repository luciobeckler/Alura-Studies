import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";

export default function StopWatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button type="button" texto="Iniciar " />
    </div>
  );
}
