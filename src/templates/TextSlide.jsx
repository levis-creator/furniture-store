import { motion } from "framer-motion";
import React from "react";

const TextSlide = ({ children }) => {
  return (
    <motion.div
      initial="invisible"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        invisible: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextSlide;
