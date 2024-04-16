import React from "react";

import styles from "./Hero.module.scss";

import Wallpaper from "@/components/ui/Wallpaper";
import Logo from "@/components/ui/Logo";
import Message from "@/components/ui/Message";
import HamburgerMenu from "@/components/ui/HamburgerMenu/HamburgerMenu";

const Hero = () => {
  return (
    <Wallpaper backgroundImage="/img/hero/banner.png" width="1288" height="750">
      <div className={styles.nav}>
        <Logo width="252px" height="53px" />
        <HamburgerMenu />
      </div>

      <Message />
    </Wallpaper>
  );
};

export default Hero;
