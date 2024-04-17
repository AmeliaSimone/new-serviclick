import React from 'react'

import styles from "./CardScore.module.scss"

interface ICardScore {title: string; text:string; }

const CardScore = ({title, text}:ICardScore) => {
  return (
    <div className={styles.cardScore}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default CardScore;