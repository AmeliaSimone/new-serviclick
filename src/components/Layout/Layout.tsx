import Hero from '../functional/Hero'
import Footer from '../functional/Footer'
import Contact from '../functional/Contact';
import styles from "./Layout.module.scss"
 
export default function Layout({ children }:any) {
  return (
    <>
      <Hero />
      <main>{children}</main>
      <Contact img="/img/contact/mapa.png" width="280px" height="240px"/>
      <Footer />
    </>
  );
};