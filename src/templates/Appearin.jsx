"use client";

import { motion } from "framer-motion";

const Appearin = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:false}}
    //   animate={{
    //     opacity: 1,
    //     scale: 1,
    //   }}
      transition={{
        duration: 1,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Appearin;
