import React from 'react'

import styles from "./New.module.scss"
import Title from '@/components/ui/Title';

import withScrollAnimation from "@/components/ui/Framer";


interface INew {img: string; img2: string; img3: string; height: string; height2: string; height3: string; width: string; width2: string; width3: string;}
const New = ({img, img2, img3, height, height2, height3, width, width2, width3}:INew) => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    <div className={styles.new}  id="novedades">
      <AnimateDiv>
    <Title title='Novedades' color='#03495C' size= "large" />
    </AnimateDiv>
    <AnimateDiv>
    <div className={styles.imgContainer}>
    <img
        src={`${img}`}
        className={styles.img}
        style={{
          width: "100%",
          height: `calc(100vw * ${height} / ${width})`,
        }}
      />
       <img
        src={`${img2}`}
        className={styles.img}
        style={{
          width: "100%",
          height: `calc(100vw * ${height2} / ${width2})`,
        }}
      />
       <img
        src={`${img3}`}
        className={styles.img}
        style={{
          width: "100%",
          height: `calc(100vw * ${height3} / ${width3})`,
        }}
      />

    </div></AnimateDiv>
    </div>
  );
};

export default New;