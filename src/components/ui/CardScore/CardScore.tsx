import React from 'react'

import styles from "./CardScore.module.scss"

interface ICardScore {width: string, height: string, img: string; title: string; text:string; }

const CardScore = ({width, height, img, title, text}:ICardScore) => {
  return (
    <div className={styles.cardScore}>
        <img className={styles.cardImage} style={{width, height}} src={`${img}`} alt="" />
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default CardScore;