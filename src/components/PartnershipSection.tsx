import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 z-20 bg-transparent text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* MAIN CONTAINER (CLEAN TEXT, NO HORIZONTAL LINES) */}
      <div className="w-full max-w-[720px] mx-auto text-center flex flex-col items-center space-y-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center space-y-6"
        >
          {/* EYEBROW BADGE: NEXT CHAPTER ✦ */}
          <div className="
            inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-white/[0.08] border border-white/[0.14] backdrop-blur-[16px]
            text-[11px] font-bold tracking-[0.18em] uppercase text-[#FFE6FA]
            shadow-[0_0_15px_rgba(255,155,210,0.3)]
          ">
            <span>NEXT CHAPTER</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </div>

          {/* FINAL CLOSING STATEMENT */}
          <div className="space-y-4 pt-2">
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#FFF7FF] tracking-tight uppercase leading-[1.05] drop-shadow-[0_0_35px_rgba(255,155,210,0.35)]">
              GOOD CONTENT ISN'T BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF]">
                IN ONE POST.
              </span>
            </h3>

            <p className="text-sm sm:text-base font-normal text-[#FFF7FF]/80 max-w-[36ch] mx-auto leading-relaxed font-sans">
              It's built through understanding, experimentation, and getting better together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
