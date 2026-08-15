import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, ArrowUpRight, ExternalLink, X, Film, Tv, Wand2, Video, Compass, Heart } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  projects: {
    id: string;
    title: string;
    description: string;
    previewGradient: string;
    aspectRatio: '9/16' | '16/9';
    thumbnail?: string;
    url?: string;
  }[];
}

export const CATEGORY_CARDS: PortfolioCategoryCard[] = [
  // 1. SOCIAL CONTENT (CARD 01: TALL VERTICAL - LEFT SIDE)
  {
    id: 'social-content',
    title: 'SOCIAL CONTENT',
    subtitle: 'SHORT-FORM VIRAL REELS',
    description: 'Pacing, hook design, and audio integration built to stop the scroll.',
    gridClassDesktop: 'md:col-span-1 md:row-span-2 min-h-[540px]',
    gridClassMobile: 'col-span-2 h-[340px]',
    aspectRatio: 'vertical',
    previewGradient: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30',
    icon: Film,
    projects: [
      { id: 'sc-1', title: 'POV: Found the best side hustle (Paid per reel) 💰', description: 'Hook design and luxury audio timing for feed retention.', previewGradient: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq' },
      { id: 'sc-2', title: 'Earn Money Via Reels 💵', description: 'Creator-led video bringing aesthetic visual rhythm and high audience engagement.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==' },
      { id: 'sc-3', title: 'To anyone who is scared to create content 📸', description: 'Platform-native hook design and dynamic editing structure for organic reach.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=' },
      { id: 'sc-4', title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt' },
    ],
  },
  // 2. YOUTUBE VIDEOS (CARD 02: WIDESCREEN LANDSCAPE - TOP CENTER)
  {
    id: 'youtube',
    title: 'YOUTUBE VIDEOS',
    subtitle: 'CINEMATIC CHANNEL PRODUCTION',
    description: 'Longer stories, narrative essays, and branded YouTube episodes.',
    gridClassDesktop: 'md:col-span-2 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30',
    icon: Tv,
    projects: [
      { id: 'yt-1', title: '10th BOARD RESULT | Tears, Celebration & Heartbreaks', description: 'Complete YouTube production: strategy, hook design, and narrative flow.', previewGradient: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM' },
      { id: 'yt-2', title: 'Messi Aur Billu Ki Kahani (PART 1)', description: 'Documentary-style YouTube episode following an idea from first thought to final execution.', previewGradient: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/watch?v=A-OdwRbfPNA' },
      { id: 'yt-3', title: 'Day in the Life of a 21-Year-Old Personal Branding Strategist', description: 'Deep-dive visual essay exploring branding and digital culture.', previewGradient: 'from-[#6D4AFF]/45 via-[#140824] to-[#FF9BD2]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    ],
  },
  // 3. AI VIDEO (CARD 03: SQUARE / VERTICAL - TOP RIGHT)
  {
    id: 'ai-video',
    title: 'AI VIDEO',
    subtitle: 'SYNTHETIC MOTION CONCEPTS',
    description: 'Surreal visual poetry and synthetic motion generated for luxury campaigns.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-1 h-[220px]',
    aspectRatio: 'square',
    previewGradient: 'from-[#C084FC]/35 via-[#1E0938] to-[#FF9BD2]/30',
    icon: Wand2,
    projects: [
      { id: 'ai-1', title: 'SURREAL VISUAL STORY 01', description: 'AI-assisted concept edit transforming static photographs into visual poetry.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-1.jpg' },
      { id: 'ai-2', title: 'CONCEPTUAL PRODUCT REEL 02', description: 'Combining synthetic visual layers with real footage for luxury product storytelling.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#B388FF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-2.jpg' },
      { id: 'ai-3', title: 'SYNTHETIC MOTION EDIT 03', description: 'AI motion generation expanding creative ideas into digital landscapes.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-3.jpg' },
    ],
  },
  // 4. LONG-FORM (CARD 04: WIDESCREEN LANDSCAPE - BOTTOM CENTER)
  {
    id: 'long-form',
    title: 'LONG-FORM',
    subtitle: 'DOCUMENTARY & BRAND FILMS',
    description: 'Cinematic brand films, editorial narrative essays, and episodic stories.',
    gridClassDesktop: 'md:col-span-2 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#6D4AFF]/35 via-[#120822] to-[#FF9BD2]/30',
    icon: Video,
    projects: [
      { id: 'lf-1', title: 'DOCUMENTARY BRAND FILM 01', description: 'Widescreen cinematic narrative exploring human depth behind brand origins.', previewGradient: 'from-[#FF9BD2]/40 via-[#120822] to-[#B388FF]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-1.jpg' },
      { id: 'lf-2', title: 'CINEMATIC ESSAY 02', description: 'Editorial long-form production featuring ambient visual storytelling and score.', previewGradient: 'from-[#B388FF]/40 via-[#120822] to-[#FFB6E6]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-2.jpg' },
      { id: 'lf-3', title: 'EPISODIC BRAND STORY 03', description: 'Multi-part video series built for deep engagement and long-term brand equity.', previewGradient: 'from-[#6D4AFF]/40 via-[#120822] to-[#FF9BD2]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-1.jpg' },
    ],
  },
  // 5. UGC (CARD 05: SQUARE / COMPACT - BOTTOM RIGHT)
  {
    id: 'ugc',
    title: 'UGC',
    subtitle: 'CREATOR-LED VISUAL STORIES',
    description: 'Relatable, human-centric short-form story designed to feel organic on feed.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-1 h-[220px]',
    aspectRatio: 'square',
    previewGradient: 'from-[#FF9BD2]/35 via-[#1D0A33] to-[#FFB6E6]/30',
    icon: Heart,
    projects: [
      { id: 'ugc-1', title: 'CREATOR UGC CAMPAIGN 01', description: 'Relatable, human-centric short-form story designed to feel organic on feed.', previewGradient: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-3.jpg' },
      { id: 'ugc-2', title: 'LIFESTYLE BEAUTY UGC 02', description: 'Natural lighting, authentic product experience, and high-converting hook pacing.', previewGradient: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-4.jpg' },
      { id: 'ugc-3', title: 'AUTHENTIC PRODUCT STORY 03', description: 'Creator-led video bringing genuine emotion and audience trust to visual storytelling.', previewGradient: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-1.jpg' },
    ],
  },
  // 6. VIDEO EDITING (CARD 06: COMPACT BOTTOM)
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    subtitle: 'RETENTION & RHYTHM',
    description: 'Transforming raw footage into engaging short-form, social, and long-form content.',
    gridClassDesktop: 'md:col-span-1 md:row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#B388FF]/35 via-[#1A0A2E] to-[#6D4AFF]/30',
    icon: Compass,
    projects: [
      { id: 've-1', title: 'CINEMATIC RHYTHM EDIT 01', description: 'Fast-paced social edit with custom audio hooks, sound design, and color grading.', previewGradient: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-2.jpg' },
      { id: 've-2', title: 'BRAND DOCUMENTARY CUT 02', description: 'Refined narrative pacing, voiceover synchronization, and editorial cuts.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-2.jpg' },
      { id: 've-3', title: 'PACING & AUDIO HOOK EDIT 03', description: 'Mastering micro-transitions and audio timing to maximize audience retention.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-4.jpg' },
    ],
  },
];

// ============================================================================
// 2. MOBILE HORIZONTAL SWIPE CAROUSEL DATA (PHONE SCOPED)
// ============================================================================
export interface ProjectCardItem {
  id: string;
  numberLabel: string;
  title: string;
  description: string;
  aspectRatio: '9/16' | '16/9';
  gradientBg: string;
  thumbnail?: string;
  url?: string;
  duration?: string;
  tag?: string;
}

export interface PortfolioCategoryData {
  id: string;
  eyebrowLabel: string;
  title: string;
  subhead: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  aspectRatio: '9/16' | '16/9';
  mobileCardWidth: string;
  projects: ProjectCardItem[];
}

export const PORTFOLIO_SECTIONS: PortfolioCategoryData[] = [
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
      { id: 'sc-1', numberLabel: '01 / 04', title: 'POV: Found the best side hustle (Paid per reel) 💰', description: 'Pacing, hook design, and luxury audio integration designed for feed retention.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq' },
      { id: 'sc-2', numberLabel: '02 / 04', title: 'Earn Money Via Reels 💵', description: 'Creator-led video bringing aesthetic visual rhythm and audience engagement.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==' },
      { id: 'sc-3', numberLabel: '03 / 04', title: 'To anyone who is scared to create content 📸', description: 'Platform-native hook design and dynamic editing structure for organic reach.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=' },
      { id: 'sc-4', numberLabel: '04 / 04', title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt' },
    ],
  },
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
      { id: 'ai-1', numberLabel: '01 / 03', title: 'SURREAL VISUAL STORY 01', description: 'AI-assisted concept edit transforming static photographs into visual poetry.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 'ai-2', numberLabel: '02 / 03', title: 'CONCEPTUAL PRODUCT REEL 02', description: 'Combining synthetic visual layers with real footage for luxury product storytelling.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#B388FF]/30', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 'ai-3', numberLabel: '03 / 03', title: 'SYNTHETIC MOTION EDIT 03', description: 'AI motion generation expanding creative ideas into digital landscapes.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
    ],
  },
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
      { id: 've-1', numberLabel: '01 / 03', title: 'CINEMATIC RHYTHM EDIT 01', description: 'Fast-paced social edit with custom audio hooks and editorial color grading.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 've-2', numberLabel: '02 / 03', title: 'BRAND DOCUMENTARY CUT 02', description: 'Refined narrative pacing, voiceover synchronization, and clean cuts.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 've-3', numberLabel: '03 / 03', title: 'PACING & AUDIO HOOK EDIT 03', description: 'Mastering micro-transitions and audio timing to maximize audience retention.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
    ],
  },
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
      { id: 'ugc-1', numberLabel: '01 / 03', title: 'CREATOR UGC CAMPAIGN 01', description: 'Relatable, human-centric short-form story designed to feel organic on feed.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 'ugc-2', numberLabel: '02 / 03', title: 'LIFESTYLE BEAUTY UGC 02', description: 'Natural lighting, authentic product experience, and high-converting hook pacing.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
      { id: 'ugc-3', numberLabel: '03 / 03', title: 'AUTHENTIC PRODUCT STORY 03', description: 'Creator-led video bringing genuine emotion and audience trust to visual storytelling.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy' },
    ],
  },
  {
    id: 'youtube',
    eyebrowLabel: '05 / 06 ✦ CINEMATIC WIDESCREEN',
    title: 'YOUTUBE',
    subhead: 'Longer stories. More room to tell them.',
    icon: Tv,
    accentColor: '#B388FF',
    aspectRatio: '16/9',
    mobileCardWidth: 'w-[88vw] sm:w-[480px]',
    projects: [
      { id: 'yt-1', numberLabel: '01 / 04', title: '10th BOARD RESULT | Tears, Celebration & Heartbreaks | Official Film', description: 'Complete YouTube channel production: strategy, hook design, retention structure, and narrative flow.', aspectRatio: '16/9', gradientBg: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM', duration: '12:45', tag: 'SHORT FILM • STORYTELLING' },
      { id: 'yt-2', numberLabel: '02 / 04', title: 'Messi Aur Billu Ki Kahani (PART 1)', description: 'Documentary-style YouTube episode following an idea from first thought to final execution.', aspectRatio: '16/9', gradientBg: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/watch?v=A-OdwRbfPNA', duration: '08:30', tag: 'STORYTELLING • COMEDY' },
      { id: 'yt-3', numberLabel: '03 / 04', title: 'Day in the Life of a 21-Year-Old Personal Branding Strategist', description: 'Deep-dive visual essay exploring branding, digital culture, and cinematic storytelling.', aspectRatio: '16/9', gradientBg: 'from-[#6D4AFF]/45 via-[#140824] to-[#FF9BD2]/30', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', duration: '18:45', tag: 'VLOG • WORKFLOW' },
      { id: 'yt-4', numberLabel: '04 / 04', title: 'BRANDED YOUTUBE SPECIAL 04', description: 'High-production channel feature blending cinematic narrative with long-term brand equity.', aspectRatio: '16/9', gradientBg: 'from-[#FFB6E6]/40 via-[#140824] to-[#B388FF]/30', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/@Kidwithcrayons', duration: '14:20', tag: 'DOCUMENTARY • BRAND' },
    ],
  },
  {
    id: 'long-form',
    eyebrowLabel: '06 / 06 ✦ DOCUMENTARY FILMS',
    title: 'LONG-FORM',
    subhead: 'Documentary brand films & cinematic narrative essays.',
    icon: Video,
    accentColor: '#C4A1FF',
    aspectRatio: '16/9',
    mobileCardWidth: 'w-[88vw] sm:w-[480px]',
    projects: [
      { id: 'lf-1', numberLabel: '01 / 03', title: 'DOCUMENTARY BRAND FILM 01', description: 'Widescreen cinematic narrative exploring human depth behind brand origins.', aspectRatio: '16/9', gradientBg: 'from-[#FF9BD2]/40 via-[#120822] to-[#B388FF]/30', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://www.youtube.com/@Kidwithcrayons', duration: '15:10', tag: 'DOCUMENTARY • BRAND' },
      { id: 'lf-2', numberLabel: '02 / 03', title: 'CINEMATIC ESSAY 02', description: 'Editorial long-form production featuring ambient visual storytelling and score.', aspectRatio: '16/9', gradientBg: 'from-[#B388FF]/40 via-[#120822] to-[#FFB6E6]/30', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/@Kidwithcrayons', duration: '11:40', tag: 'CINEMATIC • ESSAY' },
      { id: 'lf-3', numberLabel: '03 / 03', title: 'EPISODIC BRAND STORY 03', description: 'Multi-part video series built for deep engagement and long-term brand equity.', aspectRatio: '16/9', gradientBg: 'from-[#6D4AFF]/40 via-[#120822] to-[#FF9BD2]/30', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://www.youtube.com/@Kidwithcrayons', duration: '22:15', tag: 'EPISODIC • SERIES' },
    ],
  },
];

interface PortfolioSectionProps {
  onOpenWorkModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenWorkModal }) => {
  const [selectedCard, setSelectedCard] = useState<PortfolioCategoryCard | null>(null);
  const [activeCardIds, setActiveCardIds] = useState<{ [key: string]: number }>({});

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
    <section 
      id="portfolio"
      className="relative w-full py-24 sm:py-36 px-4 sm:px-6 overflow-hidden z-20 bg-[#0F0718] text-[#FFF7FF] select-none"
    >
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[700px] blur-[150px] pointer-events-none rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #B388FF 0%, #FF9BD2 45%, #0F0718 80%, transparent 100%)',
        }}
      />

      {/* MAIN SECTION HEADER */}
      <div className="w-full max-w-[1360px] mx-auto text-center space-y-4 mb-16 sm:mb-24 relative z-20">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FFE6FA] shadow-[0_0_20px_rgba(255,155,210,0.3)]"
        >
          <span>PORTFOLIO SHOWCASE</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="
            font-display font-black uppercase
            text-[clamp(38px,8vw,56px)] md:text-[clamp(64px,6.5vw,90px)]
            leading-[0.92] tracking-[-0.03em] text-[#FFF7FF] text-center
          "
        >
          SOME THINGS I'VE MADE.
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FF9BD2] pt-1"
        >
          LET THE WORK SPEAK.
        </motion.p>
      </div>

      {/* ========================================================================= */}
      {/* A. MOBILE LAYOUT (PHONE SCOPED): KAMNA-PORTFOLIO INSTAGRAM & YOUTUBE CARDS */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full max-w-[1360px] mx-auto flex flex-col items-center relative z-20 space-y-16">
        {PORTFOLIO_SECTIONS.map((section) => {
          const Icon = section.icon;
          const activeIdx = activeCardIds[section.id] || 0;

          return (
            <div key={section.id} className="w-full space-y-4">
              
              {/* SUBSECTION HEADER */}
              <div className="w-full px-5 flex flex-col justify-between gap-1 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                  <Icon className="w-3.5 h-3.5" style={{ color: section.accentColor }} />
                  <span>{section.eyebrowLabel}</span>
                </div>
                <h3 className="font-display font-black text-2xl text-[#FFF7FF] tracking-tight uppercase">
                  {section.title}
                </h3>
                <p className="text-xs font-serif italic text-white/60">
                  {section.subhead}
                </p>
              </div>

              {/* HORIZONTAL SWIPE CAROUSEL (NATIVE CSS SCROLL-SNAP) */}
              <div
                onScroll={(e) => handleCarouselScroll(section.id, e)}
                className={`
                  w-full flex flex-row flex-nowrap items-stretch gap-4
                  overflow-x-auto scroll-snap-type-x-mandatory no-scrollbar
                  py-3 gpu-layer
                  ${section.aspectRatio === '16/9' ? 'px-[6vw]' : 'px-[12vw]'}
                `}
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-x pan-y',
                  overscrollBehaviorX: 'contain',
                }}
              >
                {section.projects.map((proj, pIdx) => {
                  const isActive = pIdx === activeIdx;

                  if (section.id === 'youtube') {
                    // YOUTUBE CARD DESIGN (EXCLUSIVE TO YOUTUBE SECTION)
                    return (
                      <a
                        key={proj.id}
                        href={proj.url || 'https://www.youtube.com/@Kidwithcrayons'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          shrink-0 flex flex-col gap-3
                          scroll-snap-align-center transition-all duration-500
                          ${section.mobileCardWidth}
                          ${isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-70'}
                        `}
                        style={{ scrollSnapAlign: 'center' }}
                      >
                        <div className={`
                          w-full flex flex-col gap-3 rounded-2xl bg-[#141414] border border-white/10 p-3 shadow-lg hover:border-red-500/40 transition-colors
                          ${isActive ? 'border-red-500/50 shadow-[0_0_30px_rgba(229,9,20,0.35)]' : ''}
                        `}>
                          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black transform-gpu">
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/25">
                              <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl">
                                <Play className="w-5 h-5 fill-white ml-0.5" />
                              </div>
                            </div>
                            <img
                              src={proj.thumbnail || '/assets/yt-thumb-1.jpg'}
                              alt={proj.title}
                              className="absolute inset-0 w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5 px-1 pb-1">
                            <div className="flex items-center justify-between text-[11px] text-white/60">
                              <span className="font-bold text-red-400 uppercase tracking-wider">{proj.tag || 'SHORT FILM • STORYTELLING'}</span>
                              <span>{proj.duration || '12:45'}</span>
                            </div>
                            <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">{proj.title}</h3>
                            <div className="flex items-center justify-between text-[11px] text-white/40 pt-1">
                              <span className="flex items-center gap-1 text-red-500 font-bold ml-auto">
                                Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  }

                  if (section.id === 'social-content') {
                    // INSTAGRAM REELS CARD DESIGN (EXCLUSIVE TO SOCIAL CONTENT SECTION)
                    return (
                      <a
                        key={proj.id}
                        href={proj.url || 'https://www.instagram.com/ariimakesfilms'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          shrink-0 flex flex-col justify-between space-y-3
                          scroll-snap-align-center transition-all duration-500
                          ${section.mobileCardWidth}
                          ${isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-70'}
                        `}
                        style={{ scrollSnapAlign: 'center' }}
                      >
                        <div
                          className={`
                            relative w-full rounded-[24px] overflow-hidden border border-white/20 bg-[#121212]
                            shadow-[0_16px_45px_rgba(0,0,0,0.75)] transition-all duration-500 cursor-pointer group gpu-layer
                            aspect-[9/16]
                            ${isActive ? 'shadow-[0_0_35px_rgba(255,155,210,0.4)] border-[#FF9BD2]/60' : ''}
                          `}
                        >
                          <img
                            src={proj.thumbnail || '/assets/reel-thumb-1.jpg'}
                            alt={proj.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center select-none brightness-[1.05] contrast-[1.05] saturate-[1.05] transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="absolute top-4 right-4 z-20">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                              <InstagramIcon className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white z-20 shadow-lg">
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                            <h3 className="font-bold text-xs text-white leading-snug line-clamp-1">
                              {proj.title}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-[#FFB3CB] shrink-0 ml-2" />
                          </div>
                        </div>

                        <div className="space-y-1 px-1 text-left">
                          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#FF9BD2] uppercase">
                            <span>{proj.numberLabel}</span>
                          </div>

                          <h4 className="font-display font-black text-base text-[#FFF7FF] tracking-tight uppercase">
                            {proj.title}
                          </h4>

                          <p className="text-xs text-[#FFF7FF]/75 line-clamp-2 leading-relaxed font-normal">
                            {proj.description}
                          </p>

                          <div className="pt-1">
                            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF9BD2] group-hover:text-[#FFF7FF] transition-colors">
                              <span className="underline underline-offset-4 decoration-[#FF9BD2]/50">
                                WATCH ON INSTAGRAM
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  }

                  // OTHER SECTIONS (AI-VIDEO, VIDEO-EDITING, UGC, LONG-FORM): CLEAN BLANK/MINIMAL PLACEHOLDER CARDS
                  return (
                    <div
                      key={proj.id}
                      className={`
                        shrink-0 flex flex-col justify-between space-y-3
                        scroll-snap-align-center transition-all duration-500
                        ${section.mobileCardWidth}
                        ${isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-70'}
                      `}
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div
                        className={`
                          relative w-full rounded-[24px] overflow-hidden
                          border border-white/15 bg-gradient-to-br ${proj.gradientBg}
                          shadow-[0_16px_45px_rgba(0,0,0,0.5)]
                          transition-all duration-500 cursor-pointer group gpu-layer
                          ${proj.aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-[9/16]'}
                          ${isActive ? 'shadow-[0_0_25px_rgba(255,155,210,0.3)] border-[#FF9BD2]/40' : ''}
                        `}
                      >
                        <div className="absolute inset-0 z-20 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(16,7,25,0.75)]" />
                        <div className="relative w-full h-full flex flex-col justify-between p-4 z-10">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className={`px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-bold ${isActive ? 'text-[#FF9BD2]' : 'text-white/70'}`}>
                              {proj.numberLabel}
                            </span>
                          </div>

                          <div className="my-auto flex flex-col items-center justify-center text-center space-y-2">
                            <span className="text-[11px] font-mono font-bold text-[#FFF7FF]/90 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10">
                              {proj.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 px-1 text-left">
                        <h4 className="font-display font-bold text-base text-[#FFF7FF] tracking-tight uppercase">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-[#FFF7FF]/70 line-clamp-2 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PROGRESS INDICATOR DOTS */}
              <div className="flex items-center justify-between px-5 pt-1 text-xs font-mono">
                <span className="text-[#FF9BD2] font-bold">
                  0{activeIdx + 1} / 0{section.projects.length}
                </span>

                <div className="flex items-center gap-1.5">
                  {section.projects.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${dotIdx === activeIdx ? 'w-6 bg-[#FF9BD2] shadow-[0_0_10px_#FF9BD2]' : 'w-1.5 bg-white/20'}
                      `}
                    />
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* B. DESKTOP LAYOUT: EDITORIAL 6-CARD ASYMMETRIC GRID (WIRE-FRAME MATCHED) */}
      {/* ========================================================================= */}
      <div className="hidden md:grid w-full max-w-[1360px] mx-auto grid-cols-4 auto-rows-[270px] gap-6 relative z-20">
        {CATEGORY_CARDS.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`
                relative rounded-[28px] overflow-hidden p-6 sm:p-8
                border border-white/15 bg-gradient-to-br ${card.previewGradient}
                backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
                hover:border-[#FF9BD2]/70 hover:shadow-[0_0_40px_rgba(255,155,210,0.35)]
                flex flex-col justify-between cursor-pointer group gpu-layer
                ${card.gridClassDesktop}
              `}
            >
              <div className="absolute inset-0 z-20 pointer-events-none rounded-[28px] shadow-[inset_0_0_35px_rgba(16,7,25,0.8)]" />
              <div className="absolute inset-0 z-10 pointer-events-none film-grain opacity-25 mix-blend-overlay" />

              {/* CARD TOP HEADER */}
              <div className="flex items-start justify-between z-30">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/15 backdrop-blur-md">
                  <Icon className="w-4 h-4 text-[#FF9BD2]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                    {card.subtitle}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#FFF7FF] group-hover:bg-[#FF9BD2] group-hover:text-[#100719] group-hover:border-[#FF9BD2] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* CARD BOTTOM DETAILS */}
              <div className="space-y-2 z-30 pt-12">
                <h3 className="font-display font-black text-2xl lg:text-3xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FF9BD2] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#FFF7FF]/80 line-clamp-2 font-normal leading-relaxed">
                  {card.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono font-bold text-[#FF9BD2]">
                  <span>VIEW COLLECTION</span>
                  <span className="text-white/40">({card.projects.length} PROJECTS)</span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* C. DESKTOP INTERACTIVE ARCHIVE SHOWCASE MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-backdrop-fade">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative w-full max-w-4xl max-h-[90vh] rounded-[32px]
                border border-[#FF9BD2]/40 bg-[#160B24] p-6 sm:p-8
                shadow-[0_0_80px_rgba(255,155,210,0.4)] flex flex-col justify-between
                overflow-y-auto z-50 selection:bg-[#FF9BD2] selection:text-[#100719]
              "
            >
              {/* MODAL CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL HEADER */}
              <div className="space-y-2 border-b border-white/15 pb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF9BD2] uppercase tracking-widest">
                  <selectedCard.icon className="w-4 h-4" />
                  <span>{selectedCard.subtitle}</span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#FFF7FF] tracking-tight uppercase">
                  {selectedCard.title}
                </h3>
                <p className="text-sm text-[#FFF7FF]/75 max-w-2xl">
                  {selectedCard.description}
                </p>
              </div>

              {/* MODAL PROJECTS GRID */}
              <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {selectedCard.projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="
                      rounded-[24px] border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                      p-4 flex flex-col justify-between space-y-4 hover:border-[#FF9BD2]/60 transition-all duration-300 group
                    "
                  >
                    <div className={`
                      relative w-full rounded-[18px] overflow-hidden bg-gradient-to-br ${proj.previewGradient}
                      ${proj.aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-[9/16]'}
                      border border-white/15 shadow-md flex items-center justify-center
                    `}>
                      {proj.thumbnail ? (
                        <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover rounded-[18px]" />
                      ) : (
                        <Play className="w-8 h-8 text-[#FF9BD2] fill-current group-hover:scale-110 transition-transform" />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#FF9BD2] font-bold">
                        <span>PROJECT 0{idx + 1}</span>
                        <span>{proj.aspectRatio === '16/9' ? '16:9' : '9:16'}</span>
                      </div>

                      <h4 className="font-display font-bold text-base text-[#FFF7FF] leading-snug group-hover:text-[#FF9BD2] transition-colors">
                        {proj.title}
                      </h4>

                      <p className="text-xs text-[#FFF7FF]/70 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (proj.url) {
                          window.open(proj.url, '_blank', 'noopener,noreferrer');
                        } else {
                          setSelectedCard(null);
                          onOpenWorkModal();
                        }
                      }}
                      className="
                        w-full py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold
                        text-[#FFF7FF] hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2]
                        transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer
                      "
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* MODAL FOOTER */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50 uppercase">
                  ARI CINEMATIC ARCHIVE ✦ 2026
                </span>

                <button
                  onClick={() => {
                    setSelectedCard(null);
                    onOpenWorkModal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#FF9BD2] text-[#100719] font-mono font-bold text-xs hover:bg-[#FFF7FF] transition-all shadow-[0_0_20px_rgba(255,155,210,0.5)] cursor-pointer"
                >
                  START A PROJECT WITH ARI ✦
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
