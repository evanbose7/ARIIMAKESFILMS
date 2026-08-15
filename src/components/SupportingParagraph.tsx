import React from 'react';
import { motion } from 'framer-motion';

export const SupportingParagraph: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full flex justify-center px-4 my-1.5 shrink-0 z-20 items-center"
    >
      <p className="
        text-center font-normal
        text-[#FFF7FF]/85
        text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px]
        leading-[1.7]
        max-w-[620px]
        tracking-tight
      ">
        I help brands transform ideas into <span className="text-[#FFF7FF] font-medium">cinematic content</span> through <span className="bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent font-bold">strategy, storytelling, AI, UGC and editing.</span>
      </p>
    </motion.div>
  );
};
