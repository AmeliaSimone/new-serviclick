import React from "react";

import styles from "./Wallpaper.module.scss";

const Wallpaper = ({ backgroundImage, width, height, children }: any) => {
  return (
    <div
      className={styles.wallpaper}
      style={{
        backgroundImage:`url(${backgroundImage})` ,
        height: `calc(100vw * ${height} / ${width})`,
      }}>
      {children}
    </div>
  );
};

export default Wallpaper;
