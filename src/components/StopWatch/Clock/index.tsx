import React from "react";
import style from "./Clock.module.scss";

interface ClockProps {
  tempo: number | undefined;
}

export default function Clock({ tempo = 0 }: ClockProps) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutosDezena = 0, minutosUnidade = 0] = String(minutos).padStart(
    2,
    "0"
  );

  const [segundosDezena = 0, segundosUnidade = 0] = String(segundos).padStart(
    2,
    "0"
  );

  return (
    <>
      <span className={style.relogioNumero}>{minutosDezena}</span>
      <span className={style.relogioNumero}>{minutosUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundosDezena}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  );
}
