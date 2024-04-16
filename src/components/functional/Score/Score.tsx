import React from 'react'

import styles from "./Score.module.scss"
import CardScore from '@/components/ui/CardScore';

const Score = () => {
  return (
    <div className={styles.score}>
      <CardScore img='./img/score/star.png' width='65px' height='65px' title='+22 ' text='Años de Experiencia'></CardScore>
      <CardScore img='./img/score/people.png' width='63px' height='55px' title='+900M' text='Clientes Finales'></CardScore>
      <CardScore img='./img/score/hands.png' width='65px' height='65px' title='+20' text='Alianzas y Clientes'></CardScore>
      <CardScore img='./img/score/clock.png' width='56px' height='53px' title='24hrs' text='Presentes en todo Chile'></CardScore>
    </div>
    
   
  );
};

export default Score;