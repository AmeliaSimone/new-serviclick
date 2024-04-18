import React from "react";

import styles from "./Contact.module.scss";

import { Text, TextStart } from "@/components/ui/Text";
import { Logo, LogoSm } from "@/components/ui/Logo";

interface IContact {
  img: string;
}
const Contact = ({ img }: IContact) => {
  return (
    <div className={styles.contact}>
      <div className={styles.text}>
        <TextStart text="Contacto" fontSize="26px" color="" />
        <TextStart text="6000860580" fontSize="18px"  color=""/>
        <TextStart text="comercial@serviclick.cl" fontSize="18px"  color=""/>
        <TextStart text="Huérfanos 669, piso 7" fontSize="18px" color="" />
        <div className={styles.rrss}>
          <Logo img="/img/contact/insta.png" width="" height="" />
          <LogoSm img="/img/contact/insta.png" width="" height="" />

          <Logo img="/img/contact/fb.png" width="" height="" />
          <LogoSm img="/img/contact/fb.png" width="" height="" />

          <Logo img="/img/contact/linkedin.png" width="" height="" />
          <LogoSm img="/img/contact/linkedin.png" width="" height="" />
  
        </div>
      </div>

      <div className={styles.img}>
        <img className={styles.img} src={`${img}`} alt="" />
      </div>
    </div>
  );
};

export default Contact;
