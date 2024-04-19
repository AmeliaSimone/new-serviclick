import React from "react";

import styles from "./History.module.scss";

import CardHistory from "@/components/ui/CardHistory";
import Title from "@/components/ui/Title";
import  Logo from "@/components/ui/Logo";
import {Text, TextStart} from "@/components/ui/Text/Text";

const History = () => {
  return (
    <div className={styles.history}>
      <div>
        {" "}
        <Title
          title="¡Nuestra motivación!"
          color="#03495C"
          size="large"
        />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cards}>
          <CardHistory backgroundImage="/img/history/f.historia.png">
            <Logo img="/img/history/historia.png" width="105px" height="105px" />
          
            <Title
              title="Nuestra Historia"
              color="white"
              size="medium"
            />
          </CardHistory>
        </div>

        <div className={styles.cards}>
          <CardHistory backgroundImage="/img/history/f.mision.png">
            <Logo img="/img/history/mision.png" width="105px" height="105px" />
           
            <Title title="Misión" color="white" size="medium" />
          </CardHistory>
        </div>

        <div className={styles.cards}>
          <CardHistory backgroundImage="/img/history/f.vision.png">
            <Logo img="/img/history/vision.png" width="105px" height="105px" />
           
            <Title title="Visión" color="white" size="medium" />
          </CardHistory>
        </div>
      </div>

      <div className={styles.textcontainer}>
        <Title
          title="¿Tienes dificultades para recaudar desde tus clientes?"
          color="#03495C"
          size="large"
         
        />
        <div className={styles.content}>
          <Logo img="/img/history/celu.png" width="180px" height="180px" thirdImg="/img/history/celu.png" thirdImgHeight="180px" thirdImgWidth="180px" />
          
          <div className={styles.text}>
          <div  className={styles.subtitle}>
          <Title title="PLAR" color="#B4CD25" size="medium"/>
          <Title title="Plataforma de recaudación recurrente" color="#03495C" size="medium"/>
        </div>
        <div  className={styles.paragraph}>
          <TextStart color="" fontSize="20px" text="¡No te preocupes!, nosotros contamos con una plataforma que puede realizar cargos recurrentes a tus clientes, en la periodicidad que necesites, en el tipo de moneda que más te convenga (pesos, UF) y que luego de un par de clics de configuración, llegue el dinero mes a mes a tu cuenta, con cualquier medio de pago electrónico (débito, crédito, prepago) que tenga tu cliente."/>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
