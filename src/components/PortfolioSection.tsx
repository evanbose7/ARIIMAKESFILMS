import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Pause, Volume2, VolumeX, ArrowUpRight, Film, Tv, Wand2, Video, Compass, Heart } from 'lucide-react';

export interface ProjectCardItem {
  id: string;
  numberLabel: string;
  title: string;
  description: string;
  aspectRatio: '9/16' | '16/9';
  gradientBg: string;
}

export interface PortfolioCategoryData {
  id: string;
  eyebrowLabel: string;
  title: string;
  subhead: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  aspectRatio: '9/16' | '16/9';
  mobileCardWidth: string; // e.g., 'w-[75vw]' for 9:16 or 'w-[88vw]' for 16:9
  projects: ProjectCardItem[];
}

export const PORTFOLIO_SECTIONS: PortfolioCategoryData[] = [
  // 1. SOCIAL CONTENT
  {
    id: 'social-content',
    eyebrowLabel: '01 / 06 ✦ INSTAGRAM & REELS',
    title: 'SOCIAL CONTENT',
    subhead: 'Short-form content made to stop the scroll.',
    icon: Film,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-[76vw] sm:w-[320px]',
    projects: [
      { id: 'sc-1', numberLabel: '01 / 04', title: 'VIRAL REEL CAMPAIGN 01', description: 'Pacing, hook design, and luxury audio integration designed for feed retention.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30' },
      { id: 'sc-2', numberLabel: '02 / 04', title: 'SHORT-FORM BRAND EDIT 02', description: 'Creator-led video bringing aesthetic visual rhythm and audience engagement.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30' },
      { id: 'sc-3', numberLabel: '03 / 04', title: 'TIKTOK CREATOR CUT 03', description: 'Platform-native hook design and dynamic editing structure for organic reach.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30' },
      { id: 'sc-4', numberLabel: '04 / 04', title: 'INSTAGRAM BRAND STORY 04', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30' },
    ],
  },

  // 2. AI VIDEO
  {
    id: 'ai-video',
    eyebrowLabel: '02 / 06 ✦ SYNTHETIC MOTION',
    title: 'AI VIDEO',
    subhead: 'Surreal visual poetry & synthetic motion concepts.',
    icon: Wand2,
    accentColor: '#C084FC',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-[76vw] sm:w-[320px]',
    projects: [
      { id: 'ai-1', numberLabel: '01 / 03', title: 'SURREAL VISUAL STORY 01', description: 'AI-assisted concept edit transforming static photographs into visual poetry.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#FF9BD2]/30' },
      { id: 'ai-2', numberLabel: '02 / 03', title: 'CONCEPTUAL PRODUCT REEL 02', description: 'Combining synthetic visual layers with real footage for luxury product storytelling.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#B388FF]/30' },
      { id: 'ai-3', numberLabel: '03 / 03', title: 'SYNTHETIC MOTION EDIT 03', description: 'AI motion generation expanding creative ideas into digital landscapes.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30' },
    ],
  },

  // 3. VIDEO EDITING
  {
    id: 'video-editing',
    eyebrowLabel: '03 / 06 ✦ RETENTION & RHYTHM',
    title: 'VIDEO EDITING',
    subhead: 'Mastering rhythm, audio hooks & retention cuts.',
    icon: Compass,
    accentColor: '#FFB6E6',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-[76vw] sm:w-[320px]',
    projects: [
      { id: 've-1', numberLabel: '01 / 03', title: 'CINEMATIC RHYTHM EDIT 01', description: 'Fast-paced social edit with custom audio hooks and editorial color grading.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30' },
      { id: 've-2', numberLabel: '02 / 03', title: 'BRAND DOCUMENTARY CUT 02', description: 'Refined narrative pacing, voiceover synchronization, and clean cuts.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30' },
      { id: 've-3', numberLabel: '03 / 03', title: 'PACING & AUDIO HOOK EDIT 03', description: 'Mastering micro-transitions and audio timing to maximize audience retention.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30' },
    ],
  },

  // 4. UGC
  {
    id: 'ugc',
    eyebrowLabel: '04 / 06 ✦ CREATOR-LED',
    title: 'UGC',
    subhead: 'Authentic, creator-led visual stories.',
    icon: Heart,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-[76vw] sm:w-[320px]',
    projects: [
      { id: 'ugc-1', numberLabel: '01 / 03', title: 'CREATOR UGC CAMPAIGN 01', description: 'Relatable, human-centric short-form story designed to feel organic on feed.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30' },
      { id: 'ugc-2', numberLabel: '02 / 03', title: 'LIFESTYLE BEAUTY UGC 02', description: 'Natural lighting, authentic product experience, and high-converting hook pacing.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30' },
      { id: 'ugc-3', numberLabel: '03 / 03', title: 'AUTHENTIC PRODUCT STORY 03', description: 'Creator-led video bringing genuine emotion and audience trust to visual storytelling.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30' },
    ],
  },

  // 5. YOUTUBE
  {
    id: 'youtube',
    eyebrowLabel: '05 / 06 ✦ CINEMATIC WIDESCREEN',
    title: 'YOUTUBE',
    subhead: 'Longer stories. More room to tell them.',
    icon: Tv,
    accentColor: '#B388FF',
    aspectRatio: '16/9',
    mobileCardWidth: 'w-[88vw] sm:w-[540px]',
    projects: [
      { id: 'yt-1', numberLabel: '01 / 04', title: 'FEATURED YOUTUBE FILM 01', description: 'Complete YouTube channel production: strategy, hook design, retention structure, and narrative flow.', aspectRatio: '16/9', gradientBg: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40' },
      { id: 'yt-2', numberLabel: '02 / 04', title: 'CREATIVE PROCESS EPISODE 02', description: 'Documentary-style YouTube episode following an idea from first thought to final execution.', aspectRatio: '16/9', gradientBg: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30' },
      { id: 'yt-3', numberLabel: '03 / 04', title: 'DOCUMENTARY YOUTUBE ESSAY 03', description: 'Deep-dive visual essay exploring branding, digital culture, and cinematic storytelling.', aspectRatio: '16/9', gradientBg: 'from-[#6D4AFF]/45 via-[#140824] to-[#FF9BD2]/30' },
      { id: 'yt-4', numberLabel: '04 / 04', title: 'BRANDED YOUTUBE SPECIAL 04', description: 'High-production channel feature blending cinematic narrative with long-term brand equity.', aspectRatio: '16/9', gradientBg: 'from-[#FFB6E6]/40 via-[#140824] to-[#B388FF]/30' },
    ],
  },

  // 6. LONG-FORM
  {
    id: 'long-form',
    eyebrowLabel: '06 / 06 ✦ DOCUMENTARY FILMS',
    title: 'LONG-FORM',
    subhead: 'Documentary brand films & cinematic narrative essays.',
    icon: Video,
    accentColor: '#C4A1FF',
    aspectRatio: '16/9',
    mobileCardWidth: 'w-[88vw] sm:w-[540px]',
    projects: [
      { id: 'lf-1', numberLabel: '01 / 03', title: 'DOCUMENTARY BRAND FILM 01', description: 'Widescreen cinematic narrative exploring human depth behind brand origins.', aspectRatio: '16/9', gradientBg: 'from-[#FF9BD2]/40 via-[#120822] to-[#B388FF]/30' },
      { id: 'lf-2', numberLabel: '02 / 03', title: 'CINEMATIC ESSAY 02', description: 'Editorial long-form production featuring ambient visual storytelling and score.', aspectRatio: '16/9', gradientBg: 'from-[#B388FF]/40 via-[#120822] to-[#FFB6E6]/30' },
      { id: 'lf-3', numberLabel: '03 / 03', title: 'EPISODIC BRAND STORY 03', description: 'Multi-part video series built for deep engagement and long-term brand equity.', aspectRatio: '16/9', gradientBg: 'from-[#6D4AFF]/40 via-[#120822] to-[#FF9BD2]/30' },
    ],
  },
];

interface PortfolioSectionProps {
  onOpenWorkModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenWorkModal }) => {
  const [activeCardIds, setActiveCardIds] = useState<{ [key: string]: number }>({});
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Handle Carousel Scroll Event to Update Active Index & Indicator Dots
  const handleCarouselScroll = (sectionId: string, e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const cardWidth = target.firstElementChild?.clientWidth || 300;
    const newIdx = Math.round(scrollLeft / (cardWidth + 16));
    
    setActiveCardIds((prev) => ({
      ...prev,
      [sectionId]: Math.max(0, newIdx),
    }));
  };

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-32 overflow-hidden z-20 bg-[#10081B] text-[#FFF7FF] select-none">
      
      {/* 1. ATMOSPHERIC SOFT PURPLE SILK RADIAL GLOW */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] opacity-25 blur-[180px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #6D4AFF 45%, #10081B 80%, transparent 100%)',
        }}
      />

      {/* MAIN SECTION CONTAINER */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center relative z-20 space-y-16 sm:space-y-24">

        {/* ========================================================================= */}
        {/* SECTION INTRO & HEADER */}
        {/* ========================================================================= */}
        <div className="w-full text-center space-y-4 px-4 sm:px-6 pt-4">
          
          {/* Eyebrow Badge: 09 — PORTFOLIO */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFE6FA] shadow-[0_0_20px_rgba(255,155,210,0.3)]"
          >
            <span>09 — PORTFOLIO</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          {/* Section Main Title: SOME THINGS I'VE MADE. */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="
              font-display font-black uppercase
              text-[clamp(36px,8vw,56px)] md:text-[clamp(64px,6vw,92px)]
              leading-[0.92] tracking-[-0.03em] text-center
              bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
              drop-shadow-[0_0_35px_rgba(255,155,210,0.45)]
            "
          >
            SOME THINGS<br className="hidden sm:block" /> I'VE MADE.
          </motion.h2>

          {/* Supporting Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif italic text-base sm:text-xl text-[#FF9BD2] max-w-[560px] mx-auto pt-1"
          >
            A few things I've made across social, video, AI and long-form content. ✦
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* THE 6 PORTFOLIO SUBSECTIONS (HORIZONTAL SWIPE CAROUSELS) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col space-y-20 sm:space-y-28">
          {PORTFOLIO_SECTIONS.map((section) => {
            const Icon = section.icon;
            const activeIdx = activeCardIds[section.id] || 0;

            return (
              <div key={section.id} className="w-full flex flex-col space-y-6 text-left">
                
                {/* SUBSECTION HEADER */}
                <div className="w-full px-5 sm:px-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                      <Icon className="w-3.5 h-3.5" style={{ color: section.accentColor }} />
                      <span>{section.eyebrowLabel}</span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[#FFF7FF] tracking-tight uppercase">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-serif italic text-white/60">
                    {section.subhead}
                  </p>
                </div>

                {/* HORIZONTAL SWIPE CAROUSEL (NATIVE CSS SCROLL-SNAP) */}
                <div
                  onScroll={(e) => handleCarouselScroll(section.id, e)}
                  className="
                    w-full flex items-stretch gap-4 sm:gap-6
                    overflow-x-auto scroll-snap-type-x-mandatory no-scrollbar
                    px-5 sm:px-10 py-4 touch-pan-x gpu-layer
                  "
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {section.projects.map((proj, pIdx) => {
                    const isActive = pIdx === activeIdx;

                    return (
                      <div
                        key={proj.id}
                        className={`
                          shrink-0 flex flex-col justify-between space-y-4
                          scroll-snap-align-start transition-all duration-500
                          ${section.mobileCardWidth}
                          ${isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-75'}
                        `}
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        {/* VIDEO FRAME CONTAINER */}
                        <div
                          className={`
                            relative w-full rounded-[24px] overflow-hidden
                            border border-white/20 bg-gradient-to-br ${proj.gradientBg}
                            shadow-[0_16px_45px_rgba(0,0,0,0.75)]
                            transition-all duration-500 cursor-pointer group gpu-layer
                            ${proj.aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-[9/16]'}
                            ${isActive ? 'shadow-[0_0_35px_rgba(255,155,210,0.4)] border-[#FF9BD2]/60' : ''}
                          `}
                        >
                          {/* Light Rim & Grain */}
                          <div className="absolute inset-0 z-20 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(16,7,25,0.75)]" />
                          <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-25 mix-blend-overlay" />

                          {/* POSTER & PLAYBACK LAYER */}
                          <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 z-10">
                            
                            {/* Top Badge */}
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className={`px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#FF9BD2]' : 'text-white/70'}`}>
                                {proj.numberLabel}
                              </span>

                              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-[9px] text-white/80 font-bold uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9BD2] animate-ping" />
                                <span>{proj.aspectRatio === '16/9' ? 'WIDESCREEN' : 'REEL'}</span>
                              </div>
                            </div>

                            {/* Center Title Visual */}
                            <div className="my-auto flex flex-col items-center justify-center text-center space-y-2">
                              <span className="text-[11px] font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10">
                                {proj.title}
                              </span>
                            </div>

                            {/* Bottom Controls Bar */}
                            <div className="flex items-center justify-between pt-2 border-t border-white/15">
                              <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-9 h-9 rounded-full bg-[#FF9BD2] text-[#100719] flex items-center justify-center shadow-[0_0_15px_#FF9BD2] group-hover:scale-110 transition-transform"
                                aria-label="Toggle play"
                              >
                                {isPlaying ? (
                                  <Pause className="w-4 h-4 fill-current ml-0.5" />
                                ) : (
                                  <Play className="w-4 h-4 fill-current ml-0.5" />
                                )}
                              </button>

                              <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] font-mono text-[#FFF7FF]"
                              >
                                {isMuted ? (
                                  <>
                                    <VolumeX className="w-3.5 h-3.5 text-[#FF9BD2]" />
                                    <span>MUTED</span>
                                  </>
                                ) : (
                                  <>
                                    <Volume2 className="w-3.5 h-3.5 text-[#FF9BD2]" />
                                    <span>AUDIO ON</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* METADATA BELOW CARD */}
                        <div className="space-y-1 px-1 text-left">
                          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#FF9BD2] uppercase">
                            <span>{proj.numberLabel}</span>
                          </div>

                          <h4 className="font-display font-black text-lg sm:text-xl text-[#FFF7FF] tracking-tight uppercase">
                            {proj.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-[#FFF7FF]/75 line-clamp-2 leading-relaxed font-normal">
                            {proj.description}
                          </p>

                          <div className="pt-1">
                            <button
                              onClick={onOpenWorkModal}
                              className="
                                inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF9BD2] hover:text-[#FFF7FF]
                                transition-colors group min-h-[44px] cursor-pointer select-none
                              "
                            >
                              <span className="underline underline-offset-4 decoration-[#FF9BD2]/50 group-hover:decoration-[#FFF7FF]">
                                VIEW PROJECT
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* CAROUSEL PROGRESS DOTS INDICATOR BELOW */}
                <div className="w-full flex items-center justify-center gap-2 pt-2">
                  {section.projects.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${dotIdx === activeIdx ? 'w-6 bg-[#FF9BD2] shadow-[0_0_10px_#FF9BD2]' : 'w-2 bg-white/20'}
                      `}
                    />
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* PORTFOLIO CLIMAX FOOTER */}
        <div className="w-full pt-12 pb-6 flex flex-col items-center justify-center text-center space-y-5 px-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#FF9BD2] uppercase">
            ✦ THAT'S THE WORK ✦
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#FFF7FF] uppercase tracking-tight">
            THAT'S THE WORK.<br />
            <span className="bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent">
              AND THERE'S MORE TO COME.
            </span>
          </h2>

          <div className="pt-2">
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
        </div>

      </div>

    </section>
  );
};
