import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const DifferenceSection: React.FC = () => {
  const [interactiveState, setInteractiveState] = useState<'idle' | 'pulsing' | 'floating' | 'organizing' | 'final'>('idle');

  const handleOrbClick = () => {
    if (interactiveState !== 'idle') return;

    // Step 01: Pulse (250ms)
    setInteractiveState('pulsing');

    // Step 02: Floating Ideas Emerge (after 250ms)
    setTimeout(() => {
      setInteractiveState('floating');

      // Step 03: Reorganize into One Horizontal Line (after 650ms)
      setTimeout(() => {
        setInteractiveState('organizing');

        // Step 04: Final Calm State (after 900ms)
        setTimeout(() => {
          setInteractiveState('final');
        }, 900);
      }, 650);
    }, 250);
  };

  return (
    <section className="relative w-full py-24 sm:py-36 px-4 sm:px-6 overflow-hidden z-20 bg-[#0F0718] text-[#FFF7FF] select-none">
      
      {/* ATMOSPHERIC RADIAL GLOW THAT EXPANDS UPON CLICKING */}
      <div 
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90vw] max-w-[1000px] h-[600px] blur-[140px] pointer-events-none rounded-full
          transition-all duration-1000
          ${interactiveState !== 'idle' ? 'opacity-45 scale-110' : 'opacity-25 scale-100'}
        `}
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #B388FF 40%, #0F0718 80%, transparent 100%)',
        }}
      />

      {/* MAIN SECTION CONTAINER */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 sm:space-y-16 relative z-20">

        {/* ========================================================================= */}
        {/* 1. SECTION EYEBROW & TITLE */}
        {/* ========================================================================= */}
        <div className="w-full space-y-5">
          
          {/* Eyebrow: THE DIFFERENCE ✦ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFE6FA] shadow-[0_0_20px_rgba(255,155,210,0.3)]"
          >
            <span>THE DIFFERENCE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="
              font-display font-black uppercase
              text-[clamp(36px,8.5vw,52px)] md:text-[clamp(64px,6.5vw,90px)]
              leading-[0.92] tracking-[-0.03em] text-center
            "
          >
            <span className="block text-[#FFF7FF]">I DON'T WANT TO MAKE</span>
            <span className="block text-[#FFF7FF]/80">CONTENT FOR YOU.</span>
            <span className="block pt-3 bg-gradient-to-r from-[#FF9BD2] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,155,210,0.45)]">
              I WANT TO FIND
            </span>
            <span className="block bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,155,210,0.6)]">
              YOUR CONTENT.
            </span>
          </motion.h2>

          {/* Subline: There's a difference. */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FF9BD2] pt-2"
          >
            There's a difference.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SIGNATURE INTERACTIVE MOMENT — YOUR IDEAS ✦ ORB TO STORY SEQUENCE */}
        {/* ========================================================================= */}
        <div className="w-full min-h-[160px] sm:min-h-[220px] flex items-center justify-center relative py-6 my-4">
          
          {/* STATE A: GLOWING CIRCULAR ORB BUTTON (BEFORE CLICK) */}
          <AnimatePresence>
            {interactiveState === 'idle' || interactiveState === 'pulsing' ? (
              <motion.button
                key="orb-button"
                onClick={handleOrbClick}
                aria-label="Reveal your ideas"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: interactiveState === 'pulsing' ? 1.08 : [1, 1.025, 1],
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  scale: interactiveState === 'pulsing' ? { duration: 0.25 } : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 0.3 },
                }}
                whileHover={{ scale: 1.05 }}
                className="
                  relative w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full
                  bg-gradient-to-br from-[#FF9BD2]/25 via-[#1D0A33]/80 to-[#B388FF]/30
                  border border-[#FF9BD2]/40 backdrop-blur-xl
                  shadow-[0_0_40px_rgba(255,155,210,0.45)] hover:shadow-[0_0_60px_rgba(255,155,210,0.7)]
                  flex flex-col items-center justify-center gap-1.5
                  cursor-pointer select-none gpu-layer group
                "
              >
                <div className="flex items-center gap-1 text-sm sm:text-lg font-display font-black text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors uppercase tracking-wider">
                  <span>YOUR IDEAS</span>
                  <Sparkles className="w-4 h-4 text-[#FF9BD2] animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-[#FF9BD2]/80 uppercase tracking-widest">
                  TAP TO FIND ✦
                </span>
              </motion.button>
            ) : null}
          </AnimatePresence>

          {/* STATE B: FLOATING CHAOTIC IDEAS (~600ms) */}
          {interactiveState === 'floating' && (
            <div className="relative w-full max-w-md h-[140px] flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, x: -30, y: -25, scale: 0.8 }}
                animate={{ opacity: 0.9, x: -45, y: -30, scale: 1 }}
                className="absolute font-display font-bold text-sm sm:text-base text-[#FFF7FF]/90 drop-shadow-[0_0_10px_#FF9BD2]"
              >
                BRAND
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 30, y: -20, scale: 0.8 }}
                animate={{ opacity: 0.9, x: 45, y: -15, scale: 1 }}
                className="absolute font-display font-bold text-sm sm:text-base text-[#B388FF]/90 drop-shadow-[0_0_10px_#B388FF]"
              >
                AUDIENCE
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 5, scale: 1.1 }}
                className="absolute font-display font-bold text-base sm:text-lg text-[#FF9BD2] drop-shadow-[0_0_15px_#FF9BD2]"
              >
                STORY
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: -20, y: 25, scale: 0.8 }}
                animate={{ opacity: 0.9, x: -35, y: 30, scale: 1 }}
                className="absolute font-display font-bold text-sm sm:text-base text-[#FFB6E6]/90 drop-shadow-[0_0_10px_#FFB6E6]"
              >
                FEELING
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 25, y: 25, scale: 0.8 }}
                animate={{ opacity: 0.9, x: 40, y: 25, scale: 1 }}
                className="absolute font-display font-bold text-sm sm:text-base text-[#C4A1FF]/90 drop-shadow-[0_0_10px_#C4A1FF]"
              >
                CONTENT
              </motion.span>
            </div>
          )}

          {/* STATE C & D: STRICT ONE SINGLE HORIZONTAL LINE (BRAND → AUDIENCE → STORY → FEELING → CONTENT ✦) */}
          {(interactiveState === 'organizing' || interactiveState === 'final') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="
                w-full flex flex-row flex-nowrap items-center justify-center
                gap-1 sm:gap-2.5 md:gap-4 px-1 sm:px-4 text-center select-none gpu-layer
              "
            >
              {/* BRAND */}
              <span className="font-display font-bold text-[11px] sm:text-[15px] md:text-[22px] lg:text-[26px] text-[#FFF7FF] tracking-tight uppercase">
                BRAND
              </span>

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9BD2]/60 shrink-0" />

              {/* AUDIENCE */}
              <span className="font-display font-bold text-[11px] sm:text-[15px] md:text-[22px] lg:text-[26px] text-[#B388FF] tracking-tight uppercase">
                AUDIENCE
              </span>

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9BD2]/60 shrink-0" />

              {/* STORY */}
              <span className="font-display font-bold text-[11px] sm:text-[15px] md:text-[22px] lg:text-[26px] text-[#FFF7FF] tracking-tight uppercase">
                STORY
              </span>

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9BD2]/60 shrink-0" />

              {/* FEELING */}
              <span className="font-display font-bold text-[11px] sm:text-[15px] md:text-[22px] lg:text-[26px] text-[#FFB6E6] tracking-tight uppercase">
                FEELING
              </span>

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9BD2]/60 shrink-0" />

              {/* CONTENT ✦ */}
              <span className="font-display font-black text-[11px] sm:text-[15px] md:text-[22px] lg:text-[26px] bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent tracking-tight uppercase flex items-center gap-1 shrink-0 drop-shadow-[0_0_15px_rgba(255,155,210,0.5)]">
                <span>CONTENT</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9BD2] inline" />
              </span>
            </motion.div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 3. EXPLANATION NARRATIVE COPY (EXACT SPECIFIED WORDING) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[650px] mx-auto space-y-6 text-center pt-2">
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-[#FFF7FF]/90 font-medium leading-relaxed"
          >
            Making content is easy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-[#FFF7FF]/80 leading-relaxed"
          >
            Finding the right story, the right angle and the right way to communicate it — that's the interesting part.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4 pt-2 text-sm sm:text-base md:text-lg text-[#FFF7FF]/75 leading-relaxed"
          >
            <p>
              I want to understand your business, your personality, your audience and what you're trying to say.
            </p>
            <p className="font-semibold text-[#FFF7FF]">
              Then we make something that feels like you, not something copied from everyone else.
            </p>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* 4. SECTION END: STRATEGY + CREATIVITY + EXECUTION. */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-8 sm:pt-12 border-t border-white/10 w-full"
        >
          <p className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-wider uppercase bg-gradient-to-r from-[#FFF7FF] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent">
            STRATEGY <span className="text-[#FF9BD2]">+</span> CREATIVITY <span className="text-[#FF9BD2]">+</span> EXECUTION.
          </p>
        </motion.div>

      </div>

    </section>
  );
};
