import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ texto, type, onClick }: ButtonProps) {
  console.log("Renderizando BUTTON");
  return (
    <button onClick={onClick} type={type} className={styles.botao}>
      {texto}
    </button>
  );
}
