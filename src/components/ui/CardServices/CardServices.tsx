// CardServices.tsx
import React, { useState } from "react";
import styles from "./CardServices.module.scss";

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
    description: "2Puedes encontrar beneficios para tus clientes en:",
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
    description: "3Puedes encontrar beneficios para tus clientes en:",
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
    description: "4Puedes encontrar beneficios para tus clientes en:",
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
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className={styles.cardContainer}>
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
    </div>
  );
};

export default CardServices;
