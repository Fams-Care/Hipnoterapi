import React from "react";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section>
        {/* Brand Info */}
        <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
          <div className="text-4xl font-bold !leading-snug">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
               Apa itu   {""}
              <span className="text-secondary">Hypnotherapy</span><span>?</span>
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
