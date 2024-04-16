import React from "react";

import styles from "./Hero.module.scss";

import Wallpaper from "@/components/ui/Wallpaper";
import { Logo, LogoSm } from "@/components/ui/Logo";
import Message from "@/components/ui/Message";
import Menu from "@/components/ui/Menu/Menu";

const Hero = () => {
  const videoPath = "/img/hero/video.mp4";
  return (
    <Wallpaper backgroundVideo={videoPath} width={1620} height={600}>
      <div className={styles.nav}>
        <Logo width="214px" height="31px" img="/img/hero/logo.png" />
        <LogoSm width="41px" height="31px" img="/img/hero/logoSM.png" />
        <Menu />
      </div>
      <Message />
    </Wallpaper>
  );
};

export default Hero;
