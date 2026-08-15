import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface HeadlineProps {
  scrollYProgress?: MotionValue<number>;
  onAnimationComplete?: () => void;
}

export const HEADLINE_LINES = [
  "HI, I'M ARI.",
  "I BRIDGE THE GAP BETWEEN",
  "IDEAS & EXECUTION"
];

export const Headline: React.FC<HeadlineProps> = ({ scrollYProgress, onAnimationComplete }) => {
  // On scroll: headline fades to 0.75 opacity
  const headlineOpacity = useTransform(scrollYProgress || new MotionValue(0), [0, 0.3], [1, 0.75]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: 'blur(10px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      style={{ opacity: headlineOpacity }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      onAnimationComplete={onAnimationComplete}
      className="w-full max-w-5xl mx-auto px-2 text-center my-2 shrink-0 z-20 select-none flex flex-col items-center justify-center"
    >
      <h1 className="font-display font-bold text-center flex flex-col items-center justify-center">
        {HEADLINE_LINES.map((line, index) => (
          <div key={index} className="overflow-hidden py-0.5">
            <motion.span
              variants={lineVariants}
              className="
                block uppercase
                text-[clamp(34px,9.5vw,54px)] md:text-[clamp(52px,6vw,84px)]
                leading-[0.92] tracking-[-0.03em] font-bold text-center
                bg-gradient-to-b from-[#FFF7FF] to-[#FFC8EE] bg-clip-text text-transparent
                drop-shadow-[0_0_20px_rgba(255,155,210,0.35)]
              "
            >
              {line}
            </motion.span>
          </div>
        ))}
      </h1>
    </motion.div>
  );
};
