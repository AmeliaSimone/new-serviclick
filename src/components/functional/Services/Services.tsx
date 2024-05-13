import React from "react";

import styles from "./Services.module.scss";
import Title from "@/components/ui/Title";
import { TitleBackground } from "@/components/ui/TitleBackground/TitleBackground";
import CardServices from "@/components/ui/CardServices";
import { motion, useScroll } from "framer-motion";
import withScrollAnimation from "@/components/ui/Framer";
import Slider from "@/components/ui/Slider/Slider";

const Services = () => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    <motion.div
      id="servicios"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.services}
    >
      <AnimateDiv>
        <Title
          color="#03495c"
          size="large"
          title="Soluciones para tus clientes"
        />
        <a href="/servicios" className={styles.title} target="_blank"><TitleBackground 
          color="white"
          fontSize=""
          backgroundColor="#03495C"
          title="ENCUENTRA NUESTROS PRODUCTOS AQUÍ"
        /></a>
        
      </AnimateDiv>
      <AnimateDiv>
        <CardServices />
        <div className={styles.mobile}>
        <Slider>
        <img src="/img/services/serv1.png" alt="" />
        <img src="/img/services/serv2.png" alt="" />
        <img src="/img/services/serv3.png" alt="" />
        <img src="/img/services/serv4.png" alt="" />
        </Slider>
        <a href="/servicios" target="_blank"><TitleBackground 
          color="white"
          fontSize=""
          backgroundColor="#03495C"
          title="ENCUENTRA NUESTROS PRODUCTOS AQUÍ"
        /></a>
        </div>
     
        
      </AnimateDiv>
    </motion.div>
  );
};

export default Services;
