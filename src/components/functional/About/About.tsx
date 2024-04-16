import React from "react";

import styles from "./About.module.scss";
import Text from "@/components/ui/Text/Text";

const About = () => {
  return (
    <div className={styles.about}>
      <Text
        title="¿Qué hacemos?"
        text="Somos una Compañía especialista en protección, enfocados en resolver todas las necesidades que ayuden a mejorar la vida de tus clientes, de forma accesible, eficiente y dinámica. "
      />
    </div>
  );
};

export default About;
