import React from "react";

import styles from "./Hero.module.scss";

import Logo from "@/components/ui/Logo";
import Message from "@/components/ui/Message";
import Menu from "@/components/ui/Menu/Menu";
import WallpaperVideo from "@/components/ui/WallpaperVideo/WallpaperVideo";

const Hero = () => {
  const videoPath = "/img/hero/video.mp4";
  return (
    <WallpaperVideo backgroundVideo={videoPath} width={1620} height={600}>
      <div className={styles.nav}>
        <Logo width="214px" height="31px" img="/img/hero/logo.png" secondImg="/img/hero/logosm.png" secondImgWidth="42px" secondImgHeight="42px" />
       
        <Menu />
      </div>
      <Message />
    </WallpaperVideo>
  );
};

export default Hero;
