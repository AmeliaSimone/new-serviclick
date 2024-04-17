import React from "react";

import styles from "./AboutUs.module.scss";
import CardAboutUs from "@/components/ui/CardAboutUs";
import Title from "@/components/ui/Title";

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <Title title="Quienes somos" fontSize="32px" color="white" />
      <div className={styles.cards}>
        <CardAboutUs
          img="/img/aboutus/carlos.png"
          title="Carlos Molina "
          paragraph="CEO"
        />
        <CardAboutUs
          img="/img/aboutus/andrea.png"
          title="Andrea Hernández"
          paragraph="Gerente de Administración y Finanzas "
        />
        <CardAboutUs
          img="/img/aboutus/enzzo.png"
          title="Enzzo Molina"
          paragraph="Gerente de Operaciones "
        />
      </div>
    </div>
  );
};

export default AboutUs;
