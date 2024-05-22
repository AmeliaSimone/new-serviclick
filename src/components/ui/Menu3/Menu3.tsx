import React, { useState, useEffect } from "react";

import { useRouter } from 'next/router';
import styles from "./Menu.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import Search from "../Search/Search";
import withScrollAnimation from "@/components/ui/Framer";
import Icon from "../Icon";

const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      // setMobileMenuOpen(true);
    } else {
      // setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (
    sectionId: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  const router = useRouter();
  const { pathname } = router;

  const AnimateDiv = withScrollAnimation("div");

  return (
    <div className={`${styles.menu} ${isMobileMenuOpen ? styles.mobileMenu : ""}`}>
      <AnimateDiv>
        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
             <div className={styles.closeIcon} onClick={toggleMobileMenu}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
             >
               <path
                 fill="#000000"
                 d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
               />
             </svg>
           </div>
          ) : (
            <Icon icon="menu" color="#ffffff" />
          )}
        </div>
      </AnimateDiv>
{pathname !== "/servicios" && 
      <ul
        className={`${styles.menuItems} ${isMobileMenuOpen ? styles.menuItemsOpen : ""}`}
      >
        <AnimateDiv>
          <li>
            <a onClick={(e) => handleLinkClick("novedades", e)} href="#novedades">
              Novedades
            </a>
          </li>
        </AnimateDiv>
        <AnimateDiv>
          <li>
            <a onClick={(e) => handleLinkClick("servicios", e)} href="#servicios">
              Servicios
            </a>
          </li>
        </AnimateDiv>
        <AnimateDiv>
          <li>
            <a onClick={(e) => handleLinkClick("sobre", e)} href="#sobre">
              Sobre Nosotros
            </a>
          </li>
        </AnimateDiv>
        <AnimateDiv>
          <li>
            <a onClick={(e) => handleLinkClick("ubicacion", e)} href="#ubicacion">
              Ubicación
            </a>
          </li>
        </AnimateDiv>
        
        <li>
          <AnimateDiv>
            <a onClick={openContactForm}>Contacto</a>
          </AnimateDiv>
          {showContactForm && (
            <div className={styles.contactForm}>
              <ContactForm onClose={closeContactForm} />
            </div>
          )}
        </li>
      </ul>
     }
      
    </div> 
  );
};

export default Menu;
