import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SignaturePhilosophySectionProps {
  heroImageSrc?: string;
}

export const SignaturePhilosophySection: React.FC<SignaturePhilosophySectionProps> = ({
  heroImageSrc = '/dice_hero.jpg',
}) => {
  const [imgError, setImgError] = useState(false);

  // Fast GPU-accelerated entrance animation
  const heroVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const lineStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative w-full py-16 sm:py-28 px-4 sm:px-8 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none pt-20 border-t border-white/10 mt-16 sm:mt-24">
      
      {/* 1. DARK CINEMATIC AMBIENT RADIAL LIGHTING */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] opacity-20 blur-[200px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 40%, transparent 75%)',
        }}
      />

      {/* MAIN CONTAINER STREAMLINED TO VISUAL ESSAY / FASHION MANIFESTO */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center space-y-32 sm:space-y-48 relative z-20">

        {/* ========================================================================= */}
        {/* 01 — HERO DICE IMAGE (EDITORIAL HERO PHOTOGRAPH 70-85VW, MAX 1300PX) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[85vw] md:max-w-[1200px] lg:max-w-[1300px] aspect-[4/3] sm:aspect-[16/9] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/10 my-4"
        >
          {/* Subtle Color Grading & Dark Vignette */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-[24px] sm:rounded-[36px] shadow-[inset_0_0_90px_rgba(13,6,21,0.92)]" />
          <div className="absolute inset-0 z-10 pointer-events-none film-grain mix-blend-overlay opacity-30" />
          <div 
            className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 155, 210, 0.3) 0%, rgba(192, 132, 252, 0.2) 100%)',
            }}
          />

          {!imgError ? (
            <img
              src={heroImageSrc}
              alt="Content is a dicey game - Hero Dice Metaphor"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center contrast-[1.06] brightness-[0.95] gpu-layer"
            />
          ) : (
            <div className="w-full h-full bg-[#1A0C27] flex flex-col items-center justify-center p-6 text-center">
              <span className="text-5xl mb-3">🎲</span>
              <span className="font-display font-black text-3xl text-[#FFF7FF] uppercase tracking-wider">
                CONTENT IS A DICEY GAME
              </span>
            </div>
          )}
        </motion.div>

        {/* ========================================================================= */}
        {/* LEVEL 01 — CINEMATIC HERO TITLE: CONTENT IS A DICEY GAME. 🎲 */}
        {/* ========================================================================= */}
        <motion.div
          variants={lineStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="w-full text-center space-y-2 max-w-[1200px]"
        >
          <motion.span
            variants={heroVariants}
            className="block text-[24px] sm:text-[28px] md:text-[30px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFF7FF]/80"
          >
            CONTENT IS A
          </motion.span>
          <motion.h2
            variants={heroVariants}
            className="
              font-display font-black uppercase
              text-[46px] sm:text-[88px] md:text-[100px] lg:text-[110px]
              leading-[0.88] tracking-[-0.03em]
              flex items-center justify-center gap-3 flex-wrap pt-1
            "
          >
            <span className="text-[#FF9BD2]">DICEY</span>
            <span className="text-[#C084FC]">GAME.</span>
            <motion.span
              whileHover={{ rotate: [0, 25, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#FFF7FF] cursor-pointer"
            >
              🎲
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* LEVEL 02 — MAJOR THOUGHT: "YOU NEVER REALLY KNOW..." */}
        {/* ========================================================================= */}
        <motion.p
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="
            text-center font-display font-semibold text-[#FFF7FF]
            text-[28px] sm:text-[42px] md:text-[52px] leading-[1.05] max-w-[850px] tracking-tight
          "
        >
          You never really know what's going to happen.
        </motion.p>

        {/* ========================================================================= */}
        {/* LEVEL 02 & LEVEL 04 — THOUGHT 01 (THREE-DAY SENTENCE CONTRAST) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-16 text-center max-w-[900px]">
          
          {/* THOUGHT 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* LEVEL 02: MAJOR THOUGHT */}
            <p className="font-display font-bold text-[24px] sm:text-[34px] md:text-[42px] text-[#FFF7FF] leading-[1.2] tracking-tight">
              You can spend three days making something you absolutely love…
            </p>
            {/* LEVEL 04: SUPPORTING TEXT (MUTED DISAPPEARING CONTRAST) */}
            <p className="font-normal text-[18px] sm:text-[20px] md:text-[24px] text-[#C084FC]/70 tracking-tight pt-1">
              and it might quietly disappear into the algorithm.
            </p>
          </motion.div>

          {/* THOUGHT 02: TUESDAY MOMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {/* LEVEL 02: ORDINARY TUESDAY */}
            <p className="font-display font-bold text-[23px] sm:text-[30px] md:text-[40px] text-[#FFF7FF] leading-[1.2] tracking-tight">
              Then, on an ordinary Tuesday, you post something you almost didn't think twice about —
            </p>
            {/* LEVEL 02: EVERYONE'S WATCHING (PAYOFF GRADIENT WITH SOFT VIEWPORT GLOW) */}
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="
                font-display font-black
                text-[30px] sm:text-[48px] md:text-[64px] leading-[1.02]
                bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent
                drop-shadow-[0_0_35px_rgba(255,155,210,0.55)]
              "
            >
              and suddenly, everyone's watching.
            </motion.p>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* LEVEL 02 — MAGAZINE QUOTE (SERIF ITALIC) */}
        {/* ========================================================================= */}
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic font-normal text-[27px] sm:text-[38px] md:text-[48px] text-[#FFF7FF] text-center max-w-[850px] leading-[1.2] drop-shadow-[0_0_15px_rgba(255,155,210,0.3)]"
        >
          That's the strange, beautiful thing about content.
        </motion.h3>

        {/* ========================================================================= */}
        {/* LEVEL 03 — 3 FLOATING DICE STATEMENTS (NO BULLETS, VARYING OPACITY) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-4 text-center max-w-[850px]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[21px] sm:text-[26px] md:text-[32px] font-mono text-[#FFF7FF] font-medium tracking-tight"
          >
            It's a little bit of a lucky draw.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[21px] sm:text-[26px] md:text-[32px] font-mono text-[#FFF7FF]/82 font-medium tracking-tight flex items-center justify-center gap-2"
          >
            <span>A little bit of a roll of the dice.</span>
            <motion.span 
              animate={{ rotate: [0, 25, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xl sm:text-2xl"
            >
              🎲
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[21px] sm:text-[26px] md:text-[32px] font-mono text-[#FFF7FF]/68 font-medium tracking-tight"
          >
            A little bit of "let's see what happens."
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* LEVEL 01 — CINEMATIC HERO POSTER: "EVERY POST IS ANOTHER CHANCE" */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center space-y-4 py-10 max-w-[1200px]"
        >
          <h3 className="font-display font-black text-[38px] sm:text-[70px] md:text-[88px] text-[#FFF7FF] uppercase tracking-[-0.03em] leading-[0.92]">
            EVERY POST IS ANOTHER CHANCE.
          </h3>
          <h3 className="font-display font-black text-[38px] sm:text-[70px] md:text-[88px] bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent uppercase tracking-[-0.03em] leading-[0.92] drop-shadow-[0_0_40px_rgba(255,155,210,0.6)]">
            EVERY IDEA IS ANOTHER ROLL.
          </h3>
        </motion.div>

        {/* ========================================================================= */}
        {/* LEVEL 04 & LEVEL 03 — "YOU FIND WHAT MAKES PEOPLE CARE" */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-4 text-center max-w-[700px]">
          {/* LEVEL 04: SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-normal text-[#FFF7FF]/75 text-[18px] sm:text-[20px] md:text-[24px] leading-[1.65] tracking-tight"
          >
            And somewhere between the flops, the experiments, the "maybe this will work" moments and the occasional jackpot —
          </motion.p>

          {/* LEVEL 03: CONCLUSION HIGHLIGHT */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-[25px] sm:text-[32px] md:text-[42px] bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent tracking-tight pt-1 drop-shadow-[0_0_20px_rgba(255,155,210,0.35)]"
          >
            you find what makes people care.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* LEVEL 02 — HONESTY ("I CAN'T PROMISE...") */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-6 text-center max-w-[850px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[27px] sm:text-[38px] md:text-[48px] text-[#FFF7FF]/85 font-display font-semibold leading-tight tracking-tight"
          >
            I can't promise you that every video will blow up.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[32px] sm:text-[48px] md:text-[60px] font-display font-black text-[#FF9BD2] tracking-wider uppercase drop-shadow-[0_0_25px_rgba(255,155,210,0.5)]"
          >
            Nobody can.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* LEVEL 01 — SECOND CINEMATIC HERO STATEMENT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95 }}
          className="w-full text-center max-w-[1000px] space-y-2 py-6"
        >
          <span className="font-display font-bold text-[30px] sm:text-[34px] md:text-[38px] uppercase tracking-tight text-[#FFF7FF] block">
            BUT I CAN PROMISE YOU THAT I'LL
          </span>
          <h3 className="
            font-display font-black
            text-[36px] sm:text-[64px] md:text-[82px] leading-[0.94] uppercase tracking-tight
            bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(255,155,210,0.6)]
          ">
            CARE ABOUT THE PROCESS.
          </h3>
        </motion.div>

        {/* ========================================================================= */}
        {/* LEVEL 02 — THE FOUR PROMISES (STAGGERED HORIZONTAL OFFSETS) */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center space-y-6 font-display font-extrabold text-[23px] sm:text-[30px] md:text-[38px] text-[#FFF7FF] text-center max-w-[850px]">
          <motion.div 
            initial={{ opacity: 0, x: -15 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            I'll listen.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 15 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I'll experiment with you.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I'll celebrate the wins.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            I'll learn from the misses.
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* LEVEL 02 — CHEERING FOR YOU (SERIF ITALIC WITH ✦ ENDING) */}
        {/* ========================================================================= */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-[24px] sm:text-[32px] md:text-[40px] text-[#FFD6F5] text-center max-w-[800px] py-4 drop-shadow-[0_0_15px_rgba(255,155,210,0.35)] flex items-center justify-center gap-2"
        >
          <span>And I'll keep cheering for you either way.</span>
          <span className="text-xs font-sans text-[#FF9BD2] animate-pulse">✦</span>
        </motion.p>

      </div>
    </div>
  );
};

interface FinalManifestoSectionProps {
  onWorkWithMeClick?: () => void;
}

export const FinalManifestoSection: React.FC<FinalManifestoSectionProps> = ({ onWorkWithMeClick }) => {
  const [, setIsBtnHovered] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-32 px-4 sm:px-8 overflow-hidden z-20 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* Ambient Radial Soft Glow behind ONE IDEA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF9BD2]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto text-center flex flex-col items-center space-y-16 relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 max-w-[1000px] relative"
        >
          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-mono tracking-[0.12em] text-[#FFF7FF]/70 uppercase block font-bold">
            Because sometimes…
          </span>
          <h2 className="
            font-display font-black relative z-10
            text-[42px] sm:text-[80px] md:text-[110px]
            leading-[0.92] tracking-[-0.03em] uppercase
            bg-gradient-to-r from-[#FFF7FF] via-[#FF9BD2] to-[#B388FF] bg-clip-text text-transparent
            drop-shadow-[0_0_50px_rgba(255,155,210,0.65)]
          ">
            all it takes is <span className="text-[#FFF7FF] font-black">ONE IDEA</span> <br />
            to change everything.
          </h2>
        </motion.div>

        {/* FINAL EDITORIAL CTA & TRANSLUCENT GLASS PILL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center space-y-8 pt-4"
        >
          <h3 className="font-display font-black text-[32px] sm:text-[42px] md:text-[64px] bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] bg-clip-text text-transparent uppercase tracking-tight flex items-center gap-3">
            <span className="font-serif italic font-normal text-[#FFF7FF]">SO, SHALL WE ROLL?</span>
            <span>🎲</span>
          </h3>

          {/* Translucent Purple Glass Pill CTA Button */}
          <motion.button
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onWorkWithMeClick}
            className="
              relative px-8 py-4 sm:px-10 sm:py-5 rounded-full
              bg-gradient-to-r from-[#2A1047]/90 via-[#3B1560]/90 to-[#2A1047]/90
              border border-[#FF9BD2]/50 backdrop-blur-xl
              text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FFF7FF] uppercase
              shadow-[0_0_35px_rgba(255,155,210,0.45)] hover:shadow-[0_0_50px_rgba(255,155,210,0.65)]
              transition-all duration-300 flex items-center gap-3 cursor-pointer gpu-layer
            "
          >
            <span>LET'S MAKE SOMETHING</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF9BD2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
