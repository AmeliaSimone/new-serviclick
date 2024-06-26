import Head from "next/head";

import Layout from "@/components/Layout/Layout";


import Score from "@/components/functional/Score";
import About from "@/components/functional/About";
import AboutUs from "@/components/functional/AboutUs";

import Customers from "@/components/functional/Customers";
import Services from "@/components/functional/Services";
import Holding from "@/components/functional/Holding";
import History from "@/components/functional/History";

import New from "@/components/functional/New";

import FloatingButtons from "@/components/ui/FloatingButtons";
import Wallpaper from "@/components/ui/Wallpaper";

import {
  WallpaperVideo,
  WallpaperVideo2,
} from "@/components/ui/WallpaperVideo/WallpaperVideo";
import {
  TitleBackground,
  TitleBackgroundAbsolute,
} from "@/components/ui/TitleBackground";

import withScrollAnimation from "@/components/ui/Framer";






export default function Home() {
  const videoPath = "/img/aboutus/video.mp4";
  const AnimateDiv = withScrollAnimation("div");
  return (
    <>
      <Layout heroMessage="TE ACOMPAÑAMOS <br>
EN TU DESAFÍO ">
        <Head>
          <title>Serviclick - Todas las soluciones en la palma de tu mano</title>
          <meta name="description" content="Serviclick - Todas las soluciones en la palma de tu mano" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/img/hero/logocolor.png" />
        </Head>
        <main>

          <AnimateDiv>
            <Score
              content={[
                {
                  unitTextLeft: "+",
                  title: 21,
                  text: "Años de Experiencia",
                  duration: 150,
                },
                {
                  unitTextLeft: "+",
                  title: 899,
                  unitTextRight: "M",
                  text: "Clientes Finales ",
                  duration: 0.45,
                },
                {
                  unitTextLeft: "+",
                  title: 19,
                  text: "Alianzas y Clientes",
                  duration: 150,
                },
                {
                  title: 23,
                  unitTextRight: "hrs",
                  text: "Presentes en todo Chile ",
                  duration: 130,
                },
              ]}
            />
          </AnimateDiv>

          <Wallpaper img="/img/score/FondoAbout.png" width="1288" height="850">
            <About />
            <Services />
          </Wallpaper>
          <WallpaperVideo2 backgroundVideo={videoPath} width={1620} height={520}>
            <AboutUs />
          </WallpaperVideo2>
          <AnimateDiv>
            <TitleBackgroundAbsolute
              title="Serviclick es parte de MHM Empresas"
              backgroundColor="white"
              color="#03495C"
              fontSize=""
            />
          </AnimateDiv>
          <AnimateDiv>
            <Holding />
          </AnimateDiv>
          <Customers />
          <Wallpaper img="/img/history/fondo.png" width="1297px" height="1440px">
            <History />
          </Wallpaper>
          <AnimateDiv>
            <New />
          </AnimateDiv>


        </main>
        <FloatingButtons
          img="/img/floating/wsp.png"
          href1="https://api.whatsapp.com/send/?phone=56939325099&text&type=phone_number&app_absent=0"
          img2="/img/floating/phone.png"
          href2="tel:6000860580"
        />
      </ Layout>
    </>
  );
};
