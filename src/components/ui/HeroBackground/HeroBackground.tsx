import React from "react";

import styles from "./HeroBackground.module.scss";

const HeroBackground = ({ children }: any) => {
  return <div className={styles.heroBackground}>{children}</div>;
};

export default HeroBackground;
