import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { FileText, Sparkles, ArrowDown, Play, ExternalLink } from 'lucide-react';

interface NextSectionPreviewProps {
  scrollYProgress: MotionValue<number>;
  onWorkClick?: (workTitle: string) => void;
}

export const NextSectionPreview: React.FC<NextSectionPreviewProps> = ({
  scrollYProgress,
  onWorkClick,
}) => {
  // Transform scroll progress from 0 to 0.25 (first 20-25vh of scroll)
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.20], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.05, 0.20], [100, 0]);
  const cardScale = useTransform(scrollYProgress, [0.05, 0.20], [0.95, 1]);

  return (
    <motion.section
      id="next-section"
      style={{
        opacity: cardOpacity,
        y: cardY,
        scale: cardScale,
      }}
      className="relative w-full min-h-screen py-20 px-4 md:px-8 z-30 max-w-6xl mx-auto gpu-layer"
    >
      {/* Scroll Indicator Divider */}
      <div className="flex flex-col items-center justify-center my-8 text-center">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#C7A56A] uppercase mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 animate-spin" /> SECTION 02 — THE METHODOLOGY
        </span>
        <ArrowDown className="w-4 h-4 text-[#C7A56A]/60 animate-bounce" />
      </div>

      {/* Blurred Handwritten-Note Texture Container */}
      <div className="
        relative w-full rounded-3xl p-6 md:p-12 overflow-hidden
        bg-[#14141A]/90 backdrop-blur-xl border border-white/[0.08]
        shadow-[0_30px_100px_rgba(0,0,0,0.8)]
        gold-rim-light
      ">
        {/* Subtle Paper / Note Texture Overlay */}
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

        {/* Ambient Subtle Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C7A56A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Handwritten Note Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A56A]/10 border border-[#C7A56A]/30 text-[#C7A56A] text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>DIRECTOR'S NOTE</span>
            </div>

            <blockquote className="font-serif italic text-2xl md:text-3xl text-[#F5F3EE] leading-tight font-light border-l-2 border-[#C7A56A] pl-4 py-1">
              "Great content isn't just shot; it is engineered from human psychology, elevated by AI, and sculpted into cinematic storytelling."
            </blockquote>

            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed font-sans">
              Every project starts with a raw idea. By pairing high-level brand strategy with cutting-edge generative AI workflows and fine-tuned video editing, I turn abstract thoughts into viral, high-converting brand stories.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#C7A56A]">
              <span>✦ 50M+ Organic Views</span>
              <span>✦ 40+ Campaigns Executed</span>
            </div>
          </div>

          {/* Right Column: Selected Works Teaser Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Work Card 1 */}
            <div 
              onClick={() => onWorkClick?.('AI Cinematic Reel 2026')}
              className="group relative h-64 rounded-2xl overflow-hidden bg-[#0B0B0F] border border-white/10 hover:border-[#C7A56A]/50 transition-all duration-500 cursor-pointer p-5 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#C7A56A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-20 flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#C7A56A] uppercase px-2 py-0.5 rounded bg-black/60 border border-[#C7A56A]/30">
                  AI VIDEO
                </span>
                <Play className="w-5 h-5 text-[#C7A56A] group-hover:scale-125 transition-transform duration-300" />
              </div>

              <div className="relative z-20 space-y-1">
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#C7A56A] transition-colors">
                  Aura: Generative Cinema
                </h4>
                <p className="text-xs text-white/60 line-clamp-2">
                  Full AI storytelling campaign for luxury tech brand with 12M+ reach.
                </p>
              </div>
            </div>

            {/* Work Card 2 */}
            <div 
              onClick={() => onWorkClick?.('Founder UGC Strategy')}
              className="group relative h-64 rounded-2xl overflow-hidden bg-[#0B0B0F] border border-white/10 hover:border-[#C7A56A]/50 transition-all duration-500 cursor-pointer p-5 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#C7A56A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-20 flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#C7A56A] uppercase px-2 py-0.5 rounded bg-black/60 border border-[#C7A56A]/30">
                  STRATEGY & UGC
                </span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-[#C7A56A] transition-colors" />
              </div>

              <div className="relative z-20 space-y-1">
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#C7A56A] transition-colors">
                  Zero to 100k Founder Series
                </h4>
                <p className="text-xs text-white/60 line-clamp-2">
                  Multi-platform video system designed to convert audience into brand loyalists.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};
