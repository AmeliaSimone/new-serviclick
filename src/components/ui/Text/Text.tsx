import React from "react";

import styles from "./Text.module.scss";
interface IText {
  title: string;
  text: string;
}
const Text = ({ title, text }: IText) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.textTitle}>{title}</h2>
      <p className={styles.textParagraph}>{text}</p>
    </div>
  );
};

export default Text;
