import React, { useState } from 'react';
import styles from './CardH.module.scss';

interface CardProps {
  backgroundImage: string;
  title: string;
  text: string;
  images: string[];
  backTitle: string;
  backText: string;
}

const CardH: React.FC<CardProps> = ({
  backgroundImage,
  title,
  text,
  images,
  backTitle,
  backText,
}) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={flipCard}>
      <div className={styles.front} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className={styles.imageContainer}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.content}>
          <h2>{backTitle}</h2>
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardH;
