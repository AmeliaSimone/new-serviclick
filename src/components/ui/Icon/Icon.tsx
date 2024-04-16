import React from 'react'
import styles from "./Icon.module.scss"
interface IIcon{icon: string; color:string }

const Icon = ({icon, color}:IIcon) => {
  return (
    <div className={styles.icon}>
    <span className="material-symbols-outlined"  style={{color}}>{icon}</span>
    </div>
  );
};

export default Icon;