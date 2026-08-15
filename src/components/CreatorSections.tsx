import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Tv, Film, Heart } from 'lucide-react';

interface CreatorSectionsProps {
  onPlayReel?: (title: string) => void;
}

export const CreatorSections: React.FC<CreatorSectionsProps> = ({ onPlayReel }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-24 z-20">
      
      {/* 1. YOUTUBE SECTION */}
      <section id="youtube-section" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2]/40 text-[#FF9BD2]">
            <Tv className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#FF9BD2] uppercase">01 • LONG FORM CONTENT</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-[#FFF7FF]">YOUTUBE CREATIONS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => onPlayReel?.('THE ART OF AI CINEMATOGRAPHY (DOCUMENTARY)')}
            className="group relative h-72 rounded-3xl overflow-hidden bg-[#2A1247]/60 border border-white/14 hover:border-[#FF9BD2] transition-all duration-500 cursor-pointer p-6 flex flex-col justify-between chip-glass"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0718] via-[#0F0718]/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest text-[#FF9BD2] uppercase px-3 py-1 rounded-full bg-black/60 border border-[#FF9BD2]/30">
                1080P • 14:20
              </span>
              <div className="w-10 h-10 rounded-full bg-[#FF9BD2] text-[#1A1026] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="relative z-20 space-y-1">
              <h3 className="font-display font-bold text-xl text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors">
                The Art of AI Cinematography
              </h3>
              <p className="text-xs text-[#FFF7FF]/70 line-clamp-2">
                Deep dive into generative video storytelling pipelines, prompt engineering, and cinematic color grading.
              </p>
            </div>
          </div>

          <div 
            onClick={() => onPlayReel?.('FOUNDER MANIFESTO: ZERO TO ONE')}
            className="group relative h-72 rounded-3xl overflow-hidden bg-[#2A1247]/60 border border-white/14 hover:border-[#B388FF] transition-all duration-500 cursor-pointer p-6 flex flex-col justify-between chip-glass"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0718] via-[#0F0718]/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest text-[#B388FF] uppercase px-3 py-1 rounded-full bg-black/60 border border-[#B388FF]/30">
                4K • 18:45
              </span>
              <div className="w-10 h-10 rounded-full bg-[#B388FF] text-[#1A1026] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="relative z-20 space-y-1">
              <h3 className="font-display font-bold text-xl text-[#FFF7FF] group-hover:text-[#B388FF] transition-colors">
                Founder Manifesto: Zero to One
              </h3>
              <p className="text-xs text-[#FFF7FF]/70 line-clamp-2">
                Brand narrative case study on turning abstract ideas into unforgettable visual identities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REELS SECTION */}
      <section id="reels-section" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#B388FF]/20 border border-[#B388FF]/40 text-[#B388FF]">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#B388FF] uppercase">02 • SHORT FORM VIRAL</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-[#FFF7FF]">REELS & TIKTOK</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['AURA LAUNCH REEL', 'CYBERPUNK AI HOOK', 'LUXURY UGC SHOWCASE', 'FAST PACED SPEED RAMP'].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              onClick={() => onPlayReel?.(title)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-[#2A1247]/60 border border-white/14 hover:border-[#FF9BD2] transition-all duration-300 cursor-pointer p-4 flex flex-col justify-between chip-glass"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0718] via-[#0F0718]/30 to-transparent z-10" />
              <span className="relative z-20 text-[10px] font-mono text-[#FF9BD2] uppercase bg-black/60 px-2 py-0.5 rounded-full border border-[#FF9BD2]/30 w-fit">
                9:16 REEL
              </span>
              <div className="relative z-20 space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#FF9BD2] text-[#1A1026] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors">
                  {title}
                </h4>
                <p className="text-[10px] text-[#FFF7FF]/60">2.4M+ Views</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. BRAND WORKS SECTION */}
      <section id="brand-works-section" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#FFB6E6]/20 border border-[#FFB6E6]/40 text-[#FFB6E6]">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#FFB6E6] uppercase">03 • CLIENT CAMPAIGNS</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-[#FFF7FF]">BRAND WORKS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { client: 'NIKE ULTRA', role: 'AI CINEMATOGRAPHY', desc: 'Custom AI visual direction & campaign trailer.' },
            { client: 'TECHFEST 2026', role: 'KEYNOTE EDITING', desc: 'High-energy mainstage teaser & social cuts.' },
            { client: 'AURA BEAUTY', role: 'FOUNDER UGC & STRATEGY', desc: '360° viral UGC retention framework.' }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onPlayReel?.(`${item.client} CAMPAIGN`)}
              className="group relative h-64 rounded-3xl overflow-hidden bg-[#2A1247]/60 border border-white/14 hover:border-[#FF9BD2] transition-all duration-300 cursor-pointer p-6 flex flex-col justify-between chip-glass"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0718] via-transparent to-transparent z-10" />
              <div className="relative z-20 flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-[#FFD6F5] uppercase px-3 py-1 rounded-full bg-black/60 border border-[#FF9BD2]/30">
                  {item.role}
                </span>
                <Sparkles className="w-4 h-4 text-[#FF9BD2] group-hover:rotate-12 transition-transform" />
              </div>
              <div className="relative z-20 space-y-1">
                <h3 className="font-display font-bold text-xl text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors">
                  {item.client}
                </h3>
                <p className="text-xs text-[#FFF7FF]/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
