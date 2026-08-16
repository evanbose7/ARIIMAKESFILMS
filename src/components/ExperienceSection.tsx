import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Sparkles, Building2, Heart, Utensils, Gem, Wand2, Video, Award, Play, Eye } from 'lucide-react';

interface ExperienceSectionProps {
  scrollYProgress?: MotionValue<number>;
  onSeeMyWorkClick?: () => void;
}

export const EXPERIENCE_CARDS = [
  {
    id: 'architecture',
    title: 'ARCHITECTURE',
    caption: 'Turning spaces into visual stories.',
    icon: Building2,
    glowColor: '#FF9BD2',
  },
  {
    id: 'wellness',
    title: 'WELLNESS',
    caption: 'Calm, emotional and human content.',
    icon: Heart,
    glowColor: '#B388FF',
  },
  {
    id: 'food',
    title: 'FOOD',
    caption: 'Content that looks as good as it tastes.',
    icon: Utensils,
    glowColor: '#FFB6E6',
  },
  {
    id: 'jewellery',
    title: 'JEWELLERY',
    caption: 'Luxury details, light and elegance.',
    icon: Gem,
    glowColor: '#FFD6F5',
  },
  {
    id: 'animation',
    title: 'ANIMATION',
    caption: 'Ideas that move beyond reality.',
    icon: Wand2,
    glowColor: '#B388FF',
  },
  {
    id: 'ugc-social',
    title: 'UGC & SOCIAL',
    caption: 'Content that feels natural and relatable.',
    icon: Video,
    glowColor: '#FF9BD2',
  },
];

export const TITLE_LINES = [
  "10+ BRANDS.",
  "MANY DIFFERENT STORIES."
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

  const cardsContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.35,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="relative w-full py-16 sm:py-24 px-4 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none pt-16 border-t border-white/10 mt-16 sm:mt-24">
      
      {/* 1. BACKGROUND LAYERS */}
      {/* Soft Lavender Fog & Large Pink Center Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[650px] opacity-30 blur-[150px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #FFB6E6 35%, #B388FF 65%, transparent 90%)',
        }}
      />
      <div 
        className="absolute bottom-10 inset-x-0 h-[300px] opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, #2A1247 0%, transparent 100%)',
        }}
      />

      {/* Faint Star-Dust Texture & Film Grain */}
      <div className="absolute inset-0 film-grain opacity-[0.025] mix-blend-overlay pointer-events-none" />

      {/* MAIN CONTAINER (MAX WIDTH 640PX) */}
      <div className="w-full max-w-[640px] mx-auto flex flex-col items-center text-center space-y-14 relative z-10">

        {/* 2. EYEBROW LABEL */}
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

        {/* 3. TITLE */}
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
                      text-[clamp(32px,8.5vw,54px)] md:text-[clamp(44px,6vw,60px)]
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

        {/* 4. INTRO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-center font-normal text-[#FFF7FF]/82
            text-[16.5px] sm:text-[17px] leading-[1.9] max-w-[30ch] tracking-tight
          "
        >
          Different businesses. Different audiences. Different stories. But every project starts with the same question: What makes this brand worth remembering?
        </motion.p>

        {/* 5. 6 FLOATING EXPERIENCE CARDS (STACKED VERTICALLY WITH 18PX GAP) */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-[18px]"
        >
          {EXPERIENCE_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  y: { duration: 3.5 + (idx % 3) * 0.6, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group relative w-full rounded-[30px] p-6
                  bg-white/[0.07] border border-white/[0.14]
                  backdrop-blur-[20px] shadow-[0_8px_32px_rgba(179,136,255,0.18)]
                  hover:border-[#FFB6E6] hover:bg-white/[0.10]
                  hover:shadow-[0_0_30px_rgba(255,155,210,0.4)]
                  transition-all duration-300 cursor-pointer overflow-hidden
                  flex flex-col items-start text-left space-y-2.5 gpu-layer will-change-transform
                "
              >
                {/* Shimmer Effect overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 20%, rgba(255, 155, 210, 0.4) 50%, transparent 80%)',
                  }}
                />

                {/* Top: Category Icon with Pink-Lavender Glow */}
                <div className="p-2.5 rounded-full bg-[#FF9BD2]/15 border border-[#FF9BD2]/40 text-[#FF9BD2] shadow-[0_0_12px_rgba(255,155,210,0.4)] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Middle: Category Title */}
                <h3 className="font-display font-bold text-[20px] text-[#FFF7FF] tracking-wide group-hover:text-[#FF9BD2] transition-colors">
                  {card.title}
                </h3>

                {/* Bottom: One-Line Cinematic Caption */}
                <p className="text-[14px] text-[#FFF7FF]/70 font-normal leading-relaxed">
                  {card.caption}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 6. CENTERPIECE QUOTE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="
            w-full p-[2px] rounded-[32px]
            bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF]
            shadow-[0_0_40px_rgba(255,155,210,0.5)]
            my-6 gpu-layer
          "
        >
          <div className="
            w-full rounded-[30px] bg-[#140A22]/90 backdrop-blur-2xl p-7 md:p-9 text-center
            flex flex-col items-center justify-center space-y-3
          ">
            <Sparkles className="w-5 h-5 text-[#FF9BD2] animate-pulse" />
            <blockquote className="font-display font-bold text-xl sm:text-2xl text-[#FFF7FF] leading-snug tracking-tight">
              "I don't create the same content for every brand. I look for the story that only that brand can tell."
            </blockquote>
          </div>
        </motion.div>

        {/* 7. MICRO SOCIAL PROOF BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#FF9BD2]/30 text-xs font-mono text-[#FF9BD2] flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,155,210,0.25)]">
            <Eye className="w-3.5 h-3.5" />
            <span>4L+ Views ✦</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#B388FF]/30 text-xs font-mono text-[#B388FF] flex items-center gap-1.5 shadow-[0_0_12px_rgba(179,136,255,0.25)]">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>YouTube ✦</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#FFB6E6]/30 text-xs font-mono text-[#FFB6E6] flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,182,230,0.25)]">
            <Award className="w-3.5 h-3.5" />
            <span>Brand Campaigns ✦</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
