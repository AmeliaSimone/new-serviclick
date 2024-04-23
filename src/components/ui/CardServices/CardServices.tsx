import React, { useState } from "react";
import styles from "./CardServices.module.scss";
import withScrollAnimation from "@/components/ui/Framer";

interface Card {
  title: string;
  description: string;
  list: string[];
  img: string;
}

const initialCards: Card[] = [
  {
    title: "SALUD",
    description: "Puedes encontrar beneficios para tus clientes en:",
    list: [
      "Atención Ambulatoria",
      "Atención de Urgencias ",
      "Atención de Especialista",
      "Telemedicina",
      "Descuento en farmacias",
      "Exámenes y mucho más",
    ],
    img: "/img/services/salud.png",
  },
  {
    title: "HOGAR",
    description: "Puedes encontrar beneficios para tus clientes en:",
    list: [
      "Atención Ambulatoria",
      "Atención de Urgencias ",
      "Atención de Especialista",
      "Telemedicina",
      "Descuento en farmacias",
      "Exámenes y mucho más",
    ],
    img: "/img/services/hogar.png",
  },
  {
    title: "MASCOTAS",
    description: "Puedes encontrar beneficios para tus clientes en:",
    list: [
      "Atención Ambulatoria",
      "Atención de Urgencias ",
      "Atención de Especialista",
      "Telemedicina",
      "Descuento en farmacias",
      "Exámenes y mucho más",
    ],
    img: "/img/services/mascotas.png",
  },
  {
    title: "MOVILIDAD",
    description: "Puedes encontrar beneficios para tus clientes en:",
    list: [
      "Atención Ambulatoria",
      "Atención de Urgencias ",
      "Atención de Especialista",
      "Telemedicina",
      "Descuento en farmacias",
      "Exámenes y mucho más",
    ],
    img: "/img/services/movilidad.png",
  },
];

const CardServices: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  const AnimateDiv = withScrollAnimation("div");

  return (
    <div className={styles.cardContainer}>
      <AnimateDiv>
        <div className={styles.cardList}>
          {initialCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                selectedCardIndex === index ? styles.selectedCard : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div></div>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>

        {selectedCardIndex !== null && (
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              {initialCards[selectedCardIndex].description}
            </p>
            <ul>
              {initialCards[selectedCardIndex].list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </AnimateDiv>
    </div>
  );
};

export default CardServices;
