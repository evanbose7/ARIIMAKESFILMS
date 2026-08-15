import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export interface IndustryCategory {
  id: string;
  name: string;
  mobileTop: string;
  mobileLeft?: string;
  mobileRight?: string;
  desktopTop: string;
  desktopLeft?: string;
  desktopRight?: string;
  floatY: number[];
  floatDuration: number;
  opacity: number;
  previewTagline: string;
  previewDetail: string;
}

export const CATEGORIES: IndustryCategory[] = [
  {
    id: 'architecture',
    name: 'ARCHITECTURE',
    mobileTop: '4%',
    mobileLeft: '10%',
    desktopTop: '8%',
    desktopLeft: '10%',
    floatY: [0, -3, 0],
    floatDuration: 6.2,
    opacity: 1,
    previewTagline: 'Turning spatial concepts into visual stories.',
    previewDetail: 'Cinematic perspective, structural lines, and lighting.',
  },
  {
    id: 'interior',
    name: 'INTERIOR DESIGN',
    mobileTop: '13%',
    mobileRight: '4%',
    desktopTop: '16%',
    desktopRight: '12%',
    floatY: [0, -2.5, 0],
    floatDuration: 5.8,
    opacity: 0.9,
    previewTagline: 'Light, texture, and spatial elegance.',
    previewDetail: 'Capturing ambiance and editorial luxury aesthetics.',
  },
  {
    id: 'wellness',
    name: 'WELLNESS',
    mobileTop: '24%',
    mobileLeft: '2%',
    desktopTop: '28%',
    desktopLeft: '4%',
    floatY: [0, -3, 0],
    floatDuration: 7.1,
    opacity: 1,
    previewTagline: 'Calm, emotional, and human content.',
    previewDetail: 'Slow cinematic pacing that connects deeply with viewers.',
  },
  {
    id: 'food',
    name: 'FOOD',
    mobileTop: '32%',
    mobileRight: '2%',
    desktopTop: '36%',
    desktopRight: '6%',
    floatY: [0, -4, 0],
    floatDuration: 6.5,
    opacity: 0.9,
    previewTagline: 'Content that looks as good as it tastes.',
    previewDetail: 'Sensory storytelling and rich macro detail.',
  },
  {
    id: 'jewellery',
    name: 'JEWELLERY',
    mobileTop: '43%',
    mobileLeft: '4%',
    desktopTop: '52%',
    desktopLeft: '8%',
    floatY: [0, -2.5, 0],
    floatDuration: 5.5,
    opacity: 1,
    previewTagline: 'Luxury details, light, and elegance.',
    previewDetail: 'Macro reflections and premium brand prestige.',
  },
  {
    id: 'animation',
    name: 'ANIMATION',
    mobileTop: '52%',
    mobileRight: '2%',
    desktopTop: '60%',
    desktopRight: '10%',
    floatY: [0, -3, 0],
    floatDuration: 6.8,
    opacity: 0.85,
    previewTagline: 'Ideas that move beyond reality.',
    previewDetail: 'Dynamic motion graphics and surreal visual flow.',
  },
  {
    id: 'pet-brands',
    name: 'PET BRANDS',
    mobileTop: '63%',
    mobileLeft: '6%',
    desktopTop: '70%',
    desktopLeft: '14%',
    floatY: [0, -3.5, 0],
    floatDuration: 7.4,
    opacity: 0.9,
    previewTagline: 'Warmth, playfulness, and authentic connection.',
    previewDetail: 'Relatable lifestyle content for passionate audiences.',
  },
  {
    id: 'ugc',
    name: 'UGC & SOCIAL',
    mobileTop: '72%',
    mobileRight: '8%',
    desktopTop: '78%',
    desktopRight: '16%',
    floatY: [0, -2.5, 0],
    floatDuration: 5.9,
    opacity: 1,
    previewTagline: 'Content that feels natural and relatable.',
    previewDetail: 'High-converting organic social formats.',
  },
  {
    id: 'youtube',
    name: 'YOUTUBE & LONG-FORM',
    mobileTop: '83%',
    mobileLeft: '12%',
    desktopTop: '88%',
    desktopLeft: '22%',
    floatY: [0, -3, 0],
    floatDuration: 6.6,
    opacity: 0.95,
    previewTagline: 'Long-form storytelling and audience retention.',
    previewDetail: 'Structure, hook design, and visual rhythm.',
  },
];

export const TITLE_LINES = [
  "10+ BRANDS.",
  "MANY DIFFERENT STORIES."
];

export const ConstellationSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId);

  const titleContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section 
      style={{ paddingTop: 'max(80px, env(safe-area-inset-top) + 60px)' }}
      className="relative w-full min-h-screen pb-24 px-4 overflow-hidden z-20 bg-[#140A22] text-[#FFF7FF] flex flex-col items-center justify-center select-none"
    >
      
      {/* 1. ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-30 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #B388FF 45%, #2A1247 75%, transparent 100%)',
        }}
      />

      {/* 2. SUBTLE SLOW FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{
              opacity: [0.05, 0.2, 0.05],
              y: [0, (i % 2 === 0 ? 12 : -12), 0],
            }}
            transition={{
              duration: 6 + (i % 3) * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
            style={{
              left: `${(i * 14 + 8) % 90}%`,
              top: `${(i * 12 + 10) % 85}%`,
              width: `${3 + (i % 2) * 2}px`,
              height: `${3 + (i % 2) * 2}px`,
              backgroundColor: i % 2 === 0 ? '#FF9BD2' : '#B388FF',
            }}
            className="absolute rounded-full blur-[0.5px] shadow-[0_0_6px_rgba(255,155,210,0.3)]"
          />
        ))}
      </div>

      {/* MAIN CONTAINER STREAMLINED TO 4 DISTINCT LAYERS */}
      <div className="w-full max-w-[760px] mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-10 relative z-20">

        {/* ========================================================================= */}
        {/* LAYER 01 — INTRODUCTION */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-4">
          
          {/* EYEBROW BADGE: EXPERIENCE ✦ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              bg-white/[0.06] border border-white/[0.12] backdrop-blur-[16px]
              text-[11px] font-bold tracking-widest uppercase text-[#FFE6FA]
              shadow-[0_0_15px_rgba(255,155,210,0.3)]
            "
          >
            <span>EXPERIENCE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          {/* MAIN HEADING */}
          <div className="relative w-full flex flex-col items-center">
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="w-full"
            >
              <h2 className="font-display font-bold text-center flex flex-col items-center justify-center">
                {TITLE_LINES.map((line, index) => (
                  <div key={index} className="overflow-hidden py-0.5">
                    <motion.span
                      variants={lineVariants}
                      className="
                        block uppercase
                        text-[clamp(36px,9vw,52px)] md:text-[clamp(48px,6vw,64px)]
                        leading-[0.94] tracking-[-0.03em] font-black text-center
                        bg-gradient-to-b from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
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

          {/* SINGLE CONCISE INTRO PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              text-center font-normal text-[#FFF7FF]/85
              text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] max-w-[620px] tracking-tight pt-1
            "
          >
            I've had the opportunity to create content across different <span className="text-[#FFF7FF] font-medium">industries</span>, <span className="text-[#FF9BD2] font-medium">audiences</span> and <span className="bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent font-semibold">stories</span>.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 02 — INDUSTRY WORLDS (THE HERO CONSTELLATION VISUAL) */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-[360px] md:max-w-[720px] h-[520px] md:h-[560px] my-2 mx-auto">
          
          {/* DELICATE SUBTLE GLOWING LINES SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15 z-10">
            <line x1="50%" y1="45%" x2="20%" y2="8%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="80%" y2="16%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="10%" y2="28%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="88%" y2="36%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="12%" y2="52%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="86%" y2="60%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="14%" y2="70%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="82%" y2="78%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="45%" x2="22%" y2="88%" stroke="rgba(255,180,230,0.5)" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* CENTRAL ARI ELEGANT NODE */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="
              absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
              w-[125px] h-[52px] rounded-full
              bg-[#2A1247]/95 border border-[#FF9BD2]/60
              backdrop-blur-[20px] shadow-[0_0_30px_rgba(255,155,210,0.55)]
              flex items-center justify-center text-center select-none gpu-layer
            "
          >
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FF] via-[#FF9BD2] to-[#B388FF] uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
              <span>ARI</span>
              <Sparkles className="w-3.5 h-3.5 text-[#B388FF] animate-pulse" />
            </span>
          </motion.div>

          {/* FLOATING INDUSTRY PILLS */}
          <div className="absolute inset-0 z-20">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  animate={{ y: cat.floatY }}
                  transition={{
                    duration: cat.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActiveCategoryId(isActive ? null : cat.id)}
                  aria-label={`View ${cat.name} details`}
                  style={{
                    top: cat.mobileTop,
                    left: cat.mobileLeft,
                    right: cat.mobileRight,
                    opacity: cat.opacity,
                  }}
                  className={`
                    absolute px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full
                    backdrop-blur-[16px] transition-all duration-300 cursor-pointer
                    flex items-center gap-1.5 select-none gpu-layer max-w-[48%]
                    ${
                      isActive
                        ? 'bg-white/[0.18] border-[#FFB6E6] text-[#FFF7FF] shadow-[0_0_25px_rgba(255,155,210,0.6)] z-40 !opacity-100 scale-105'
                        : activeCategoryId !== null
                        ? 'bg-white/[0.03] border-white/[0.08] text-[#FFF3FC]/40 z-10'
                        : 'bg-white/[0.06] border-white/[0.14] text-[#FFF3FC] hover:border-[#FFB6E6] hover:bg-white/[0.12] shadow-[0_4px_16px_rgba(179,136,255,0.15)] z-20'
                    }
                  `}
                >
                  <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.08em] uppercase truncate">
                    {cat.name}
                  </span>
                  <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'rotate-45 text-[#FF9BD2]' : 'text-[#FFF7FF]/60'}`} />
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* CINEMATIC PREVIEW CARD OVERLAY WHEN A CATEGORY IS TAPPED */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="
                w-full rounded-[28px] p-5
                bg-[#2A1247]/95 border border-[#FFB6E6]/40
                backdrop-blur-2xl shadow-[0_10px_35px_rgba(255,155,210,0.4)]
                flex flex-col text-left space-y-2 relative z-30 my-2
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#FF9BD2]/20 text-[#FF9BD2] font-bold tracking-widest uppercase">
                  {activeCategory.name}
                </span>
                <button
                  onClick={() => setActiveCategoryId(null)}
                  className="text-xs text-[#FFF7FF]/60 hover:text-[#FFF7FF] cursor-pointer px-2 py-1"
                >
                  Close ✕
                </button>
              </div>

              <h3 className="font-display font-bold text-base text-[#FFF7FF]">
                {activeCategory.previewTagline}
              </h3>
              <p className="text-xs text-[#FFF7FF]/75 leading-relaxed flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9BD2] shrink-0" />
                <span>{activeCategory.previewDetail}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* LAYER 03 — ONE INSIGHT (FINAL CONCLUSION) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full text-center max-w-[650px] mx-auto pt-10 sm:pt-14"
        >
          <h3 className="font-display font-black text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.25] tracking-tight uppercase text-[#FFF7FF]">
            GOOD CONTENT STARTS WITH <br />
            <span className="bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF] bg-clip-text text-transparent font-black drop-shadow-[0_0_20px_rgba(255,155,210,0.4)]">
              UNDERSTANDING WHAT MAKES A BRAND <br />
              WORTH LISTENING TO.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};
