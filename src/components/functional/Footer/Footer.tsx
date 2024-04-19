import React from "react";

import styles from "./Footer.module.scss";
import { Text, TextStart } from "@/components/ui/Text";
import  Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.text}>
          <Title title="Términos y condiciones" size="small" color="white"></Title>
          <Title title="Trabaja con nosotros " size="small" color="white"></Title>
        </div>
        <div className={styles.text}>
          <Title title="Contacto Empresas "  size="small" color="white"></Title>
          <Title title="Contacto Comercial "  size="small" color="white"></Title>
        </div>
      </div>

      <div>
        <Logo img="/img/footer/logo.png" width="252px" height="53px" thirdImg="/img/footer/logo.png" thirdImgHeight="53px"  thirdImgWidth="252px"/>
       
      </div>
    </div>
  );
};

export default Footer;
