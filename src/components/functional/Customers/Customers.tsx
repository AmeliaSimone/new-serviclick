import React from 'react'

import styles from "./Customers.module.scss"

import { Logo, LogoSm } from '@/components/ui/Logo';
import Title from '@/components/ui/Title';

const Customers = () => {
  return (
    <div className={styles.customers}>
       <Title title='Empresas que confían en nosotros ' color='#03495C' fontSize='32px' />
       <div className={styles.rowOne}>
    <Logo img='/img/customers/ripley.png' width='' height='' />
    <LogoSm img='/img/customers/ripley.png' width='' height='' />

    <Logo img='/img/customers/bci.png' width='' height='' />
    <LogoSm img='/img/customers/bci.png' width='' height='' />

    <Logo img='/img/customers/consorcio.png' width='' height='' />
    <LogoSm img='/img/customers/consorcio.png' width='' height='' />

    <Logo img='/img/customers/sura.png' width='' height='' />
    <LogoSm img='/img/customers/sura.png' width='' height='' />
    </div>
    <div  className={styles.rowTwo}>
    <Logo img='/img/customers/scotiabank.png' width='' height='' />
    <LogoSm img='/img/customers/scotiabank.png' width='' height='' />

    <Logo img='/img/customers/cardif.png' width='' height='' />
    <LogoSm img='/img/customers/cardif.png' width='' height='' />

    <Logo img='/img/customers/coaniquem.png' width='' height='' />
    <LogoSm img='/img/customers/coaniquem.png' width='' height='' />

    <Logo img='/img/customers/prosegur.png' width='' height='' />
    <LogoSm img='/img/customers/prosegur.png' width='' height='' />
   
    </div>
    <div className={styles.rowThree}>
    <Logo img='/img/customers/multihogar.png' width='' height='' />
    <LogoSm img='/img/customers/multihogar.png' width='' height='' />

    <Logo img='/img/customers/heroes.png' width='' height='' />
    <LogoSm img='/img/customers/heroes.png' width='' height='' />

    <Logo img='/img/customers/vspt.png' width='' height='' />
    <LogoSm img='/img/customers/vspt.png' width='' height='' />

    <Logo img='/img/customers/hotel.png' width='' height='' />
    <LogoSm img='/img/customers/hotel.png' width='' height='' />
   
    
    </div>


    </div>
  );
};

export default Customers;