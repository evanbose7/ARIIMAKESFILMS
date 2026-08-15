import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BottomLineProps {
  scrollYProgress?: MotionValue<number>;
}

export const BottomLine: React.FC<BottomLineProps> = ({ scrollYProgress }) => {
  // As user scrolls: opacity 1 -> 0, translateY 0 -> -12px
  const opacity = useTransform(scrollYProgress || new MotionValue(0), [0, 0.12], [1, 0]);
  const y = useTransform(scrollYProgress || new MotionValue(0), [0, 0.12], [0, -12]);
  const glowY = useTransform(scrollYProgress || new MotionValue(0), [0, 0.12], [0, 60]);

  return (
    <motion.div
      style={{ opacity, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.85 }}
      className="relative w-full text-center pb-4 pt-1 shrink-0 z-20 select-none gpu-layer"
    >
      {/* 80-140px Subtle Pink/Lavender Ambient Glow fading downward */}
      <motion.div
        style={{ 
          y: glowY,
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #B388FF 60%, transparent 100%)',
        }}
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] h-[100px] opacity-30 blur-[45px] pointer-events-none rounded-full"
      />

      <p className="
        relative z-10 text-[12px] font-medium tracking-[0.18em] uppercase
        text-[#FFD6F5]/65
        transition-colors duration-300 hover:text-[#FF9BD2] cursor-default
      ">
        YOUR IDEA. MY EXECUTION. <span className="text-[#FF9BD2] inline-block animate-pulse ml-0.5">✦</span>
      </p>
    </motion.div>
  );
};
