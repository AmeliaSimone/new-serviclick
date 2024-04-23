import React, { useState } from "react";
import styles from "./CardHistory.module.scss";

interface ICardHistory {
  backgroundImage: string;
  backgroundColorBack: string;
  childrenFront: React.ReactNode;
  childrenBack: React.ReactNode;
}

const CardHistory: React.FC<ICardHistory> = ({
  backgroundImage,

  childrenFront,
  childrenBack,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={styles.cardHistory}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={styles.content}>
        {isHovered ? (
          <div className={styles.backContent}>{childrenBack}</div>
        ) : (
          childrenFront
        )}
      </div>
    </div>
  );
};

export default CardHistory;
