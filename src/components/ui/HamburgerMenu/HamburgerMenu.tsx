

// components/HamburgerMenu.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.menu} ref={menuRef}>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
       <li><a href="#" >Novedades</a></li>
        <li><a href="#" >Servicios</a></li>
        <li><a href="#" >Sobre Nosotros </a></li>
        <li><a href="#" >Ubicación</a></li>
        <li><a href="#" >Contacto</a></li>
      </ul>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default HamburgerMenu;
