
import { useState, useEffect } from 'react';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define el ancho máximo para considerar dispositivos móviles
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isMobile) {
    return null; // No renderizar el menú hamburguesa si no es un dispositivo móvil
  }

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {isOpen && (
        <div className={styles.menu}>
          <ul>
          <li>Novedades</li>
            <li>Servicios</li>
            <li>Sobre Nosotros</li>
            <li>Ubicación</li>
            <li>Contacto</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

