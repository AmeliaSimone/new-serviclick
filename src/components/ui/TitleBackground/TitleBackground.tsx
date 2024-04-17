import React from 'react'

import styles from "./TitleBackground.module.scss"

interface ITitleBackground {title: string; backgroundColor: string; color: string; fontSize: string; }
const TitleBackground = ({title, backgroundColor, color, fontSize}: ITitleBackground ) => {
  return (
    <div >
        <h3 className={styles.titleBackground} style={{backgroundColor, color, fontSize}}>{title}</h3>
    </div>
  )
}

export default TitleBackground