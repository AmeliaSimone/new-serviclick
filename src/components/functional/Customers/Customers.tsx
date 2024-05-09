import React from "react";

import styles from "./Customers.module.scss";

import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";
import withScrollAnimation from "@/components/ui/Framer";

import Slider from "@/components/ui/Slider/Slider";

const images = [
  "/img/customers/ripley.png",
  "/img/customers/bci.png",
  "/img/customers/consorcio.png",
  "/img/customers/sura.png",
  "/img/customers/scotiabank.png",
  "/img/customers/cardif.png",
  "/img/customers/coaniquem.png",
  "/img/customers/prosegur.png",
  "/img/customers/multihogar.png",
  "/img/customers/heroes.png",
  "/img/customers/vspt.png",
  "/img/customers/hotel.png",
  
];

const Customers = () => {
  const AnimateDiv = withScrollAnimation("div");
  const AnimatedSlider = withScrollAnimation("Slider");

  return (
    <AnimateDiv>
      <AnimatedSlider>
      
      <div className={styles.customers}>
      <h2>Empresas que confían en nosotros </h2>
<Slider images={images} />
      </div>
      </AnimatedSlider>
    </AnimateDiv>
  );
};

export default Customers;
