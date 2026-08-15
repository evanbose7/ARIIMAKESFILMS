import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

export interface PortfolioProjectItem {
  id: string;
  category: 'REELS' | 'YOUTUBE';
  numberLabel: string;
  categoryLabel: string;
  title: string;
  description: string;
  aspectRatio: '9/16' | '16/9';
  gradientBg: string;
  videoPlaceholderUrl?: string;
}

export const REEL_PROJECTS: PortfolioProjectItem[] = [
  {
    id: 'reel-01',
    category: 'REELS',
    numberLabel: '01 / 04',
    categoryLabel: 'SOCIAL CONTENT / REELS',
    title: 'VIRAL REEL CAMPAIGN 01',
    description: 'Dynamic pacing, high-converting hooks, and luxury audio integration designed for feed retention and brand equity.',
    aspectRatio: '9/16',
    gradientBg: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30',
  },
  {
    id: 'reel-02',
    category: 'REELS',
    numberLabel: '02 / 04',
    categoryLabel: 'SOCIAL CONTENT / REELS',
    title: 'SHORT-FORM BRAND EDIT 02',
    description: 'Creator-led short-form production combining aesthetic visual rhythm with platform-native audience engagement.',
    aspectRatio: '9/16',
    gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30',
  },
  {
    id: 'reel-03',
    category: 'REELS',
    numberLabel: '03 / 04',
    categoryLabel: 'SOCIAL CONTENT / REELS',
    title: 'TIKTOK CREATOR CUT 03',
    description: 'Platform-native hook design and dynamic editing structure built for maximum organic feed reach.',
    aspectRatio: '9/16',
    gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30',
  },
  {
    id: 'reel-04',
    category: 'REELS',
    numberLabel: '04 / 04',
    categoryLabel: 'SOCIAL CONTENT / REELS',
    title: 'INSTAGRAM BRAND STORY 04',
    description: 'Aesthetic visual sequence with crisp audio timing and elevated narrative pacing.',
    aspectRatio: '9/16',
    gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30',
  },
];

export const YOUTUBE_PROJECTS: PortfolioProjectItem[] = [
  {
    id: 'yt-01',
    category: 'YOUTUBE',
    numberLabel: '01 / 04',
    categoryLabel: 'YOUTUBE / LONG-FORM',
    title: 'FEATURED YOUTUBE FILM 01',
    description: 'Complete YouTube channel production: strategy, hook design, retention structure, and narrative flow.',
    aspectRatio: '16/9',
    gradientBg: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40',
  },
  {
    id: 'yt-02',
    category: 'YOUTUBE',
    numberLabel: '02 / 04',
    categoryLabel: 'YOUTUBE / LONG-FORM',
    title: 'CREATIVE PROCESS EPISODE 02',
    description: 'Documentary-style YouTube episode following an idea from first thought to final execution.',
    aspectRatio: '16/9',
    gradientBg: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30',
  },
  {
    id: 'yt-03',
    category: 'YOUTUBE',
    numberLabel: '03 / 04',
    categoryLabel: 'YOUTUBE / LONG-FORM',
    title: 'DOCUMENTARY YOUTUBE ESSAY 03',
    description: 'Deep-dive visual essay exploring branding, digital culture, and cinematic storytelling.',
    aspectRatio: '16/9',
    gradientBg: 'from-[#6D4AFF]/45 via-[#140824] to-[#FF9BD2]/30',
  },
  {
    id: 'yt-04',
    category: 'YOUTUBE',
    numberLabel: '04 / 04',
    categoryLabel: 'YOUTUBE / LONG-FORM',
    title: 'BRANDED YOUTUBE SPECIAL 04',
    description: 'High-production channel feature blending cinematic narrative with long-term brand equity.',
    aspectRatio: '16/9',
    gradientBg: 'from-[#FFB6E6]/40 via-[#140824] to-[#B388FF]/30',
  },
];

interface PortfolioSectionProps {
  onOpenWorkModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenWorkModal }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>('reel-01');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [controlsHovered, setControlsHovered] = useState<boolean>(false);

  // IntersectionObserver to auto-detect current active frame centered in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.4,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projId = entry.target.getAttribute('data-project-id');
          if (projId) {
            setActiveProjectId(projId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('[data-project-id]');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen py-24 sm:py-36 px-4 sm:px-8 overflow-hidden z-20 bg-[#100719] text-[#FFF7FF] select-none">
      
      {/* 1. ATMOSPHERIC CINEMATIC RADIAL LIGHTING THAT FOLLOWS ACTIVE SCENE */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[92vw] max-w-[1200px] h-[700px] opacity-35 blur-[100px] md:blur-[180px] pointer-events-none rounded-full transition-all duration-1000"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 40%, #100719 80%, transparent 100%)',
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center relative z-20 space-y-24 sm:space-y-36">

        {/* ========================================================================= */}
        {/* INITIAL PORTFOLIO ENTRANCE: SOME THINGS I'VE MADE. / LET THE WORK SPEAK. */}
        {/* ========================================================================= */}
        <div className="w-full text-center space-y-5 pt-8 sm:pt-12">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFE6FA] shadow-[0_0_20px_rgba(255,155,210,0.3)]"
          >
            <span>PORTFOLIO</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="
              font-display font-black uppercase
              text-[clamp(40px,9.5vw,64px)] md:text-[clamp(76px,7.5vw,108px)]
              leading-[0.88] tracking-[-0.03em] text-center
              bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(255,155,210,0.45)]
            "
          >
            SOME THINGS<br className="hidden sm:block" /> I'VE MADE.
          </motion.h2>

          {/* Supporting Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FF9BD2] tracking-wide pt-2"
          >
            LET THE WORK SPEAK. ✦
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY 1: SOCIAL CONTENT / INSTAGRAM REELS (9:16 VERTICAL REVEALS) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-24 sm:space-y-40">
          
          {/* Category Header Label */}
          <div className="w-full max-w-[850px] flex items-center justify-between border-b border-white/10 pb-4 text-left">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF9BD2] uppercase">
              ✦ SOCIAL CONTENT / REELS
            </span>
            <span className="font-mono text-xs text-white/40 uppercase">
              01 – 04 ARCHIVE
            </span>
          </div>

          {/* REELS 01 – 04 SEQUENTIAL REVEALS */}
          {REEL_PROJECTS.map((proj) => {
            const isActive = activeProjectId === proj.id;

            return (
              <div
                key={proj.id}
                data-project-id={proj.id}
                className="w-full flex flex-col items-center justify-center space-y-8 sm:space-y-10 scroll-mt-24"
              >
                {/* 9:16 VERTICAL CINEMATIC VIDEO FRAME (88-92VW MOBILE, 75-85VW MAX DESKTOP) */}
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.92, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setControlsHovered(true)}
                  onMouseLeave={() => setControlsHovered(false)}
                  className={`
                    relative w-[88vw] sm:w-[380px] md:w-[440px] aspect-[9/16]
                    rounded-[28px] sm:rounded-[36px] overflow-hidden
                    border border-white/20 bg-gradient-to-br ${proj.gradientBg}
                    shadow-[0_20px_60px_rgba(0,0,0,0.85)]
                    transition-all duration-700 gpu-layer cursor-pointer group
                    ${isActive ? 'shadow-[0_0_50px_rgba(255,155,210,0.4)] border-[#FF9BD2]/60' : 'opacity-85'}
                  `}
                >
                  {/* Subtle Light Leak Rim & Grain */}
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[28px] sm:rounded-[36px] shadow-[inset_0_0_35px_rgba(16,7,25,0.8)]" />
                  <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-30 mix-blend-overlay" />

                  {/* VIDEO POSTER & SIMULATED PLAYBACK LAYER */}
                  <div className="relative w-full h-full flex flex-col justify-between p-6 z-10">
                    
                    {/* Top Frame Status: Number & Live Indicator */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-3 py-1 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#FF9BD2] shadow-[0_0_10px_#FF9BD2]' : 'text-white/70'}`}>
                        {proj.numberLabel}
                      </span>
                      
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] text-white/80 font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#FF9BD2] animate-ping" />
                        <span>REEL PREVIEW</span>
                      </div>
                    </div>

                    {/* Center Play Icon & Poster Interlaced Visual */}
                    <div className="my-auto flex flex-col items-center justify-center text-center space-y-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF9BD2] text-[#100719] flex items-center justify-center shadow-[0_0_35px_rgba(255,155,210,0.75)] cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-0.5" />
                        ) : (
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        )}
                      </motion.div>
                      
                      <span className="text-xs font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10">
                        {proj.title}
                      </span>
                    </div>

                    {/* Bottom Frame Controls: Mute Toggle */}
                    <div className={`flex items-center justify-between pt-4 border-t border-white/15 transition-opacity duration-300 ${controlsHovered || isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-[#FFF7FF] hover:text-[#FF9BD2] transition-colors"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-4 h-4 text-[#FF9BD2]" />
                            <span>MUTED</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 text-[#FF9BD2]" />
                            <span>SOUND ON</span>
                          </>
                        )}
                      </button>

                      <span className="text-[10px] font-mono text-white/50 uppercase">
                        9:16 VERTICAL
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* PROJECT INFORMATION BELOW REEL */}
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full max-w-[650px] text-center space-y-3 px-4"
                >
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                    <span>{proj.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-[#FFF7FF]">{proj.numberLabel}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-4xl text-[#FFF7FF] tracking-tight uppercase">
                    {proj.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-[#FFF7FF]/80 leading-relaxed font-normal max-w-[550px] mx-auto">
                    {proj.description}
                  </p>

                  {/* VIEW PROJECT ↗ MINIMAL TEXT LINK */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenWorkModal}
                      className="
                        inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                        text-sm sm:text-base font-mono font-bold text-[#FF9BD2] hover:text-[#FFF7FF]
                        transition-colors group min-h-[44px] cursor-pointer select-none
                      "
                    >
                      <span className="underline underline-offset-4 decoration-[#FF9BD2]/50 group-hover:decoration-[#FFF7FF]">
                        VIEW PROJECT
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>

        {/* ========================================================================= */}
        {/* CINEMATIC CATEGORY CHANGE INTERLUDE: REELS → YOUTUBE / LONG-FORM */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          className="w-full py-20 sm:py-32 flex flex-col items-center justify-center text-center space-y-6 relative"
        >
          {/* Thin Pink Light Sweep Divider */}
          <div className="w-full max-w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#FF9BD2] to-transparent shadow-[0_0_15px_#FF9BD2]" />
          
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF9BD2]/80">
            ✦ NEXT CHAPTER ✦
          </span>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight bg-gradient-to-r from-[#FFF7FF] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,155,210,0.4)]">
            YOUTUBE <span className="text-[#FF9BD2] font-light">/</span> LONG-FORM
          </h2>

          <p className="font-serif italic text-base sm:text-xl text-[#FFF7FF]/70 max-w-[450px]">
            Widescreen channel storytelling, documentary flow & visual essays.
          </p>

          <div className="w-full max-w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#B388FF] to-transparent shadow-[0_0_15px_#B388FF]" />
        </motion.div>

        {/* ========================================================================= */}
        {/* CATEGORY 2: YOUTUBE / LONG-FORM (4 WIDESCREEN 16:9 REVEALS) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-28 sm:space-y-44">
          
          {/* Category Header Label */}
          <div className="w-full max-w-[950px] flex items-center justify-between border-b border-white/10 pb-4 text-left">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B388FF] uppercase">
              ✦ YOUTUBE / LONG-FORM
            </span>
            <span className="font-mono text-xs text-white/40 uppercase">
              01 – 04 ARCHIVE
            </span>
          </div>

          {/* YOUTUBE 01 – 04 SEQUENTIAL REVEALS */}
          {YOUTUBE_PROJECTS.map((proj) => {
            const isActive = activeProjectId === proj.id;

            return (
              <div
                key={proj.id}
                data-project-id={proj.id}
                className="w-full flex flex-col items-center justify-center space-y-8 sm:space-y-10 scroll-mt-24"
              >
                {/* 16:9 WIDESCREEN CINEMATIC VIDEO FRAME (88-92VW MOBILE, 75-85VW MAX DESKTOP) */}
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.94, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setControlsHovered(true)}
                  onMouseLeave={() => setControlsHovered(false)}
                  className={`
                    relative w-[92vw] sm:w-[680px] md:w-[840px] lg:w-[980px] aspect-[16/9]
                    rounded-[28px] sm:rounded-[36px] overflow-hidden
                    border border-white/20 bg-gradient-to-br ${proj.gradientBg}
                    shadow-[0_25px_70px_rgba(0,0,0,0.88)]
                    transition-all duration-700 gpu-layer cursor-pointer group
                    ${isActive ? 'shadow-[0_0_60px_rgba(179,136,255,0.45)] border-[#B388FF]/60' : 'opacity-85'}
                  `}
                >
                  {/* Subtle Light Leak Rim & Grain */}
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[28px] sm:rounded-[36px] shadow-[inset_0_0_40px_rgba(16,7,25,0.85)]" />
                  <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-30 mix-blend-overlay" />

                  {/* VIDEO POSTER & SIMULATED PLAYBACK LAYER */}
                  <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                    
                    {/* Top Frame Status */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-3 py-1 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#B388FF] shadow-[0_0_10px_#B388FF]' : 'text-white/70'}`}>
                        {proj.numberLabel}
                      </span>
                      
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] text-white/80 font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#B388FF] animate-ping" />
                        <span>WIDESCREEN FILM</span>
                      </div>
                    </div>

                    {/* Center Play Icon & Title Visual */}
                    <div className="my-auto flex flex-col items-center justify-center text-center space-y-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#B388FF] text-[#100719] flex items-center justify-center shadow-[0_0_40px_rgba(179,136,255,0.8)] cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-0.5" />
                        ) : (
                          <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                        )}
                      </motion.div>
                      
                      <span className="text-xs font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-3.5 py-1 rounded-full border border-white/10">
                        {proj.title}
                      </span>
                    </div>

                    {/* Bottom Frame Controls: Mute Toggle */}
                    <div className={`flex items-center justify-between pt-4 border-t border-white/15 transition-opacity duration-300 ${controlsHovered || isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-[#FFF7FF] hover:text-[#B388FF] transition-colors"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-4 h-4 text-[#B388FF]" />
                            <span>MUTED</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 text-[#B388FF]" />
                            <span>SOUND ON</span>
                          </>
                        )}
                      </button>

                      <span className="text-[10px] font-mono text-white/50 uppercase">
                        16:9 WIDESCREEN
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* PROJECT INFORMATION BELOW YOUTUBE FILM */}
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full max-w-[700px] text-center space-y-3 px-4"
                >
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-widest text-[#B388FF] uppercase">
                    <span>{proj.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-[#FFF7FF]">{proj.numberLabel}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#FFF7FF] tracking-tight uppercase">
                    {proj.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-[#FFF7FF]/80 leading-relaxed font-normal max-w-[600px] mx-auto">
                    {proj.description}
                  </p>

                  {/* VIEW PROJECT ↗ MINIMAL TEXT LINK */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenWorkModal}
                      className="
                        inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                        text-sm sm:text-base font-mono font-bold text-[#B388FF] hover:text-[#FFF7FF]
                        transition-colors group min-h-[44px] cursor-pointer select-none
                      "
                    >
                      <span className="underline underline-offset-4 decoration-[#B388FF]/50 group-hover:decoration-[#FFF7FF]">
                        VIEW PROJECT
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>

        {/* ========================================================================= */}
        {/* FINAL PROJECT CLIMAX & PORTFOLIO OUTRO */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="w-full pt-16 sm:pt-28 pb-8 flex flex-col items-center justify-center text-center space-y-6"
        >
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF9BD2] uppercase">
            ✦ THAT'S THE WORK ✦
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FFF7FF] uppercase tracking-tight max-w-[800px]">
            THAT'S THE WORK.<br />
            <span className="bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent">
              AND THERE'S MORE TO COME.
            </span>
          </h2>

          <div className="pt-4">
            <button
              onClick={onOpenWorkModal}
              className="
                px-8 py-4 rounded-full
                bg-gradient-to-r from-[#FF9BD2] to-[#B388FF]
                text-[#100719] font-display font-bold text-xs sm:text-sm tracking-widest uppercase
                shadow-[0_0_30px_rgba(255,155,210,0.5)] hover:shadow-[0_0_45px_rgba(255,155,210,0.7)]
                flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[48px]
              "
            >
              <span>VIEW ALL WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
