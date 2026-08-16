import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden z-20 bg-[#100719] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* 1. ATMOSPHERIC SOFT PURPLE SILK RADIAL GLOW */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-25 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 45%, #100719 80%, transparent 100%)',
        }}
      />

      {/* MAIN CONTAINER CAPPED TO MAX WIDTH 760PX */}
      <div className="w-full max-w-[760px] mx-auto flex flex-col items-center text-center space-y-10 relative z-20">

        {/* EYEBROW BADGE: NEXT CHAPTER ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-white/[0.06] border border-white/[0.12] backdrop-blur-[16px]
            text-[11px] font-bold tracking-[0.18em] uppercase text-[#FFE6FA]
            shadow-[0_0_15px_rgba(255,155,210,0.3)]
          "
        >
          <span>NEXT CHAPTER</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </motion.div>

        {/* FINAL CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="w-full space-y-4 pt-4"
        >
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFF7FF] tracking-tight">
            GOOD CONTENT ISN'T BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF]">
              IN ONE POST.
            </span>
          </h3>

          <p className="text-sm sm:text-base font-normal text-[#FFF7FF]/76 max-w-[34ch] mx-auto leading-relaxed">
            It's built through understanding, experimentation, and getting better together.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
