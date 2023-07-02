"use client";
import { AnimatePresence, motion } from "framer-motion";

const Slidein = ({ children, className, whileTap }) => {
  return (

      <motion.div
      whileTap={whileTap}
        className={className}
        key="slide"
        initial={{
            
          x: -200,
          opacity:0
        }}
        animate={{
          x: 0,
          opacity:1
        }}
        transition={{
          duration: 0.2,
        }}
        exit={{
          x: -250,
          opacity:0
        }}
      >
        {children}
      </motion.div>
  
  );
};

export default Slidein;
