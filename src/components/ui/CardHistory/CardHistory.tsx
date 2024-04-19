import React from "react";

import styles from "./CardHistory.module.scss";

interface ICardHistory {
  backgroundImage: string;
  children: React.ReactNode;
}
const CardHistory: React.FC<ICardHistory> = ({ backgroundImage, children }) => {
  return (
    <div
      className={styles.cardHistory}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CardHistory;
