import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ texto, type }: ButtonProps) {
  console.log("Renderizando BUTTON");
  return (
    <button type={type} className={styles.botao}>
      {texto}
    </button>
  );
}
