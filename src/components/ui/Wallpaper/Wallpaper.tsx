import React from "react";
import styles from "./Wallpaper.module.scss";

const Wallpaper = ({ backgroundVideo, width, height, children }: any) => {
  return (
    <div className={styles.wallpaper}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: `calc(100vw * ${height} / ${width})`,
          objectFit: "cover",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default Wallpaper;
