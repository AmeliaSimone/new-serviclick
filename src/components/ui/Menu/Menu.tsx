import React, { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import Icon from "../Icon";

const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para manejar el estado del menú en pantallas pequeñas
  const handleResize = () => {
    if (window.innerWidth <= 768) { // Tamaño de pantalla pequeña (ejemplo: 768px)
      setMobileMenuOpen(true); // Abrir el menú automáticamente en pantallas pequeñas
    } else {
      setMobileMenuOpen(false);
    }
  };

  // Al montar el componente, verificamos el tamaño de la pantalla inicial
  useEffect(() => {
    handleResize();
    // Agregamos el event listener para cambiar el estado del menú cuando el tamaño de la pantalla cambie
    window.addEventListener("resize", handleResize);
    // Limpiamos el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para alternar el estado del menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        <Icon icon="menu" color="#ffffff" />
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
