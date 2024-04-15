import React from "react";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>Novedades</li>
        <li>Servicios</li>
        <li>Sobre Nosotros </li>
        <li>Ubicación</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Menu;
