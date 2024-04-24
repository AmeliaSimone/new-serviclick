import React from "react";

import styles from "./New.module.scss";

import Title from "@/components/ui/Title";

import withScrollAnimation from "@/components/ui/Framer";

interface INew {
  img: string;
  img2: string;
  img3: string;
}
const New = ({ img, img2, img3 }: INew) => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    <div className={styles.new} id="novedades">
      <AnimateDiv>
        <Title title="Novedades" color="#03495C" size="large" />
      </AnimateDiv>

      <div className={styles.imgContainer}>
        <img src={`${img}`} className={styles.img} />
        <img src={`${img2}`} className={styles.img} />
        <img src={`${img3}`} className={styles.img} />
      </div>
    </div>
  );
};

export default New;
