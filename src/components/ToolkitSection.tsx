import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, Wand2, Film, Video, Lightbulb, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ServiceTool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

export const SERVICES: ServiceTool[] = [
  {
    id: 'strategy',
    name: 'CONTENT STRATEGY',
    description: 'Finding what your brand should actually be saying — from content pillars and ideas to hooks, angles and direction.',
    icon: Compass,
    accentColor: '#FF9BD2',
  },
  {
    id: 'ai-video',
    name: 'AI VIDEO',
    description: 'Turn a product, photograph, concept or simple idea into an entire visual story.',
    icon: Wand2,
    accentColor: '#B388FF',
  },
  {
    id: 'editing',
    name: 'VIDEO EDITING',
    description: 'Turn raw footage into engaging short-form, social and long-form content.',
    icon: Film,
    accentColor: '#FFB6E6',
  },
  {
    id: 'ugc',
    name: 'UGC',
    description: 'Create relatable, creator-led content that feels natural to the platform and the people watching it.',
    icon: Video,
    accentColor: '#FFD6F5',
  },
  {
    id: 'storytelling',
    name: 'STORYTELLING',
    description: 'Find the story hiding inside your business and turn it into something people want to hear.',
    icon: Lightbulb,
    accentColor: '#6D4AFF',
  },
  {
    id: 'creation',
    name: 'CONTENT CREATION',
    description: 'Take an idea from the first thought to the finished piece — strategy, scripting, creation and execution.',
    icon: Sparkles,
    accentColor: '#FF9BD2',
  },
];

export const ToolkitSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('strategy');

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

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
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-24 px-4 overflow-hidden z-20 bg-[#140A22] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* 1. ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-35 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #6D4AFF 40%, #140A22 75%, transparent 100%)',
        }}
      />

      {/* 2. SUBTLE FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{
              opacity: [0.05, 0.22, 0.05],
              y: [0, (i % 2 === 0 ? 22 : -22), 0],
            }}
            transition={{
              duration: 5 + (i % 4) * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            style={{
              left: `${(i * 8.5 + 4) % 92}%`,
              top: `${(i * 8 + 6) % 88}%`,
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              backgroundColor: i % 3 === 0 ? '#FF9BD2' : i % 3 === 1 ? '#B388FF' : '#FFF7FF',
            }}
            className="absolute rounded-full blur-[0.5px] shadow-[0_0_8px_rgba(255,155,210,0.4)]"
          />
        ))}
      </div>

      {/* MAIN CONTAINER CAPPED TO MAX WIDTH 760PX */}
      <div className="w-full max-w-[760px] mx-auto flex flex-col items-center text-center space-y-12 relative z-20">

        {/* 3. APPROVED HEADING: FROM "WHAT SHOULD I POST?" TO "LET'S MAKE IT." */}
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
                    text-[clamp(32px,8.5vw,50px)] md:text-[clamp(44px,6vw,60px)]
                    leading-[0.92] tracking-[-0.03em] font-bold text-center
                    text-[#FFF7FF]/90
                  "
                >
                  FROM “WHAT SHOULD I POST?”
                </motion.span>
              </div>
              <div className="overflow-hidden py-0.5 mt-1">
                <motion.span
                  variants={lineVariants}
                  className="
                    block uppercase
                    text-[clamp(36px,9vw,54px)] md:text-[clamp(52px,6.5vw,68px)]
                    leading-[0.92] tracking-[-0.03em] font-extrabold text-center
                    bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
                    drop-shadow-[0_0_25px_rgba(255,155,210,0.45)]
                  "
                >
                  TO “LET’S MAKE IT.”
                </motion.span>
              </div>
            </h2>
          </motion.div>
        </div>

        {/* 4. CENTRAL CREATIVE CANVAS (TRANSFORMS DYNAMICALLY BASED ON ACTIVE SERVICE) */}
        <div className="w-full flex flex-col items-center space-y-6">
          <motion.div
            layout
            className="
              relative w-full max-w-[580px] min-h-[220px] sm:min-h-[250px] rounded-[32px] p-6 sm:p-8
              bg-white/[0.055] border border-white/[0.13] backdrop-blur-[22px]
              shadow-[0_12px_40px_rgba(179,136,255,0.2)]
              flex flex-col items-center justify-center overflow-hidden gpu-layer
            "
          >
            {/* Ambient inner soft pink glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9BD2]/10 via-transparent to-[#B388FF]/10 pointer-events-none" />

            {/* DYNAMIC VISUAL FLOW INSIDE CANVAS */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center justify-center space-y-4 z-10"
              >
                {/* 1. CONTENT STRATEGY FLOW */}
                {activeServiceId === 'strategy' && (
                  <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 py-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2]/40 text-xs font-mono font-bold text-[#FF9BD2] shadow-[0_0_12px_rgba(255,155,210,0.3)]">
                      IDEA
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF9BD2]/60" />
                    <span className="px-3.5 py-1.5 rounded-full bg-[#B388FF]/20 border border-[#B388FF]/40 text-xs font-mono font-bold text-[#B388FF]">
                      HOOK
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B388FF]/60" />
                    <span className="px-3.5 py-1.5 rounded-full bg-[#FFB6E6]/20 border border-[#FFB6E6]/40 text-xs font-mono font-bold text-[#FFB6E6]">
                      ANGLE
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFB6E6]/60" />
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] text-[#140A22] text-xs font-mono font-bold shadow-[0_0_15px_rgba(255,155,210,0.5)]">
                      DIRECTION ✦
                    </span>
                  </div>
                )}

                {/* 2. AI VIDEO FLOW */}
                {activeServiceId === 'ai-video' && (
                  <div className="w-full flex items-center justify-center gap-3 py-2">
                    <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 text-center w-[90px]">
                      <span className="text-[10px] font-mono text-[#FFF7FF]/60 uppercase">CONCEPT</span>
                      <span className="text-xs font-bold text-[#FF9BD2] pt-1">Idea</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#B388FF] animate-pulse" />
                    <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 text-center w-[90px]">
                      <span className="text-[10px] font-mono text-[#FFF7FF]/60 uppercase">IMAGE</span>
                      <span className="text-xs font-bold text-[#B388FF] pt-1">Frame</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#FF9BD2] animate-pulse" />
                    <div className="flex flex-col items-center p-3 rounded-2xl bg-[#B388FF]/20 border border-[#B388FF]/50 text-center w-[110px] shadow-[0_0_20px_rgba(179,136,255,0.4)]">
                      <span className="text-[10px] font-mono text-[#FFF7FF] uppercase">AI STORY</span>
                      <span className="text-xs font-bold text-[#FFF7FF] pt-1 flex items-center justify-center gap-1">
                        <Wand2 className="w-3 h-3 text-[#FF9BD2]" /> Visuals
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. VIDEO EDITING FLOW */}
                {activeServiceId === 'editing' && (
                  <div className="w-full flex flex-col items-center space-y-3 py-2">
                    <div className="flex items-center gap-2">
                      <Film className="w-4 h-4 text-[#FFB6E6]" />
                      <span className="text-xs font-mono text-[#FFF7FF]/80 uppercase tracking-widest">MINIATURE EDIT TIMELINE</span>
                    </div>
                    <div className="w-full max-w-[280px] bg-white/10 h-6 rounded-lg border border-white/15 p-1 flex items-center gap-1.5 relative overflow-hidden">
                      <div className="h-full w-1/3 bg-[#FF9BD2]/40 rounded" />
                      <div className="h-full w-1/4 bg-[#B388FF]/40 rounded" />
                      <div className="h-full w-1/3 bg-[#FFB6E6]/40 rounded" />
                      {/* Playhead */}
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#FFF7FF] shadow-[0_0_8px_#FFF7FF] animate-pulse" />
                    </div>
                  </div>
                )}

                {/* 4. UGC FLOW */}
                {activeServiceId === 'ugc' && (
                  <div className="w-full flex items-center justify-center py-2">
                    <div className="w-[140px] h-[75px] rounded-2xl bg-[#2A1247]/90 border border-[#FFD6F5]/40 backdrop-blur-md flex flex-col items-center justify-center space-y-1 shadow-[0_0_20px_rgba(255,214,245,0.3)]">
                      <div className="w-7 h-7 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2] flex items-center justify-center text-[#FF9BD2]">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#FFF7FF]/80 uppercase tracking-wider">CREATOR-LED</span>
                    </div>
                  </div>
                )}

                {/* 5. STORYTELLING FLOW */}
                {activeServiceId === 'storytelling' && (
                  <div className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[#FFF7FF]/70">
                      IDEA
                    </span>
                    <span className="text-xs text-[#6D4AFF]">→</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-xl bg-[#6D4AFF]/20 border border-[#6D4AFF]/40 text-[#B388FF]">
                      STORY
                    </span>
                    <span className="text-xs text-[#6D4AFF]">→</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-xl bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] text-[#140A22] font-bold shadow-[0_0_15px_rgba(255,155,210,0.5)]">
                      EMOTION ✦
                    </span>
                  </div>
                )}

                {/* 6. CONTENT CREATION FLOW */}
                {activeServiceId === 'creation' && (
                  <div className="w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 py-2">
                    {['IDEA', 'SCRIPT', 'CREATE', 'EDIT', 'FINAL'].map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase ${idx === 4 ? 'bg-[#FF9BD2] text-[#140A22] shadow-[0_0_12px_#FF9BD2]' : 'bg-white/5 border border-white/10 text-[#FFF7FF]/70'}`}>
                          {step}
                        </span>
                        {idx < 4 && <span className="text-[10px] text-[#FF9BD2]/50">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* Central Orb Title Indicator */}
                <div className="pt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF9BD2] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-[#FF9BD2] uppercase font-bold">
                    {activeService.name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* APPROVED DESCRIPTION DISPLAY WITH ANIMATED TRANSITION & EDITORIAL TYPOGRAPHY */}
          <div className="w-full max-w-[620px] min-h-[85px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="
                  w-full p-6 sm:p-7 rounded-2xl bg-white/[0.05] border border-white/[0.12]
                  backdrop-blur-md text-center shadow-[0_4px_20px_rgba(179,136,255,0.12)]
                "
              >
                <p className="text-[17px] sm:text-[19px] md:text-[21px] text-[#FFF7FF]/85 font-normal leading-[1.7]">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 5. SIX FLOATING SERVICE CAPSULE BUTTONS */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3 pt-2">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeServiceId === s.id;

            return (
              <motion.button
                key={s.id}
                animate={{ y: [0, (idx % 2 === 0 ? -4 : 4), 0] }}
                transition={{
                  duration: 4.5 + (idx % 3) * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.2,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveServiceId(s.id)}
                aria-label={`Select ${s.name}`}
                className={`
                  px-4 py-3 sm:px-5 sm:py-3.5 rounded-full
                  backdrop-blur-[16px] transition-all duration-300 cursor-pointer
                  flex items-center gap-2 select-none gpu-layer min-h-[48px]
                  ${
                    isActive
                      ? 'bg-white/[0.14] border-[#FFB6E6] text-[#FFF7FF] shadow-[0_0_25px_rgba(255,155,210,0.5)] scale-[1.03] z-20'
                      : 'bg-white/[0.055] border-white/[0.14] text-[#FFF3FC]/75 hover:border-[#FFB6E6] hover:bg-white/[0.10] shadow-[0_4px_20px_rgba(179,136,255,0.15)] z-10'
                  }
                `}
              >
                <div className={`p-1 rounded-full ${isActive ? 'bg-[#FF9BD2] text-[#140A22]' : 'bg-white/10 text-[#FF9BD2]'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase">
                  {s.name}
                </span>
                {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9BD2] ml-0.5" />}
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
