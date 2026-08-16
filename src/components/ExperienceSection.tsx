import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ExperienceSectionProps {
  scrollYProgress?: MotionValue<number>;
  onSeeMyWorkClick?: () => void;
}

export const TITLE_LINES = [
  "10+ BRANDS.",
  "MANY DIFFERENT STORIES."
];

// EXACTLY 7 EXPERIENCE CATEGORIES (NO REPETITION, ARCHITECTURE & INTERIOR AS ONE NODE)
export const CONSTELLATION_NODES = [
  {
    id: 'arch-interior',
    label: 'ARCHITECTURE & INTERIOR',
    posClass: 'top-[4%] left-1/2 -translate-x-1/2 text-center',
    cx: '50%',
    cy: '12%',
    delay: 0.1,
    floatDuration: 6.2,
  },
  {
    id: 'wellness',
    label: 'WELLNESS',
    posClass: 'top-[22%] left-[2%] sm:left-[10%]',
    cx: '16%',
    cy: '28%',
    delay: 0.2,
    floatDuration: 7.1,
  },
  {
    id: 'food',
    label: 'FOOD',
    posClass: 'top-[22%] right-[2%] sm:right-[10%]',
    cx: '84%',
    cy: '28%',
    delay: 0.3,
    floatDuration: 5.8,
  },
  {
    id: 'jewellery',
    label: 'JEWELLERY',
    posClass: 'top-[50%] left-[1%] sm:left-[6%]',
    cx: '12%',
    cy: '54%',
    delay: 0.4,
    floatDuration: 6.8,
  },
  {
    id: 'animation',
    label: 'ANIMATION',
    posClass: 'top-[50%] right-[1%] sm:right-[6%]',
    cx: '88%',
    cy: '54%',
    delay: 0.5,
    floatDuration: 7.4,
  },
  {
    id: 'youtube',
    label: 'YOUTUBE',
    posClass: 'bottom-[10%] left-[10%] sm:left-[22%]',
    cx: '26%',
    cy: '84%',
    delay: 0.6,
    floatDuration: 6.0,
  },
  {
    id: 'long-form',
    label: 'LONG-FORM',
    posClass: 'bottom-[10%] right-[10%] sm:right-[22%]',
    cx: '74%',
    cy: '84%',
    delay: 0.7,
    floatDuration: 7.0,
  },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const titleContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="relative w-full py-16 sm:py-28 px-4 sm:px-6 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none pt-16 border-t border-white/10 mt-16 sm:mt-24 overflow-x-hidden">
      
      {/* 1. BACKGROUND ATMOSPHERIC GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[650px] opacity-25 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #FFB6E6 35%, #B388FF 65%, transparent 90%)',
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center space-y-12 sm:space-y-16 relative z-10">

        {/* 2. EYEBROW BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-white/[0.08] border border-white/[0.14] backdrop-blur-[16px]
            text-[11px] font-bold tracking-widest uppercase text-[#FFE6FA]
            shadow-[0_0_15px_rgba(255,155,210,0.3)]
          "
        >
          <span>EXPERIENCE</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </motion.div>

        {/* 3. HEADLINE */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full"
          >
            <h2 className="font-display font-bold text-center flex flex-col items-center justify-center">
              {TITLE_LINES.map((line, index) => (
                <div key={index} className="overflow-hidden py-0.5">
                  <motion.span
                    variants={lineVariants}
                    className="
                      block uppercase
                      text-[clamp(32px,7.5vw,56px)] md:text-[clamp(44px,5vw,62px)]
                      leading-[0.94] tracking-[-0.03em] font-bold text-center
                      bg-gradient-to-b from-[#FFF7FF] to-[#FFC8EE] bg-clip-text text-transparent
                      drop-shadow-[0_0_25px_rgba(255,155,210,0.4)]
                    "
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h2>
          </motion.div>
        </div>

        {/* 4. SUPPORTING COPY */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-center font-normal text-[#FFF7FF]/82
            text-[16px] sm:text-[18px] leading-[1.8] max-w-[34ch] tracking-tight mx-auto
          "
        >
          Different businesses. Different audiences. Different stories. But every project starts with the same question: What makes this brand worth remembering?
        </motion.p>

        {/* ========================================================================= */}
        {/* 5. ORGANIC CONSTELLATION ORBIT (EXACTLY 7 NODES, NO CARDS, NO LIST) */}
        {/* ========================================================================= */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center my-6">
          
          {/* SUBTLE THIN DASHED CONNECTING LINES FROM ARI TOWARD EACH NODE */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            <g>
              {CONSTELLATION_NODES.map((node) => (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={node.cx}
                  y2={node.cy}
                  stroke="#FF9BD2"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.28"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: node.delay + 0.3, ease: 'easeOut' }}
                />
              ))}
            </g>
          </svg>

          {/* CENTRAL ELEMENT: ARI ✦ (BRIGHTER SLIGHTLY DOMINANT NODE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="
                px-6 py-3 rounded-full
                bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF]
                text-[#100719] font-display font-black text-sm tracking-[0.2em] uppercase
                shadow-[0_0_35px_rgba(255,155,210,0.65)] border border-white/40
                flex items-center gap-2 cursor-pointer gpu-layer
              "
            >
              <span>ARI</span>
              <Sparkles className="w-4 h-4 text-[#100719] fill-current animate-pulse" />
            </motion.div>
          </motion.div>

          {/* 7 ORGANIC EXPERIENCE NODES */}
          {CONSTELLATION_NODES.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: node.delay, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute ${node.posClass} z-20`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: node.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="
                  inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full
                  bg-white/[0.07] border border-white/[0.16] backdrop-blur-xl
                  text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#FFF7FF] uppercase
                  shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#FF9BD2]/70 hover:bg-white/[0.12]
                  hover:shadow-[0_0_25px_rgba(255,155,210,0.4)]
                  transition-all duration-300 cursor-pointer whitespace-nowrap gpu-layer
                "
              >
                <span className="leading-tight">{node.label}</span>
                <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF9BD2] flex-shrink-0" />
              </motion.div>
            </motion.div>
          ))}

        </div>

        {/* ========================================================================= */}
        {/* 6. CONCLUSION (NO CATEGORY REPETITION) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-6 text-center pt-10 sm:pt-16 border-t border-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[850px] space-y-4"
          >
            {/* FIRST STATEMENT */}
            <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#FFF7FF]/85 tracking-tight uppercase leading-snug">
              DIFFERENT BUSINESSES. <br />
              DIFFERENT AUDIENCES. <br />
              DIFFERENT STORIES.
            </p>

            {/* TRANSITION STATEMENT */}
            <p className="text-xs sm:text-sm font-mono text-[#FF9BD2] tracking-widest uppercase pt-2 font-semibold">
              But every project taught me the same thing:
            </p>

            {/* MAIN HEADLINE */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                font-display font-black
                text-[26px] sm:text-[42px] md:text-[56px]
                leading-[1.04] tracking-[-0.02em] uppercase pt-2
                bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent
                drop-shadow-[0_0_35px_rgba(255,155,210,0.5)]
              "
            >
              GOOD CONTENT STARTS WITH <br />
              UNDERSTANDING WHAT MAKES A BRAND <br />
              <span className="text-[#FFF7FF] font-black">WORTH LISTENING TO.</span>
            </motion.h3>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
