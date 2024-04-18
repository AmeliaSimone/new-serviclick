import React from "react";

import styles from "./Footer.module.scss";
import { Text, TextStart } from "@/components/ui/Text";
import { Logo, LogoSm } from "@/components/ui/Logo";
import Title from "@/components/ui/Title";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.text}>
          <Title title="Términos y condiciones" fontSize="14px" color="white"></Title>
          <Title title="Trabaja con nosotros " fontSize="14px" color="white"></Title>
        </div>
        <div className={styles.text}>
          <Title title="Contacto Empresas " fontSize="14px" color="white"></Title>
          <Title title="Contacto Comercial " fontSize="14px" color="white"></Title>
        </div>
      </div>

      <div>
        <Logo img="/img/footer/logo.png" width="" height="" />
        <LogoSm img="/img/footer/logo.png" width="" height="" />
      </div>
    </div>
  );
};

export default Footer;
