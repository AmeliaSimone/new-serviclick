import React, { useState } from "react";

import styles from "./Menu.module.scss";
import Icon from "../Icon";


const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
      <Icon icon="menu"  color="#ffffff"></Icon>
      </div>
      <ul className={isMobileMenuOpen ? styles.menuItemsOpen : styles.menuItems}>
        <li>Novedades</li>
        <li>Servicios</li>
        <li>Sobre Nosotros</li>
        <li>Ubicación</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Menu;
