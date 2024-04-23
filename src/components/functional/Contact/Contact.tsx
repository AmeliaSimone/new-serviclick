import React from "react";

import styles from "./Contact.module.scss";

import { Text, TextStart } from "@/components/ui/Text";
import  Logo from "@/components/ui/Logo";

interface IContact {
  img: string;
  width: string;
  height: string;
}
const Contact = ({ img, width, height }: IContact) => {
  return (
    <div className={styles.contact} id="ubicacion">
      <div className={styles.text}>
        <TextStart text="Contacto" fontSize="20px" color="" />
        <TextStart text="6000860580" fontSize=""  color=""/>
        <TextStart text="comercial@serviclick.cl" fontSize=""  color=""/>
        <TextStart text="Huérfanos 669, piso 7" fontSize="" color="" />
        <div className={styles.rrss}>
          <Logo img="/img/contact/insta.png" width="38px" height="27px" thirdImg="/img/contact/insta.png" thirdImgHeight="27px" thirdImgWidth="38px"/>
         

          <Logo img="/img/contact/fb.png" width="38px" height="27px" thirdImg="/img/contact/fb.png" thirdImgHeight="27px" thirdImgWidth="38px" />
        

          <Logo img="/img/contact/linkedin.png" width="38px" height="27px" thirdImg="/img/contact/linkedin.png" thirdImgHeight="27px" thirdImgWidth="38px"/>
          
  
        </div>
      </div>

      <div className={styles.img}>
        <img className={styles.img} src={`${img}`} style={{
          width: "100%",
          height: `calc(100vw * ${height} / ${width})`,
        }} alt="" />
      </div>
    </div>
  );
};

export default Contact;
