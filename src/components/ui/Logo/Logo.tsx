import React from "react";

import styles from "./Logo.module.scss";

interface Ilogo {
  width: string;
  height: string;
  img: string;
}
const Logo = ({ width, height, img }: Ilogo) => {
  return (
    <img
      className={styles.logo}
      style={{ width, height }}
      src={`${img}`}
      alt=""
    />
  );
};

const LogoSm = ({ width, height, img }: Ilogo) => {
  return (
    <img
      className={styles.logoSm}
      style={{ width, height }}
      src={`${img}`}
      alt=""
    />
  );
};

export { Logo, LogoSm };
