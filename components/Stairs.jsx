"use client";
import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full flex-1 bg-gradient-to-b from-gold/20 via-[#16231f] to-[#0b0f14] will-change-transform"
          />
        );
      })}
    </>
  );
};

export default Stairs;
