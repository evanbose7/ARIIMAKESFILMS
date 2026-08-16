import React, { useState, useEffect } from 'react';
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

export interface ConstellationNodeData {
  id: string;
  label: string;
  mobileClass: string;
  desktopClass: string;
  cxMobile: string;
  cyMobile: string;
  cxDesktop: string;
  cyDesktop: string;
  delay: number;
  floatDuration: number;
  floatY: number;
}

// EXACTLY 7 CATEGORIES — ORGANIC ASYMMETRICAL DISTRIBUTION (NO GRID, NO CARDS)
export const CONSTELLATION_NODES: ConstellationNodeData[] = [
  {
    id: 'arch-interior',
    label: 'ARCHITECTURE & INTERIOR',
    mobileClass: 'top-[3%] left-[46%] -translate-x-1/2 text-center',
    desktopClass: 'md:top-[4%] md:left-1/2 md:-translate-x-1/2',
    cxMobile: '46%',
    cyMobile: '7%',
    cxDesktop: '50%',
    cyDesktop: '8%',
    delay: 0.1,
    floatDuration: 6.5,
    floatY: -5,
  },
  {
    id: 'wellness',
    label: 'WELLNESS',
    mobileClass: 'top-[22%] left-[2%]',
    desktopClass: 'md:top-[24%] md:left-[8%]',
    cxMobile: '18%',
    cyMobile: '26%',
    cxDesktop: '16%',
    cyDesktop: '26%',
    delay: 0.18,
    floatDuration: 7.2,
    floatY: -4,
  },
  {
    id: 'food',
    label: 'FOOD',
    mobileClass: 'top-[24%] right-[2%]',
    desktopClass: 'md:top-[24%] md:right-[8%]',
    cxMobile: '82%',
    cyMobile: '27%',
    cxDesktop: '84%',
    cyDesktop: '26%',
    delay: 0.26,
    floatDuration: 5.8,
    floatY: -6,
  },
  {
    id: 'jewellery',
    label: 'JEWELLERY',
    mobileClass: 'top-[45%] left-[1%]',
    desktopClass: 'md:top-[48%] md:left-[12%]',
    cxMobile: '20%',
    cyMobile: '48%',
    cxDesktop: '20%',
    cyDesktop: '50%',
    delay: 0.34,
    floatDuration: 6.8,
    floatY: -5,
  },
  {
    id: 'animation',
    label: 'ANIMATION',
    mobileClass: 'top-[56%] right-[1%]',
    desktopClass: 'md:top-[56%] md:right-[10%]',
    cxMobile: '80%',
    cyMobile: '59%',
    cxDesktop: '82%',
    cyDesktop: '58%',
    delay: 0.42,
    floatDuration: 7.8,
    floatY: -4,
  },
  {
    id: 'youtube',
    label: 'YOUTUBE',
    mobileClass: 'bottom-[9%] left-[4%]',
    desktopClass: 'md:bottom-[8%] md:left-[18%]',
    cxMobile: '24%',
    cyMobile: '86%',
    cxDesktop: '25%',
    cyDesktop: '88%',
    delay: 0.5,
    floatDuration: 6.2,
    floatY: -5,
  },
  {
    id: 'long-form',
    label: 'LONG-FORM',
    mobileClass: 'bottom-[7%] right-[4%]',
    desktopClass: 'md:bottom-[8%] md:right-[18%]',
    cxMobile: '76%',
    cyMobile: '88%',
    cxDesktop: '75%',
    cyDesktop: '88%',
    delay: 0.58,
    floatDuration: 7.0,
    floatY: -6,
  },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="relative w-full py-16 sm:py-28 px-5 sm:px-8 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none pt-16 border-t border-white/10 mt-16 sm:mt-24 overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC PLUM & SOFT PINK AMBIENT GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-20 blur-[170px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 40%, #3B1D55 70%, transparent 95%)',
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center space-y-12 sm:space-y-16 relative z-10">

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
                      text-[clamp(34px,7.5vw,58px)] md:text-[clamp(44px,5vw,64px)]
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

        {/* 4. CONCISE SUPPORTING STATEMENT */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-center font-normal text-[#FFF7FF]/82
            text-[15px] sm:text-[17px] leading-[1.8] max-w-[34ch] tracking-tight mx-auto
          "
        >
          Different businesses. Different audiences. Different stories.
        </motion.p>

        {/* ========================================================================= */}
        {/* 5. DREAMY OPEN CONSTELLATION ORBIT (EXACTLY 7 NODES, NO CARDS, NO GRID) */}
        {/* ========================================================================= */}
        <div className="relative w-full min-h-[540px] sm:min-h-[580px] md:min-h-[560px] flex items-center justify-center my-4 sm:my-6 max-w-[1000px] mx-auto px-1 sm:px-4">
          
          {/* EXTREMELY FAINT CONSTELLATION CONNECTING LINES (OPACITY 0.14) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            <g>
              {CONSTELLATION_NODES.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const targetX = isMobile ? node.cxMobile : node.cxDesktop;
                const targetY = isMobile ? node.cyMobile : node.cyDesktop;

                return (
                  <motion.line
                    key={`line-${node.id}`}
                    x1="50%"
                    y1="50%"
                    x2={targetX}
                    y2={targetY}
                    stroke="#FF9BD2"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    strokeOpacity={isHovered ? "0.65" : "0.14"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: node.delay + 0.15, ease: 'easeOut' }}
                  />
                );
              })}
            </g>
          </svg>

          {/* CENTRAL ANCHOR: ✦ ARI ✦ (DARK PURPLE TRANSLUCENT CAPSULE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ background: 'rgba(30, 8, 55, 0.75)' }}
              className="
                px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                backdrop-blur-xl
                border border-[#FF9BD2]/55 text-[#FFF7FF]
                font-display font-black text-xs sm:text-sm tracking-[0.22em] uppercase
                shadow-[0_0_30px_rgba(255,155,210,0.18)]
                flex items-center gap-2 cursor-pointer gpu-layer
              "
            >
              <span className="text-[#FF9BD2]">✦</span>
              <span className="text-[#FFF7FF]">ARI</span>
              <span className="text-[#FF9BD2]">✦</span>
            </motion.div>
          </motion.div>

          {/* 7 FLOATING EXPERIENCE GLASS PILLS */}
          {CONSTELLATION_NODES.map((node) => {
            const isHovered = hoveredNodeId === node.id;
            const positionClass = isMobile ? node.mobileClass : `${node.mobileClass} ${node.desktopClass}`;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.94, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: node.delay, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${positionClass} z-20`}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                <motion.div
                  animate={{ y: [0, node.floatY, 0] }}
                  transition={{
                    duration: node.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full
                    bg-white/[0.06] border backdrop-blur-xl
                    text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase
                    transition-all duration-300 cursor-pointer whitespace-nowrap gpu-layer
                    ${isHovered 
                      ? 'border-[#FF9BD2]/80 bg-white/[0.12] text-[#FFF7FF] shadow-[0_0_25px_rgba(255,155,210,0.45)]' 
                      : 'border-white/[0.16] text-[#FFF7FF]/90 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    }
                  `}
                >
                  <span className="leading-tight">{node.label}</span>
                  <ArrowUpRight className={`w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform duration-300 ${isHovered ? 'text-[#FF9BD2] translate-x-0.5 -translate-y-0.5' : 'text-[#FF9BD2]/80'}`} />
                </motion.div>
              </motion.div>
            );
          })}

        </div>

        {/* ========================================================================= */}
        {/* 6. CONCLUDING STATEMENT (FLOATING DIRECTLY ON PURPLE BACKGROUND, NO BOX) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-6 text-center pt-16 sm:pt-24 border-t border-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[900px] space-y-4"
          >
            {/* TRANSITION STATEMENT */}
            <p className="text-xs sm:text-sm font-mono text-[#FFF7FF]/70 tracking-widest uppercase font-semibold">
              But every project taught me the same thing:
            </p>

            {/* MAIN VISUALLY SIGNIFICANT HEADLINE (FLOATING DIRECTLY ON PURPLE BACKGROUND) */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                font-display font-black
                text-[26px] sm:text-[44px] md:text-[58px] lg:text-[66px]
                leading-[1.04] tracking-[-0.02em] uppercase pt-2
              "
            >
              <span className="text-[#FFF7FF]">GOOD CONTENT STARTS WITH</span> <br />
              <span className="bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,155,210,0.5)]">
                UNDERSTANDING WHAT MAKES A BRAND <br />
                WORTH LISTENING TO.
              </span>
            </motion.h3>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
