import React from "react";

import styles from "./AboutUs.module.scss";
import CardAboutUs from "@/components/ui/CardAboutUs";
import Title from "@/components/ui/Title";

const AboutUs = () => {
  return (
    <div className={styles.aboutus} id="sobre">
      <Title title="Quienes somos" size="medium" color="white" />
      <div className={styles.cards}>
        <CardAboutUs
          img="/img/aboutus/carlos.png"
          title="Carlos Molina "
          paragraph="CEO"
          width="150px"
          height="150px"
        />
        <CardAboutUs
          img="/img/aboutus/andrea.png"
          title="Andrea Hernández"
          paragraph="Gerente de Administración y Finanzas "
          width="150px"
          height="150px"
        />
        <CardAboutUs
          img="/img/aboutus/enzzo.png"
          title="Enzzo Molina"
          paragraph="Gerente de Operaciones "
          width="150px"
          height="150px"
        />
      </div>
    </div>
  );
};

export default AboutUs;
