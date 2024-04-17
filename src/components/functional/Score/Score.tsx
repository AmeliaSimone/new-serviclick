import React from "react";

import styles from "./Score.module.scss";
import CardScore from "@/components/ui/CardScore";
const Score = () => {
  return (
    <div className={styles.background}>
      <div className={styles.score}>
        <CardScore title="+22 " text="Años de Experiencia"></CardScore>
        <CardScore title="+900M" text="Clientes Finales"></CardScore>
        <CardScore title="+20" text="Alianzas y Clientes"></CardScore>
        <CardScore title="24hrs" text="Presentes en todo Chile"></CardScore>
      </div>
    </div>
  );
};

export default Score;
