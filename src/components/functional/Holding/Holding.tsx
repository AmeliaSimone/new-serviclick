import React from 'react'

import styles from "./Holding.module.scss"

import { Logo, LogoSm } from '@/components/ui/Logo';


const Holding = () => {
  return (
   
    <div className={styles.holding}>
    <div className={styles.rowOne}>
    <Logo img='/img/holding/empresa.png' width='' height='' />
    <LogoSm img='/img/holding/empresa.png' width='' height='' />
    </div>
    <div  className={styles.rowTwo}>
    <Logo img='/img/holding/mhm.png' width='' height='' />
    <LogoSm img='/img/holding/mhm.png' width='' height='' />
    <Logo img='/img/holding/serviclick.png' width='' height='' />
    <LogoSm img='/img/holding/serviclick.png' width='' height='' />
    </div>
    <div className={styles.rowThree}>
    <Logo img='/img/holding/trade.png' width='' height='' />
    <LogoSm img='/img/holding/trade.png' width='' height='' />
    <Logo img='/img/holding/assist.png' width='' height='' />
    <LogoSm img='/img/holding/assist.png' width='' height='' />
    <Logo img='/img/holding/call.png' width='' height='' />
    <LogoSm img='/img/holding/call.png' width='' height='' />
    <Logo img='/img/holding/defensa.png' width='' height='' />
    <LogoSm img='/img/holding/defensa.png' width='' height='' />
    </div>
    </div>

  );
};

export default Holding;