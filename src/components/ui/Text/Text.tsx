import React from "react";

import styles from "./Text.module.scss";
interface IText {
  text: string;
}
const Text = ({text }: IText) => {
  return (
    <div className={styles.text}>
      <p className={styles.textParagraph}>{text}</p>
    </div>
  );
};

export default Text;
