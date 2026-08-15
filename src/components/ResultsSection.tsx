import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, TrendingUp, Share2, Wand2 } from 'lucide-react';

export const RESULTS_DATA = [
  {
    id: 'res-4l',
    type: 'number',
    value: '4L+',
    label: 'ORGANIC VIEWS',
    subLabel: 'Social campaign',
    isLarge: true,
  },
  {
    id: 'res-2l',
    type: 'number',
    value: '2L+',
    label: 'ORGANIC VIEWS',
    subLabel: 'Organic social content',
    isLarge: false,
  },
  {
    id: 'res-youtube',
    type: 'text',
    title: 'LONG-FORM',
    subtitle: 'YOUTUBE CONTENT',
    description: 'Storytelling, editing & production',
    isLarge: false,
  },
  {
    id: 'res-ai',
    type: 'text',
    title: 'AI-POWERED',
    subtitle: 'VIDEO CREATION',
    description: 'Turning ideas and images into complete visual stories',
    isLarge: true,
  },
];

export const PIPELINE_STAGES = [
  { id: 'p1', label: 'IDEA', caption: 'The initial spark' },
  { id: 'p2', label: 'STORY', caption: 'Finding the narrative' },
  { id: 'p3', label: 'CONTENT', caption: 'Cinematic execution' },
  { id: 'p4', label: 'AUDIENCE', caption: 'Reaching the right people' },
  { id: 'p5', label: 'CONNECTION', caption: 'Resonating deeply' },
];

export const ResultsSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const cardContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-24 px-4 overflow-hidden z-20 bg-[#100719] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* 1. ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[650px] opacity-40 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 40%, #1B0C2B 75%, transparent 100%)',
        }}
      />

      {/* 2. SUBTLE FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{
              opacity: [0.05, 0.25, 0.05],
              y: [0, (i % 2 === 0 ? 20 : -20), 0],
            }}
            transition={{
              duration: 5 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
            style={{
              left: `${(i * 9 + 4) % 92}%`,
              top: `${(i * 8 + 10) % 88}%`,
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              backgroundColor: i % 3 === 0 ? '#FF9BD2' : i % 3 === 1 ? '#B388FF' : '#FFF7FF',
            }}
            className="absolute rounded-full blur-[0.5px] shadow-[0_0_8px_rgba(255,155,210,0.4)]"
          />
        ))}
      </div>

      {/* MAIN CONTAINER CAPPED TO MAX WIDTH 720PX */}
      <div className="w-full max-w-[720px] mx-auto flex flex-col items-center text-center space-y-16 relative z-20">

        {/* 3. EYEBROW BADGE: WHAT I'VE BUILT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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
          <span>WHAT I'VE BUILT</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </motion.div>

        {/* 4. MAIN EMOTIONAL HEADING */}
        <div className="relative w-full flex flex-col items-center">
          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full"
          >
            <h2 className="font-display font-bold text-center flex flex-col items-center justify-center">
              <div className="overflow-hidden py-0.5">
                <motion.span
                  variants={lineVariants}
                  className="
                    block uppercase
                    text-[clamp(32px,8.5vw,50px)] md:text-[clamp(40px,5.5vw,56px)]
                    leading-[0.96] tracking-[-0.03em] font-bold text-center
                    bg-gradient-to-b from-[#FFF7FF] to-[#FFC8EE] bg-clip-text text-transparent
                    drop-shadow-[0_0_22px_rgba(255,155,210,0.35)]
                  "
                >
                  AND I'VE SEEN WHAT HAPPENS
                </motion.span>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.span
                  variants={lineVariants}
                  className="
                    block uppercase
                    text-[clamp(32px,8.5vw,50px)] md:text-[clamp(40px,5.5vw,56px)]
                    leading-[0.96] tracking-[-0.03em] font-bold text-center
                    bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF] bg-clip-text text-transparent
                    drop-shadow-[0_0_25px_rgba(255,155,210,0.4)]
                  "
                >
                  WHEN AN IDEA CONNECTS.
                </motion.span>
              </div>
            </h2>
          </motion.div>
        </div>

        {/* 5. FOUR FLOATING RESULT OBJECTS (CARDS) */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
        >
          {/* CARD 01: 4L+ ORGANIC VIEWS */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateX: 1, rotateY: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCardId(activeCardId === 'res-4l' ? null : 'res-4l')}
            className={`
              relative w-full rounded-[30px] p-6 sm:p-7 min-h-[190px]
              bg-white/[0.06] border backdrop-blur-[20px]
              transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between gpu-layer
              ${activeCardId === 'res-4l' ? 'border-[#FF9BD2] shadow-[0_0_30px_rgba(255,155,210,0.45)] bg-white/[0.10]' : 'border-white/[0.13] hover:border-[#FFB6E6] hover:bg-white/[0.09] shadow-[0_8px_32px_rgba(179,136,255,0.18)]'}
              md:col-span-1 md:row-span-1
            `}
          >
            {/* Sparkline background graphic */}
            <div className="absolute right-4 bottom-4 opacity-25 pointer-events-none">
              <svg width="120" height="45" viewBox="0 0 120 45" fill="none">
                <path d="M5 40 Q 30 35, 55 20 T 115 5" stroke="#FF9BD2" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <div className="flex items-center justify-between z-10">
              <div className="p-2 rounded-full bg-[#FF9BD2]/15 border border-[#FF9BD2]/30 text-[#FF9BD2]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[#FF9BD2] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FF9BD2]/10 border border-[#FF9BD2]/20">
                PROVED PERFORMANCE
              </span>
            </div>

            <div className="my-2 z-10">
              <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FF] to-[#FF9BD2] tracking-tight drop-shadow-[0_0_15px_rgba(255,155,210,0.4)]">
                4L+
              </span>
              <p className="text-[11px] font-mono tracking-widest text-[#FFF7FF]/80 uppercase pt-1">
                ORGANIC VIEWS
              </p>
            </div>

            <p className="text-xs text-[#FFD6F5]/70 font-normal z-10">
              Social campaign strategy & execution
            </p>
          </motion.div>

          {/* CARD 02: 2L+ ORGANIC VIEWS */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateX: 1, rotateY: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCardId(activeCardId === 'res-2l' ? null : 'res-2l')}
            className={`
              relative w-full rounded-[30px] p-6 sm:p-7 min-h-[190px]
              bg-white/[0.06] border backdrop-blur-[20px]
              transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between gpu-layer
              ${activeCardId === 'res-2l' ? 'border-[#B388FF] shadow-[0_0_30px_rgba(179,136,255,0.45)] bg-white/[0.10]' : 'border-white/[0.13] hover:border-[#FFB6E6] hover:bg-white/[0.09] shadow-[0_8px_32px_rgba(179,136,255,0.18)]'}
              md:col-span-1 md:row-span-1
            `}
          >
            {/* Spreading particles background graphic */}
            <div className="absolute right-4 bottom-4 opacity-25 pointer-events-none flex gap-1">
              <Share2 className="w-8 h-8 text-[#B388FF] animate-pulse" />
            </div>

            <div className="flex items-center justify-between z-10">
              <div className="p-2 rounded-full bg-[#B388FF]/15 border border-[#B388FF]/30 text-[#B388FF]">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[#B388FF] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#B388FF]/10 border border-[#B388FF]/20">
                ORGANIC REACH
              </span>
            </div>

            <div className="my-2 z-10">
              <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FF] to-[#B388FF] tracking-tight drop-shadow-[0_0_15px_rgba(179,136,255,0.4)]">
                2L+
              </span>
              <p className="text-[11px] font-mono tracking-widest text-[#FFF7FF]/80 uppercase pt-1">
                ORGANIC VIEWS
              </p>
            </div>

            <p className="text-xs text-[#FFD6F5]/70 font-normal z-10">
              Organic social content & viral hooks
            </p>
          </motion.div>

          {/* CARD 03: LONG-FORM YOUTUBE CONTENT */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateX: 1, rotateY: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCardId(activeCardId === 'res-youtube' ? null : 'res-youtube')}
            className={`
              relative w-full rounded-[30px] p-6 sm:p-7 min-h-[190px]
              bg-white/[0.06] border backdrop-blur-[20px]
              transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between gpu-layer
              ${activeCardId === 'res-youtube' ? 'border-[#FFB6E6] shadow-[0_0_30px_rgba(255,182,230,0.45)] bg-white/[0.10]' : 'border-white/[0.13] hover:border-[#FFB6E6] hover:bg-white/[0.09] shadow-[0_8px_32px_rgba(179,136,255,0.18)]'}
              md:col-span-1 md:row-span-1
            `}
          >
            <div className="flex items-center justify-between z-10">
              <div className="p-2 rounded-full bg-[#FFB6E6]/15 border border-[#FFB6E6]/30 text-[#FFB6E6]">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[10px] font-mono text-[#FFB6E6] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FFB6E6]/10 border border-[#FFB6E6]/20">
                NARRATIVE
              </span>
            </div>

            <div className="my-2 z-10">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFF7FF] tracking-tight">
                LONG-FORM
              </h3>
              <p className="text-[11px] font-mono tracking-widest text-[#FF9BD2] uppercase pt-0.5">
                YOUTUBE CONTENT
              </p>
            </div>

            {/* Timeline bar animation element */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden my-1 z-10">
              <div className="bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] h-full w-3/4 rounded-full animate-pulse" />
            </div>

            <p className="text-xs text-[#FFD6F5]/70 font-normal z-10">
              Storytelling, editing & production
            </p>
          </motion.div>

          {/* CARD 04: AI-POWERED VIDEO CREATION */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateX: 1, rotateY: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCardId(activeCardId === 'res-ai' ? null : 'res-ai')}
            className={`
              relative w-full rounded-[30px] p-6 sm:p-7 min-h-[190px]
              bg-white/[0.06] border backdrop-blur-[20px]
              transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between gpu-layer
              ${activeCardId === 'res-ai' ? 'border-[#FF9BD2] shadow-[0_0_30px_rgba(255,155,210,0.45)] bg-white/[0.10]' : 'border-white/[0.13] hover:border-[#FFB6E6] hover:bg-white/[0.09] shadow-[0_8px_32px_rgba(179,136,255,0.18)]'}
              md:col-span-1 md:row-span-1
            `}
          >
            <div className="flex items-center justify-between z-10">
              <div className="p-2 rounded-full bg-[#FF9BD2]/15 border border-[#FF9BD2]/30 text-[#FF9BD2]">
                <Wand2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[#FF9BD2] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FF9BD2]/10 border border-[#FF9BD2]/20">
                INNOVATION
              </span>
            </div>

            <div className="my-2 z-10">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FF] to-[#FF9BD2] tracking-tight">
                AI-POWERED
              </h3>
              <p className="text-[11px] font-mono tracking-widest text-[#B388FF] uppercase pt-0.5">
                VIDEO CREATION
              </p>
            </div>

            <p className="text-xs text-[#FFD6F5]/70 font-normal z-10">
              Turning ideas and images into complete visual stories
            </p>
          </motion.div>
        </motion.div>



      </div>
    </section>
  );
};
