
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styles from "./Slider.module.scss"

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={isMobile ? styles.slider : ""}> 
      <motion.div
        className={styles["slider-content"]} 
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        {images.map((imageUrl, index) => (
          <div key={index} className={styles.slide}> 
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
