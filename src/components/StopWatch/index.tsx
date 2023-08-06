import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";
import { timeToSeconds } from "../../common/utils/dateTime";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface StopWatchProps {
  selecionado: ITarefa | undefined;
}

export default function StopWatch({ selecionado }: StopWatchProps) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(timeToSeconds(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button type="button" texto="Iniciar " />
    </div>
  );
}
