import { motion } from "framer-motion";

const TextSlideDown = ({ children, up }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: up ? 30 : -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextSlideDown;
