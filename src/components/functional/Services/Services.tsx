import React from 'react'

import styles from "./Services.module.scss"
import Title from '@/components/ui/Title'
import TitleBackground from '@/components/ui/TitleBackground';
import CardServices from '@/components/ui/CardServices';




const Services = () => {
  return (
    <div className={styles.services}>
      <Title color='#03495c'fontSize='32px' title='Soluciones para tus clientes'/>
      <TitleBackground color='white' fontSize='24px' backgroundColor='#03495C' title='ENCUENTRA NUESTROS PRODUCTOS AQUÍ'/>
      <CardServices  />
    </div>
  );
};

export default Services;