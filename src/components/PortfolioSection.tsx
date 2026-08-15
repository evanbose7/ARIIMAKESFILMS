import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, Pause, Volume2, VolumeX, ArrowUpRight, X, Film, Tv, Wand2, Video, Compass, Heart } from 'lucide-react';

// ============================================================================
// 1. DESKTOP ASYMMETRIC PORTFOLIO GRID DATA & INTERFACES (HERO WIREFRAME GRID)
// ============================================================================
export interface PortfolioCategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gridClassDesktop: string;
  gridClassMobile: string;
  aspectRatio: 'vertical' | 'landscape' | 'square';
  previewGradient: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: {
    id: string;
    title: string;
    description: string;
    previewGradient: string;
    aspectRatio: '9/16' | '16/9';
  }[];
}

export const CATEGORY_CARDS: PortfolioCategoryCard[] = [
  // 1. SOCIAL CONTENT (CARD 01: TALL VERTICAL - LEFT SIDE)
  {
    id: 'social-content',
    title: 'SOCIAL CONTENT',
    subtitle: 'VIRAL SHORT-FORM & REELS',
    description: 'Dynamic pacing, high-converting hooks, and audio rhythm designed for feeds.',
    gridClassDesktop: 'md:col-span-1 md:row-span-2 h-full min-h-[580px]',
    gridClassMobile: 'col-span-2 h-[460px]',
    aspectRatio: 'vertical',
    previewGradient: 'from-[#FF9BD2]/35 via-[#1D0A33] to-[#6D4AFF]/30',
    icon: Film,
    projects: [
      { id: 'sc-1', title: 'VIRAL REEL CAMPAIGN 01', description: 'Pacing, hook design, and luxury audio integration.', previewGradient: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#B388FF]/30', aspectRatio: '9/16' },
      { id: 'sc-2', title: 'SHORT-FORM BRAND EDIT 02', description: 'Creator-led video designed for high retention.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
      { id: 'sc-3', title: 'TIKTOK CREATOR CUT 03', description: 'Platform-native hook and visual rhythm.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16' },
      { id: 'sc-4', title: 'INSTAGRAM BRAND STORY 04', description: 'Aesthetic visual sequence with crisp audio timing.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
    ],
  },
  
  // 2. YOUTUBE (CARD 02: WIDE LANDSCAPE - TOP RIGHT)
  {
    id: 'youtube',
    title: 'YOUTUBE VIDEOS',
    subtitle: 'CINEMATIC LONG-FORM CHANNEL STORYTELLING',
    description: 'Complete YouTube channel production: hook design, retention structure, and narrative flow.',
    gridClassDesktop: 'md:col-span-2 md:row-span-1 min-h-[270px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#FF9BD2]/30 via-[#160729] to-[#6D4AFF]/40',
    icon: Tv,
    projects: [
      { id: 'yt-1', title: 'FEATURED YOUTUBE FILM 01', description: 'Complete YouTube production: strategy, hook design, and storytelling.', previewGradient: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40', aspectRatio: '16/9' },
      { id: 'yt-2', title: 'CREATIVE PROCESS EPISODE 02', description: 'Documentary-style YouTube episode following an idea from thought to execution.', previewGradient: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30', aspectRatio: '16/9' },
      { id: 'yt-3', title: 'DOCUMENTARY YOUTUBE ESSAY 03', description: 'Deep-dive visual essay exploring branding, storytelling, and digital culture.', previewGradient: 'from-[#6D4AFF]/45 via-[#140824] to-[#FF9BD2]/30', aspectRatio: '16/9' },
      { id: 'yt-4', title: 'BRANDED YOUTUBE SPECIAL 04', description: 'High-production channel feature blending narrative with strategy.', previewGradient: 'from-[#FFB6E6]/40 via-[#140824] to-[#B388FF]/30', aspectRatio: '16/9' },
    ],
  },

  // 3. AI VIDEO (CARD 03: MIDDLE RIGHT - LEFT)
  {
    id: 'ai-video',
    title: 'AI VIDEOS',
    subtitle: 'SYNTHETIC & CONCEPTUAL MOTION',
    description: 'Transforming static photographs and creative concepts into surreal visual poetry.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[280px]',
    gridClassMobile: 'col-span-1 h-[190px]',
    aspectRatio: 'square',
    previewGradient: 'from-[#B388FF]/35 via-[#1A0930] to-[#FFB6E6]/30',
    icon: Wand2,
    projects: [
      { id: 'ai-1', title: 'SURREAL VISUAL STORY 01', description: 'AI-assisted concept edit transforming static images into visual poetry.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
      { id: 'ai-2', title: 'CONCEPTUAL PRODUCT REEL 02', description: 'Combining synthetic visual layers with real footage for luxury product storytelling.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#B388FF]/30', aspectRatio: '16/9' },
      { id: 'ai-3', title: 'SYNTHETIC MOTION EDIT 03', description: 'AI motion generation taking creative concepts into digital landscapes.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
    ],
  },

  // 4. LONG-FORM (CARD 04: MIDDLE RIGHT - RIGHT)
  {
    id: 'long-form',
    title: 'LONG FORM VIDEOS',
    subtitle: 'DOCUMENTARY & CINEMATIC FILMS',
    description: 'Widescreen cinematic narratives exploring human depth behind brand origins.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[280px]',
    gridClassMobile: 'col-span-1 h-[190px]',
    aspectRatio: 'square',
    previewGradient: 'from-[#6D4AFF]/35 via-[#140824] to-[#FF9BD2]/30',
    icon: Video,
    projects: [
      { id: 'lf-1', title: 'DOCUMENTARY BRAND FILM 01', description: 'Widescreen cinematic narrative exploring human depth behind brand origins.', previewGradient: 'from-[#FF9BD2]/40 via-[#120822] to-[#B388FF]/30', aspectRatio: '16/9' },
      { id: 'lf-2', title: 'CINEMATIC ESSAY 02', description: 'Editorial long-form production featuring ambient visual storytelling and score.', previewGradient: 'from-[#B388FF]/40 via-[#120822] to-[#FFB6E6]/30', aspectRatio: '16/9' },
      { id: 'lf-3', title: 'EPISODIC BRAND STORY 03', description: 'Multi-part video series built for deep engagement and long-term brand equity.', previewGradient: 'from-[#6D4AFF]/40 via-[#120822] to-[#FF9BD2]/30', aspectRatio: '16/9' },
    ],
  },

  // 5. UGC (CARD 05: BOTTOM LEFT - WIDE)
  {
    id: 'ugc',
    title: 'UGC',
    subtitle: 'HUMAN & CREATOR-LED CONTENT',
    description: 'Relatable visual stories that feel authentic to the audience and the platform.',
    gridClassDesktop: 'md:col-span-2 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#FF9BD2]/35 via-[#1F0A33] to-[#B388FF]/25',
    icon: Heart,
    projects: [
      { id: 'ugc-1', title: 'CREATOR UGC CAMPAIGN 01', description: 'Relatable, human-centric short-form story designed to feel organic on feed.', previewGradient: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', aspectRatio: '9/16' },
      { id: 'ugc-2', title: 'LIFESTYLE BEAUTY UGC 02', description: 'Natural lighting, authentic product experience, and high-converting hook pacing.', previewGradient: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', aspectRatio: '9/16' },
      { id: 'ugc-3', title: 'AUTHENTIC PRODUCT STORY 03', description: 'Creator-led video bringing genuine emotion and audience trust to visual storytelling.', previewGradient: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', aspectRatio: '9/16' },
    ],
  },

  // 6. VIDEO EDITING (CARD 06: BOTTOM RIGHT)
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    subtitle: 'RHYTHM, COLOR & RETENTION CUTS',
    description: 'Transforming raw footage into engaging short-form, social, and long-form content.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#B388FF]/35 via-[#1A0A2E] to-[#6D4AFF]/30',
    icon: Compass,
    projects: [
      { id: 've-1', title: 'CINEMATIC RHYTHM EDIT 01', description: 'Fast-paced social edit with custom audio hooks, sound design, and color grading.', previewGradient: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16' },
      { id: 've-2', title: 'BRAND DOCUMENTARY CUT 02', description: 'Refined narrative pacing, voiceover synchronization, and editorial cuts.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '16/9' },
      { id: 've-3', title: 'PACING & AUDIO HOOK EDIT 03', description: 'Mastering micro-transitions and audio timing to maximize audience retention.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16' },
    ],
  },
];

// ============================================================================
// 2. MOBILE FULL-SCREEN CINEMATIC FILM REEL DISPLAY DATA
// ============================================================================
export interface PortfolioProjectItem {
  id: string;
  category: 'REELS' | 'YOUTUBE';
  numberLabel: string;
  categoryLabel: string;
  title: string;
  description: string;
  aspectRatio: '9/16' | '16/9';
  gradientBg: string;
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
  const [selectedCard, setSelectedCard] = useState<PortfolioCategoryCard | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string>('reel-01');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [controlsHovered, setControlsHovered] = useState<boolean>(false);

  // IntersectionObserver to auto-detect current active frame centered in viewport on mobile
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

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-20 sm:py-32 px-4 sm:px-6 overflow-hidden z-20 bg-[#10081B] text-[#FFF7FF] select-none">
      
      {/* 1. ATMOSPHERIC SOFT PURPLE SILK RADIAL GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] opacity-25 blur-[180px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #6D4AFF 45%, #10081B 80%, transparent 100%)',
        }}
      />

      {/* ========================================================================= */}
      {/* A. DESKTOP LAYOUT (HIDDEN ON MOBILE, VISIBLE ON MD: BLOCK) */}
      {/* ========================================================================= */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1180px] mx-auto text-center space-y-16 relative z-20">
        
        {/* DESKTOP HEADING: SOME THINGS I'VE MADE. */}
        <div className="w-full flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '150px 0px' }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              bg-white/[0.06] border border-white/[0.12] backdrop-blur-[16px]
              text-[11px] font-bold tracking-[0.18em] uppercase text-[#FFE6FA]
              shadow-[0_0_15px_rgba(255,155,210,0.3)]
            "
          >
            <span>PORTFOLIO</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full"
          >
            <h2 className="font-display font-black text-center flex flex-col items-center justify-center">
              <div className="overflow-hidden py-1">
                <motion.span
                  variants={lineVariants}
                  className="
                    block uppercase
                    text-[clamp(72px,7.5vw,100px)]
                    leading-[0.92] tracking-[-0.03em] font-black text-center
                    bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
                    drop-shadow-[0_0_35px_rgba(255,155,210,0.4)]
                  "
                >
                  SOME THINGS I'VE MADE.
                </motion.span>
              </div>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-xl text-[#FF9BD2] pt-1"
          >
            A FEW STORIES, EDITS & IDEAS I'VE BROUGHT TO LIFE. ✦
          </motion.p>
        </div>

        {/* ASYMMETRIC EDITORIAL PORTFOLIO GRID (DESKTOP WIREFRAME REFERENCE) */}
        <div className="w-full grid grid-cols-3 gap-6 text-left">
          {CATEGORY_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.015 }}
                onClick={() => setSelectedCard(card)}
                className={`
                  group relative rounded-[34px] p-8
                  bg-gradient-to-b from-white/[0.08] via-[#160A28] to-black
                  border border-white/[0.14] backdrop-blur-2xl
                  shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                  flex flex-col justify-between overflow-hidden cursor-pointer select-none gpu-layer
                  ${card.gridClassDesktop}
                `}
              >
                {/* Atmospheric Media Background Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.previewGradient} opacity-60 group-hover:opacity-95 transition-opacity duration-500`} />
                
                {/* Top Badge & Category Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[#FF9BD2] text-[11px] font-mono font-bold uppercase backdrop-blur-md">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{card.id.replace('-', ' ')}</span>
                  </div>

                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                    EXPLORE ✦
                  </span>
                </div>

                {/* Center Title & Subtitle */}
                <div className="relative z-10 space-y-2 my-auto">
                  <h3 className="font-display font-black text-4xl text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors tracking-tight uppercase leading-none">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#FFF7FF]/75 font-serif italic max-w-[34ch] line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom Floating Arrow ↗ */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                    VIEW COLLECTION
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#FF9BD2] group-hover:scale-110 group-hover:bg-[#FF9BD2] group-hover:text-[#140A22] transition-all shadow-[0_0_20px_rgba(255,155,210,0.4)]">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* IMMERSIVE COLLECTION MODAL FOR DESKTOP */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 select-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
                className="absolute inset-0 bg-[#0A0412]/94 backdrop-blur-2xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="
                  relative z-10 w-full max-w-[850px] rounded-[32px] p-10
                  bg-gradient-to-b from-[#1C0933] via-[#100620] to-black
                  border border-[#FF9BD2]/40 shadow-[0_0_50px_rgba(255,155,210,0.35)]
                  flex flex-col space-y-8 max-h-[90vh] overflow-y-auto gpu-layer text-left
                "
              >
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] hover:bg-white/20 transition-all cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Close collection"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-12">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2]/40 text-[#FF9BD2] text-xs font-mono font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedCard.title} ARCHIVE</span>
                  </div>
                  <h3 className="font-display font-black text-4xl text-[#FFF7FF] tracking-tight uppercase">
                    {selectedCard.title}
                  </h3>
                  <p className="text-base text-[#FFF7FF]/80 leading-relaxed max-w-[60ch]">
                    {selectedCard.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedCard.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className={`
                        p-5 rounded-[24px] bg-gradient-to-br ${proj.previewGradient}
                        border border-white/15 flex flex-col justify-between space-y-4 relative overflow-hidden group
                        ${proj.aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-[9/16]'}
                      `}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 text-[#FF9BD2] font-bold">
                          {proj.id.toUpperCase()}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-[#FF9BD2] text-[#140A22] flex items-center justify-center shadow-[0_0_15px_#FF9BD2]">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>

                      <div className="relative z-10 space-y-1">
                        <h4 className="font-display font-black text-base text-[#FFF7FF]">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-[#FFF7FF]/75 line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedCard(null);
                      onOpenWorkModal();
                    }}
                    className="
                      px-6 py-3 rounded-full
                      bg-gradient-to-r from-[#FF9BD2] to-[#B388FF]
                      text-[#140A22] font-display font-bold text-xs tracking-widest uppercase
                      shadow-[0_0_20px_rgba(255,155,210,0.5)]
                      flex items-center gap-2 cursor-pointer select-none min-h-[48px]
                    "
                  >
                    <span>WORK WITH ARI</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedCard(null)}
                    className="text-xs font-mono text-[#FFF7FF]/60 hover:text-[#FFF7FF] cursor-pointer min-h-[48px] px-2 flex items-center"
                  >
                    Close ✕
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

      {/* ========================================================================= */}
      {/* B. MOBILE LAYOUT: FULL-SCREEN CINEMATIC FILM REEL REVEALS (BLOCK MD:HIDDEN) */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full mx-auto flex flex-col items-center relative z-20 space-y-20">

        {/* MOBILE HEADING: SOME THINGS I'VE MADE. / LET THE WORK SPEAK. */}
        <div className="w-full text-center space-y-4 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFE6FA] shadow-[0_0_20px_rgba(255,155,210,0.3)]"
          >
            <span>PORTFOLIO</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="
              font-display font-black uppercase
              text-[clamp(36px,9vw,48px)] leading-[0.92] tracking-[-0.03em] text-center
              bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
              drop-shadow-[0_0_35px_rgba(255,155,210,0.45)]
            "
          >
            SOME THINGS<br /> I'VE MADE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif italic text-lg text-[#FF9BD2] tracking-wide pt-1"
          >
            LET THE WORK SPEAK. ✦
          </motion.p>
        </div>

        {/* MOBILE REELS (4 VERTICAL 9:16 REVEALS) */}
        <div className="w-full flex flex-col items-center space-y-20">
          
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#FF9BD2] uppercase">
              ✦ SOCIAL CONTENT / REELS
            </span>
            <span className="font-mono text-[10px] text-white/40 uppercase">
              01 – 04 ARCHIVE
            </span>
          </div>

          {REEL_PROJECTS.map((proj) => {
            const isActive = activeProjectId === proj.id;

            return (
              <div
                key={proj.id}
                data-project-id={proj.id}
                className="w-full flex flex-col items-center justify-center space-y-6 scroll-mt-20"
              >
                {/* 9:16 VERTICAL CINEMATIC VIDEO FRAME FOR PHONE (88-92VW) */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setControlsHovered(true)}
                  onMouseLeave={() => setControlsHovered(false)}
                  className={`
                    relative w-[90vw] max-w-[360px] aspect-[9/16]
                    rounded-[28px] overflow-hidden
                    border border-white/20 bg-gradient-to-br ${proj.gradientBg}
                    shadow-[0_20px_50px_rgba(0,0,0,0.85)]
                    transition-all duration-500 gpu-layer cursor-pointer group
                    ${isActive ? 'shadow-[0_0_40px_rgba(255,155,210,0.4)] border-[#FF9BD2]/60' : 'opacity-85'}
                  `}
                >
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[28px] shadow-[inset_0_0_30px_rgba(16,7,25,0.8)]" />
                  <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-30 mix-blend-overlay" />

                  <div className="relative w-full h-full flex flex-col justify-between p-5 z-10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#FF9BD2]' : 'text-white/70'}`}>
                        {proj.numberLabel}
                      </span>
                      
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-[9px] text-white/80 font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9BD2] animate-ping" />
                        <span>REEL PREVIEW</span>
                      </div>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 rounded-full bg-[#FF9BD2] text-[#100719] flex items-center justify-center shadow-[0_0_30px_rgba(255,155,210,0.75)] cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 fill-current ml-0.5" />
                        ) : (
                          <Play className="w-7 h-7 fill-current ml-1" />
                        )}
                      </motion.div>
                      
                      <span className="text-[11px] font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-3 py-0.5 rounded-full border border-white/10">
                        {proj.title}
                      </span>
                    </div>

                    <div className={`flex items-center justify-between pt-3 border-t border-white/15 transition-opacity duration-300 ${controlsHovered || isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-mono text-[#FFF7FF]"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-[#FF9BD2]" />
                            <span>MUTED</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-[#FF9BD2]" />
                            <span>SOUND ON</span>
                          </>
                        )}
                      </button>

                      <span className="text-[9px] font-mono text-white/50 uppercase">
                        9:16 VERTICAL
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* MOBILE PROJECT INFORMATION BELOW REEL */}
                <div className="w-full text-center space-y-2 px-2">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                    <span>{proj.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-[#FFF7FF]">{proj.numberLabel}</span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#FFF7FF] tracking-tight uppercase">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FFF7FF]/80 leading-relaxed font-normal max-w-[320px] mx-auto">
                    {proj.description}
                  </p>

                  <div className="pt-1">
                    <button
                      onClick={onOpenWorkModal}
                      className="
                        inline-flex items-center gap-1.5 px-3 py-2 rounded-full
                        text-xs font-mono font-bold text-[#FF9BD2]
                        min-h-[44px] cursor-pointer select-none
                      "
                    >
                      <span className="underline underline-offset-4 decoration-[#FF9BD2]/50">
                        VIEW PROJECT
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* MOBILE CATEGORY CHANGE INTERLUDE */}
        <div className="w-full py-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-full max-w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#FF9BD2] to-transparent shadow-[0_0_15px_#FF9BD2]" />
          
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF9BD2]/80">
            ✦ NEXT CHAPTER ✦
          </span>

          <h2 className="font-display font-black text-3xl uppercase tracking-tight bg-gradient-to-r from-[#FFF7FF] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent">
            YOUTUBE <span className="text-[#FF9BD2] font-light">/</span> LONG-FORM
          </h2>

          <div className="w-full max-w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#B388FF] to-transparent shadow-[0_0_15px_#B388FF]" />
        </div>

        {/* MOBILE YOUTUBE (4 WIDESCREEN 16:9 REVEALS) */}
        <div className="w-full flex flex-col items-center space-y-20">
          
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#B388FF] uppercase">
              ✦ YOUTUBE / LONG-FORM
            </span>
            <span className="font-mono text-[10px] text-white/40 uppercase">
              01 – 04 ARCHIVE
            </span>
          </div>

          {YOUTUBE_PROJECTS.map((proj) => {
            const isActive = activeProjectId === proj.id;

            return (
              <div
                key={proj.id}
                data-project-id={proj.id}
                className="w-full flex flex-col items-center justify-center space-y-6 scroll-mt-20"
              >
                {/* 16:9 WIDESCREEN CINEMATIC VIDEO FRAME FOR PHONE (92VW) */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setControlsHovered(true)}
                  onMouseLeave={() => setControlsHovered(false)}
                  className={`
                    relative w-[92vw] aspect-[16/9]
                    rounded-[24px] overflow-hidden
                    border border-white/20 bg-gradient-to-br ${proj.gradientBg}
                    shadow-[0_20px_50px_rgba(0,0,0,0.88)]
                    transition-all duration-500 gpu-layer cursor-pointer group
                    ${isActive ? 'shadow-[0_0_40px_rgba(179,136,255,0.45)] border-[#B388FF]/60' : 'opacity-85'}
                  `}
                >
                  <div className="absolute inset-0 z-20 pointer-events-none rounded-[24px] shadow-[inset_0_0_30px_rgba(16,7,25,0.85)]" />
                  <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-30 mix-blend-overlay" />

                  <div className="relative w-full h-full flex flex-col justify-between p-4 z-10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#B388FF]' : 'text-white/70'}`}>
                        {proj.numberLabel}
                      </span>
                      
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-[9px] text-white/80 font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B388FF] animate-ping" />
                        <span>WIDESCREEN FILM</span>
                      </div>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center text-center space-y-2">
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 rounded-full bg-[#B388FF] text-[#100719] flex items-center justify-center shadow-[0_0_30px_rgba(179,136,255,0.8)] cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-current ml-0.5" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-1" />
                        )}
                      </motion.div>
                      
                      <span className="text-[10px] font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10">
                        {proj.title}
                      </span>
                    </div>

                    <div className={`flex items-center justify-between pt-2 border-t border-white/15 transition-opacity duration-300 ${controlsHovered || isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] font-mono text-[#FFF7FF]"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-[#B388FF]" />
                            <span>MUTED</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-[#B388FF]" />
                            <span>SOUND ON</span>
                          </>
                        )}
                      </button>

                      <span className="text-[9px] font-mono text-white/50 uppercase">
                        16:9 WIDESCREEN
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* MOBILE PROJECT INFORMATION BELOW YOUTUBE FILM */}
                <div className="w-full text-center space-y-2 px-2">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-[#B388FF] uppercase">
                    <span>{proj.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-[#FFF7FF]">{proj.numberLabel}</span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#FFF7FF] tracking-tight uppercase">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FFF7FF]/80 leading-relaxed font-normal max-w-[340px] mx-auto">
                    {proj.description}
                  </p>

                  <div className="pt-1">
                    <button
                      onClick={onOpenWorkModal}
                      className="
                        inline-flex items-center gap-1.5 px-3 py-2 rounded-full
                        text-xs font-mono font-bold text-[#B388FF]
                        min-h-[44px] cursor-pointer select-none
                      "
                    >
                      <span className="underline underline-offset-4 decoration-[#B388FF]/50">
                        VIEW PROJECT
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* MOBILE PORTFOLIO OUTRO CLIMAX */}
        <div className="w-full pt-12 pb-6 flex flex-col items-center justify-center text-center space-y-5">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#FF9BD2] uppercase">
            ✦ THAT'S THE WORK ✦
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFF7FF] uppercase tracking-tight">
            THAT'S THE WORK.<br />
            <span className="bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent">
              AND THERE'S MORE TO COME.
            </span>
          </h2>

          <div className="pt-2">
            <button
              onClick={onOpenWorkModal}
              className="
                px-6 py-3.5 rounded-full
                bg-gradient-to-r from-[#FF9BD2] to-[#B388FF]
                text-[#100719] font-display font-bold text-xs tracking-widest uppercase
                shadow-[0_0_25px_rgba(255,155,210,0.5)]
                flex items-center gap-2 cursor-pointer min-h-[48px]
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
