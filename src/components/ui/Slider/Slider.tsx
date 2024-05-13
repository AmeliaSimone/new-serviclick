import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styles from "./Slider.module.scss";

interface SliderProps {
  children: React.ReactNode; 
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!isMobile) {
    
    return <>{children}</>;
  }

  return (
    <div className={styles.slider}>
      <motion.div
        className={styles["slider-content"]}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.slide}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
