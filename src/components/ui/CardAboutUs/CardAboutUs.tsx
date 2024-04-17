import React from "react";

import styles from "./CardAboutUs.module.scss";

interface ICardAboutUs {
  img: string;
  title: string;
  paragraph: string;
}
const CardAboutUs = ({ img, title, paragraph }: ICardAboutUs) => {
  return (
    <div className={styles.cardAboutUs}>
        <img className={styles.img} src={`${img}`} alt="" />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
  );
};

export default CardAboutUs;
