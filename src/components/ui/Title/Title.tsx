import React from 'react'

import styles from "./Title.module.scss"

interface ITitle {title: string; color: string; fontSize: string}
const Title = ({title, color, fontSize}: ITitle) => {
  return (
   
       <h2 className={styles.title} style={{color, fontSize}}>{title}</h2> 
    
  );
};

export default Title;