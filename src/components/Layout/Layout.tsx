import React from "react";
import Hero from "../functional/Hero";
import Footer from "../functional/Footer";
import Contact from "../functional/Contact";

interface LayoutProps {
  children: React.ReactNode;
  heroMessage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, heroMessage }) => {
  return (
    <>
      <Hero message={heroMessage} />
      <main>{children}</main>
      <Contact img="/img/contact/mapa.png" width="280px" height="240px" />
      <Footer />
    </>
  );
};

export default Layout;
