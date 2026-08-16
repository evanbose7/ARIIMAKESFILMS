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
  mobileXNum: number;
  mobileYNum: number;
  desktopXNum: number;
  desktopYNum: number;
  curveOffset: number;
  delay: number;
  floatDuration: number;
  floatY: number;
}

// EXACTLY 7 CATEGORIES — ORGANIC ASYMMETRICAL DISTRIBUTION (NO GRID, NO CARDS, NO STRAIGHT LINES)
export const CONSTELLATION_NODES: ConstellationNodeData[] = [
  {
    id: 'arch-interior',
    label: 'ARCHITECTURE & INTERIOR',
    mobileClass: 'top-[2%] left-[50%] -translate-x-1/2 text-center',
    desktopClass: 'md:top-[4%] md:left-1/2 md:-translate-x-1/2',
    cxMobile: '50%',
    cyMobile: '5%',
    cxDesktop: '50%',
    cyDesktop: '8%',
    mobileXNum: 50,
    mobileYNum: 5,
    desktopXNum: 50,
    desktopYNum: 8,
    curveOffset: 6,
    delay: 0.1,
    floatDuration: 6.5,
    floatY: -5,
  },
  {
    id: 'wellness',
    label: 'WELLNESS',
    mobileClass: 'top-[18%] left-[2%]',
    desktopClass: 'md:top-[24%] md:left-[8%]',
    cxMobile: '18%',
    cyMobile: '21%',
    cxDesktop: '16%',
    cyDesktop: '26%',
    mobileXNum: 18,
    mobileYNum: 21,
    desktopXNum: 16,
    desktopYNum: 26,
    curveOffset: -10,
    delay: 0.18,
    floatDuration: 7.2,
    floatY: -4,
  },
  {
    id: 'food',
    label: 'FOOD',
    mobileClass: 'top-[21%] right-[2%]',
    desktopClass: 'md:top-[24%] md:right-[8%]',
    cxMobile: '82%',
    cyMobile: '24%',
    cxDesktop: '84%',
    cyDesktop: '26%',
    mobileXNum: 82,
    mobileYNum: 24,
    desktopXNum: 84,
    desktopYNum: 26,
    curveOffset: 10,
    delay: 0.26,
    floatDuration: 5.8,
    floatY: -6,
  },
  {
    id: 'jewellery',
    label: 'JEWELLERY',
    mobileClass: 'top-[39%] left-[6%]',
    desktopClass: 'md:top-[48%] md:left-[12%]',
    cxMobile: '24%',
    cyMobile: '41%',
    cxDesktop: '20%',
    cyDesktop: '50%',
    mobileXNum: 24,
    mobileYNum: 41,
    desktopXNum: 20,
    desktopYNum: 50,
    curveOffset: -8,
    delay: 0.34,
    floatDuration: 6.8,
    floatY: -5,
  },
  {
    id: 'animation',
    label: 'ANIMATION',
    mobileClass: 'top-[61%] right-[2%]',
    desktopClass: 'md:top-[56%] md:right-[10%]',
    cxMobile: '78%',
    cyMobile: '63%',
    cxDesktop: '82%',
    cyDesktop: '58%',
    mobileXNum: 78,
    mobileYNum: 63,
    desktopXNum: 82,
    desktopYNum: 58,
    curveOffset: 12,
    delay: 0.42,
    floatDuration: 7.8,
    floatY: -4,
  },
  {
    id: 'youtube',
    label: 'YOUTUBE',
    mobileClass: 'bottom-[12%] left-[4%]',
    desktopClass: 'md:bottom-[8%] md:left-[18%]',
    cxMobile: '22%',
    cyMobile: '83%',
    cxDesktop: '25%',
    cyDesktop: '88%',
    mobileXNum: 22,
    mobileYNum: 83,
    desktopXNum: 25,
    desktopYNum: 88,
    curveOffset: -12,
    delay: 0.5,
    floatDuration: 6.2,
    floatY: -5,
  },
  {
    id: 'long-form',
    label: 'LONG-FORM',
    mobileClass: 'bottom-[4%] right-[5%]',
    desktopClass: 'md:bottom-[8%] md:right-[18%]',
    cxMobile: '75%',
    cyMobile: '92%',
    cxDesktop: '75%',
    cyDesktop: '88%',
    mobileXNum: 75,
    mobileYNum: 92,
    desktopXNum: 75,
    desktopYNum: 88,
    curveOffset: 14,
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

  // Organic Curved SVG Path Generator
  const getCurvedSvgPath = (endXNum: number, endYNum: number, curveDir: number) => {
    const startX = 50;
    const startY = 50;
    const midX = (startX + endXNum) / 2;
    const midY = (startY + endYNum) / 2;
    
    // Perpendicular offset for organic curvature
    const dx = endXNum - startX;
    const dy = endYNum - startY;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const controlX = midX + (-dy / len) * curveDir;
    const controlY = midY + (dx / len) * curveDir;

    return `M ${startX} ${startY} Q ${controlX.toFixed(1)} ${controlY.toFixed(1)} ${endXNum} ${endYNum}`;
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

      {/* SUBTLE DRIFTING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#FF9BD2] blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[40%] right-[18%] w-2 h-2 rounded-full bg-[#B388FF] blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#FFB6E6] blur-[1px]"
        />
      </div>

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
                      text-[clamp(34px,7.5vw,52px)] md:text-[clamp(44px,5vw,64px)]
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
        <div className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[560px] flex items-center justify-center my-4 sm:my-6 max-w-[1000px] mx-auto px-1 sm:px-4">
          
          {/* EXTREMELY FAINT CURVED CONSTELLATION CONNECTING LINES (OPACITY 0.14) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <g>
              {CONSTELLATION_NODES.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const targetXNum = isMobile ? node.mobileXNum : node.desktopXNum;
                const targetYNum = isMobile ? node.mobileYNum : node.desktopYNum;
                const curvedD = isMobile 
                  ? getCurvedSvgPath(targetXNum, targetYNum, node.curveOffset)
                  : `M 50 50 L ${targetXNum} ${targetYNum}`;

                return (
                  <motion.path
                    key={`line-${node.id}`}
                    d={curvedD}
                    stroke="#FF9BD2"
                    strokeWidth="0.5"
                    strokeDasharray="1.5 2.5"
                    strokeOpacity={isHovered ? "0.65" : "0.14"}
                    style={{ filter: 'blur(0.4px)' }}
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
              style={{ 
                background: 'rgba(30, 8, 55, 0.75)',
                border: '1px solid rgba(255, 155, 210, 0.55)',
                boxShadow: '0 0 30px rgba(255, 155, 210, 0.18)',
              }}
              className="
                px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                backdrop-blur-xl text-[#FFF7FF]
                font-display font-black text-xs sm:text-sm tracking-[0.22em] uppercase
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
            const isArch = node.id === 'arch-interior';

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
                  style={{
                    background: 'rgba(22, 9, 40, 0.65)',
                    borderColor: isHovered ? 'rgba(255, 155, 210, 0.8)' : 'rgba(255, 182, 230, 0.28)',
                    boxShadow: isHovered 
                      ? '0 0 25px rgba(255, 155, 210, 0.45)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 155, 210, 0.12)',
                  }}
                  className={`
                    inline-flex items-center gap-1.5 rounded-full border backdrop-blur-xl
                    text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase
                    transition-all duration-300 cursor-pointer whitespace-nowrap gpu-layer text-[#FFF7FF]/90
                    ${isArch ? 'px-4 py-2 sm:px-5 sm:py-2.5' : 'px-3.5 py-2 sm:px-5 sm:py-2.5'}
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
        <div className="w-full flex flex-col items-center space-y-6 text-center pt-14 sm:pt-20 border-t border-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[900px]"
          >
            {/* MAIN VISUALLY SIGNIFICANT HEADLINE (FLOATING DIRECTLY ON PURPLE BACKGROUND) */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                font-display font-black
                text-[24px] sm:text-[40px] md:text-[54px] lg:text-[62px]
                leading-[1.06] tracking-[-0.02em] uppercase
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

