import React from "react";

import styles from "./Hero.module.scss";

import HeroBackground from "@/components/ui/HeroBackground";
import Logo from "@/components/ui/Logo";
import Message from "@/components/ui/Message";
import HamburgerMenu from "@/components/ui/HamburgerMenu/HamburgerMenu";

const Hero = () => {
  return (
    <HeroBackground>
      <div className={styles.nav}>
        <Logo width="252px" height="53px" />
        <HamburgerMenu />
      </div>

      <Message />
    </HeroBackground>
  );
};

export default Hero;
