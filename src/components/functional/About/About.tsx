import React from "react";

import styles from "./About.module.scss";
import Text from "@/components/ui/Text/Text";
import Title from "@/components/ui/Title/Title";

const About = () => {
  return (
    <div className={styles.about}>
      <Title color="#03495C" fontSize="32px" title="¿Qué hacemos?"/>
      <Text
        text="Somos una Compañía especialista en protección, enfocados en resolver todas las necesidades que ayuden a mejorar la vida de tus clientes, de forma accesible, eficiente y dinámica. "
      />

    </div>
  );
};

export default About;
