import Head from "next/head";
import Image from "next/image";

import Hero from "@/components/functional/Hero";
import Score from "@/components/functional/Score";
import About from "@/components/functional/About";
import AboutUs from "@/components/functional/AboutUs";
import Contact from "@/components/functional/Contact";
import Customers from "@/components/functional/Customers";
import Services from "@/components/functional/Services";
import Holding from "@/components/functional/Holding";
import History from "@/components/functional/History";
import Footer from "@/components/functional/Footer";

import Wallpaper from "@/components/ui/Wallpaper";
import { TitleBackground, TitleBackgroundAbsolute } from "@/components/ui/TitleBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Serviclick</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Score />
        <Wallpaper img="/img/score/FondoAbout.png" width="1288" height="850">
          <About />
          <Services />
        </Wallpaper>
        <Wallpaper img="/img/aboutus/fondo.png" width="1288px" height="519px">
          <AboutUs />
        </Wallpaper>
        <TitleBackgroundAbsolute title="Serviclick es parte de MHM Empresas" backgroundColor="white" color="#03495C" fontSize="30px" />
        <Holding />
        <History />
        <Contact />
        <Customers />
        <Footer />
      </main>
    </>
  );
}
