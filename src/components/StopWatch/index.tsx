import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";
import { timeToSeconds } from "../../common/utils/dateTime";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface StopWatchProps {
  selecionado: ITarefa | undefined;
  finalizaTarefa: () => void;
}

export default function StopWatch({
  selecionado,
  finalizaTarefa,
}: StopWatchProps) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(timeToSeconds(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      } else finalizaTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button
        onClick={() => regressiva(tempo)}
        type="button"
        texto="Iniciar "
      />
    </div>
  );
}
