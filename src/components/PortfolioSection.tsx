import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, ArrowUpRight, ExternalLink, X, Film, Tv, Wand2, Video, Compass, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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
    gridClassDesktop: 'col-span-4 row-span-2 min-h-[580px]',
    gridClassMobile: 'col-span-2 h-[340px]',
    aspectRatio: 'vertical',
    previewGradient: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30',
    icon: Film,
    projects: [
      { id: 'sc-1', title: 'POV: Found the best side hustle (Paid per reel) 💰', description: 'Hook design and luxury audio timing for feed retention.', previewGradient: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq' },
      { id: 'sc-2', title: 'Earn Money Via Reels 💵', description: 'Creator-led video bringing aesthetic visual rhythm and audience engagement.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==' },
      { id: 'sc-3', title: 'To anyone who is scared to create content 📸', description: 'Platform-native hook design and dynamic editing structure for organic reach.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=' },
      { id: 'sc-4', title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt' },
    ],
  },
  // 2. YOUTUBE VIDEOS (CARD 02: WIDESCREEN LANDSCAPE - TOP RIGHT)
  {
    id: 'youtube',
    title: 'YOUTUBE VIDEOS',
    subtitle: 'CINEMATIC CHANNEL PRODUCTION',
    description: 'Longer stories, narrative essays, and branded YouTube episodes.',
    gridClassDesktop: 'col-span-8 row-span-1 min-h-[290px]',
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
  // 3. AI VIDEO (CARD 03: SQUARE / VERTICAL - MIDDLE LEFT)
  {
    id: 'ai-video',
    title: 'AI VIDEO',
    subtitle: 'SYNTHETIC MOTION CONCEPTS',
    description: 'Surreal visual poetry and synthetic motion generated for luxury campaigns.',
    gridClassDesktop: 'col-span-4 row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-1 h-[220px]',
    aspectRatio: 'square',
    previewGradient: 'from-[#C084FC]/35 via-[#1E0938] to-[#FF9BD2]/30',
    icon: Wand2,
    projects: [
      { id: 'ai-1', title: 'SURREAL VISUAL STORY 01', description: 'AI-assisted concept edit transforming static photographs into visual poetry.', previewGradient: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
      { id: 'ai-2', title: 'CONCEPTUAL PRODUCT REEL 02', description: 'Combining synthetic visual layers with real footage for luxury product storytelling.', previewGradient: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#B388FF]/30', aspectRatio: '9/16' },
      { id: 'ai-3', title: 'SYNTHETIC MOTION EDIT 03', description: 'AI motion generation expanding creative ideas into digital landscapes.', previewGradient: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', aspectRatio: '9/16' },
    ],
  },
  // 4. LONG-FORM (CARD 04: WIDESCREEN LANDSCAPE - MIDDLE RIGHT)
  {
    id: 'long-form',
    title: 'LONG-FORM VIDEOS',
    subtitle: 'DOCUMENTARY & BRAND FILMS',
    description: 'Cinematic brand films, editorial narrative essays, and episodic stories.',
    gridClassDesktop: 'col-span-4 row-span-1 min-h-[260px]',
    gridClassMobile: 'col-span-2 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#6D4AFF]/35 via-[#120822] to-[#FF9BD2]/30',
    icon: Video,
    projects: [
      { id: 'lf-1', title: 'DOCUMENTARY BRAND FILM 01', description: 'Widescreen cinematic narrative exploring human depth behind brand origins.', previewGradient: 'from-[#FF9BD2]/40 via-[#120822] to-[#B388FF]/30', aspectRatio: '16/9' },
      { id: 'lf-2', title: 'CINEMATIC ESSAY 02', description: 'Editorial long-form production featuring ambient visual storytelling and score.', previewGradient: 'from-[#B388FF]/40 via-[#120822] to-[#FFB6E6]/30', aspectRatio: '16/9' },
      { id: 'lf-3', title: 'EPISODIC BRAND STORY 03', description: 'Multi-part video series built for deep engagement and long-term brand equity.', previewGradient: 'from-[#6D4AFF]/40 via-[#120822] to-[#FF9BD2]/30', aspectRatio: '16/9' },
    ],
  },
  // 5. UGC (CARD 05: WIDE STRIP - BOTTOM LEFT)
  {
    id: 'ugc',
    title: 'UGC',
    subtitle: 'CREATOR-LED VISUAL STORIES',
    description: 'Relatable, human-centric short-form story designed to feel organic on feed.',
    gridClassDesktop: 'col-span-6 row-span-1 min-h-[220px]',
    gridClassMobile: 'col-span-1 h-[220px]',
    aspectRatio: 'landscape',
    previewGradient: 'from-[#FF9BD2]/35 via-[#1D0A33] to-[#FFB6E6]/30',
    icon: Heart,
    projects: [
      { id: 'ugc-1', title: 'CREATOR UGC CAMPAIGN 01', description: 'Relatable, human-centric short-form story designed to feel organic on feed.', previewGradient: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', aspectRatio: '9/16' },
      { id: 'ugc-2', title: 'LIFESTYLE BEAUTY UGC 02', description: 'Natural lighting, authentic product experience, and high-converting hook pacing.', previewGradient: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', aspectRatio: '9/16' },
      { id: 'ugc-3', title: 'AUTHENTIC PRODUCT STORY 03', description: 'Creator-led video bringing genuine emotion and audience trust to visual storytelling.', previewGradient: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', aspectRatio: '9/16' },
    ],
  },
  // 6. VIDEO EDITING (CARD 06: WIDE STRIP - BOTTOM RIGHT)
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    subtitle: 'RETENTION & RHYTHM',
    description: 'Transforming raw footage into engaging short-form, social, and long-form content.',
    gridClassDesktop: 'col-span-6 row-span-1 min-h-[220px]',
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
  videoUrl?: string;
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
    id: 'food',
    eyebrowLabel: '01 / 06 ✦ GOURMET & CULINARY',
    title: 'FOOD',
    subhead: 'Artisanal food, luxury desserts & culinary stories.',
    icon: Wand2,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'food-1', numberLabel: '01 / 04', title: 'ARTISANAL DESSERT FILM 01', description: 'Cinematic food cinematography highlighting textures, flavor profiles, and artisanal passion.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/food-1.mp4' },
      { id: 'food-2', numberLabel: '02 / 04', title: 'CULINARY CREATION REEL 02', description: 'High-speed pacing and mouth-watering close-ups designed for food lovers.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-2.mp4' },
      { id: 'food-3', numberLabel: '03 / 04', title: 'VOICEOVER FOOD STORY 03', description: 'Narrative-driven culinary reel with rich audio score and voiceover storytelling.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/food-3.mp4' },
      { id: 'food-4', numberLabel: '04 / 04', title: 'SEASONAL MENU SPECIAL 04', description: 'Visual feast capturing vibrant colors and sensory culinary experiences.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-4.mp4' },
    ],
  },
  {
    id: 'architecture',
    eyebrowLabel: '02 / 06 ✦ SPATIAL & EDITORIAL',
    title: 'ARCHITECTURE AND INTERIOR DESIGN',
    subhead: 'Spatial storytelling, architectural tours & luxury interiors.',
    icon: Compass,
    accentColor: '#FFB6E6',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'arch-1', numberLabel: '01 / 04', title: 'ARTSIGNIA 5 YEARS ANNIVERSARY', description: 'Cinematic architectural documentary celebrating 5 years of spatial innovation.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-1.mp4' },
      { id: 'arch-2', numberLabel: '02 / 04', title: 'MODERN INTERIOR FEATURE 02', description: 'Elegant spatial camera movements showcasing light, luxury textures, and design.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-2.mp4' },
      { id: 'arch-3', numberLabel: '03 / 04', title: 'CREATIVE DESIGN TOUR 03', description: 'Editorial tour exploring architectural rhythm, material harmony, and atmosphere.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-3.mp4' },
      { id: 'arch-4', numberLabel: '04 / 04', title: 'GURU GOBIND MUSEUM ARCHITECTURE', description: 'Monumental architectural storytelling preserving heritage through modern lens.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-4.mp4' },
    ],
  },
  {
    id: 'jewellery',
    eyebrowLabel: '03 / 06 ✦ LUXURY & ELEGANCE',
    title: 'JEWELLERY (INTERNATIONAL BRANDS)',
    subhead: 'High jewelry visual storytelling & international campaigns.',
    icon: Heart,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'jewel-1', numberLabel: '01 / 03', title: 'INTERNATIONAL JEWELLERY FILM 01', description: 'Macro lighting and sparkling reflections highlighting fine diamond artistry.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', videoUrl: '/assets/jewellery-1.mp4' },
      { id: 'jewel-2', numberLabel: '02 / 03', title: 'LUXURY BRAND CAMPAIGN 02', description: 'Aesthetic high-fashion cinematography crafted for prestigious international houses.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', videoUrl: '/assets/jewellery-2.mp4' },
      { id: 'jewel-3', numberLabel: '03 / 03', title: 'FINE CRAFTSMANSHIP FEATURE 03', description: 'Sensory storytelling capturing gold curves, gemstones, and timeless elegance.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', videoUrl: '/assets/jewellery-3.mp4' },
    ],
  },
  {
    id: 'wellbeing',
    eyebrowLabel: '04 / 06 ✦ MIND & MOVEMENT',
    title: 'WELL BEING',
    subhead: 'Holistic wellness, movement & mindful living films.',
    icon: Sparkles,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'wb-1', numberLabel: '01 / 04', title: 'ELANURA WELLNESS STORY 01', description: 'Ambient visual essay celebrating holistic health, natural beauty, and wellness.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#B388FF]/30', videoUrl: '/assets/wellbeing-1.mp4' },
      { id: 'wb-2', numberLabel: '02 / 04', title: 'MINDFUL MOVEMENT REEL 02', description: 'Serene camera work and rhythmic pacing designed for wellness brand engagement.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/wellbeing-2.mp4' },
      { id: 'wb-3', numberLabel: '03 / 04', title: 'HOLISTIC LIFESTYLE FILM 03', description: 'Warm editorial lighting and natural imagery focusing on vitality and balance.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/wellbeing-3.mp4' },
      { id: 'wb-4', numberLabel: '04 / 04', title: 'ELANURA ESSENCE CAMPAIGN 04', description: 'Mindful visual narrative showcasing organic wellness experiences.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/wellbeing-4.mp4' },
    ],
  },
  {
    id: 'social-content',
    eyebrowLabel: '05 / 06 ✦ INSTAGRAM & REELS',
    title: 'SOCIAL CONTENT',
    subhead: 'Short-form content made to stop the scroll.',
    icon: Film,
    accentColor: '#FF9BD2',
    aspectRatio: '9/16',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'sc-1', numberLabel: '01 / 04', title: 'POV: Found the best side hustle (Paid per reel) 💰', description: 'Pacing, hook design, and luxury audio integration designed for feed retention.', aspectRatio: '9/16', gradientBg: 'from-[#FF9BD2]/40 via-[#1D0A33] to-[#B388FF]/30', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq' },
      { id: 'sc-2', numberLabel: '02 / 04', title: 'Earn Money Via Reels 💵', description: 'Creator-led video bringing aesthetic visual rhythm and audience engagement.', aspectRatio: '9/16', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==' },
      { id: 'sc-3', numberLabel: '03 / 04', title: 'To anyone who is scared to create content 📸', description: 'Platform-native hook design and dynamic editing structure for organic reach.', aspectRatio: '9/16', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=' },
      { id: 'sc-4', numberLabel: '04 / 04', title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', aspectRatio: '9/16', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt' },
    ],
  },
  {
    id: 'youtube',
    eyebrowLabel: '06 / 06 ✦ CINEMATIC WIDESCREEN',
    title: 'YOUTUBE',
    subhead: 'Longer stories. More room to tell them.',
    icon: Tv,
    accentColor: '#B388FF',
    aspectRatio: '16/9',
    mobileCardWidth: 'w-full min-w-full',
    projects: [
      { id: 'yt-1', numberLabel: '01 / 02', title: '10th BOARD RESULT | Tears, Celebration & Heartbreaks | Official Film', description: 'Complete YouTube channel production: strategy, hook design, retention structure, and narrative flow.', aspectRatio: '16/9', gradientBg: 'from-[#FF9BD2]/45 via-[#140824] to-[#6D4AFF]/40', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM', duration: '12:45', tag: 'SHORT FILM • STORYTELLING' },
      { id: 'yt-2', numberLabel: '02 / 02', title: 'Messi Aur Billu Ki Kahani (PART 1)', description: 'Documentary-style YouTube episode following an idea from first thought to final execution.', aspectRatio: '16/9', gradientBg: 'from-[#B388FF]/40 via-[#140824] to-[#FFB6E6]/30', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/watch?v=A-OdwRbfPNA', duration: '08:30', tag: 'STORYTELLING • COMEDY' },
    ],
  },
];

interface PortfolioSectionProps {
  onOpenWorkModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenWorkModal }) => {
  const [selectedCard, setSelectedCard] = useState<PortfolioCategoryCard | null>(null);
  const [activeCardIds, setActiveCardIds] = useState<{ [key: string]: number }>({});
  // Desktop Internal Carousel States
  const [desktopReelIndex, setDesktopReelIndex] = useState(0);
  const [desktopYtIndex, setDesktopYtIndex] = useState(0);

  const desktopReelThumbnails = [
    '/assets/reel-thumb-1.jpg',
    '/assets/reel-thumb-2.jpg',
    '/assets/reel-thumb-3.jpg',
    '/assets/reel-thumb-4.jpg',
  ];

  const desktopReelTitles = [
    'POV: Found the best side hustle (Paid per reel) 💰',
    'Earn Money Via Reels 💵',
    'To anyone who is scared to create content 📸',
    'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥',
  ];

  const desktopYtThumbnails = [
    '/assets/yt-thumb-1.jpg',
    '/assets/yt-thumb-2.jpg',
    '/assets/yt-thumb-1.jpg',
    '/assets/yt-thumb-2.jpg',
  ];

  const desktopYtTitles = [
    '10th BOARD RESULT | Tears, Celebration & Heartbreaks | Official Film',
    'Messi Aur Billu Ki Kahani (PART 1)',
    'Day in the Life of a 21-Year-Old Personal Branding Strategist',
    'BRANDED YOUTUBE SPECIAL 04',
  ];

  const desktopYtUrls = [
    'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM',
    'https://www.youtube.com/watch?v=A-OdwRbfPNA',
    'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    'https://www.youtube.com/@Kidwithcrayons',
  ];

  const handleCarouselScroll = (sectionId: string, e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const cardWidth = target.firstElementChild?.clientWidth || 300;
    const newIdx = Math.max(0, Math.round(scrollLeft / (cardWidth + 16)));
    
    if (activeCardIds[sectionId] !== newIdx) {
      setActiveCardIds((prev) => ({
        ...prev,
        [sectionId]: newIdx,
      }));
    }
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
      <div className="w-full max-w-[1440px] mx-auto text-center space-y-3 mb-12 sm:mb-16 relative z-20">
        
        {/* Eyebrow Pill */}
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

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="
            font-display font-black uppercase
            text-[clamp(38px,8vw,56px)] lg:text-[clamp(64px,6.5vw,96px)]
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
          className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#FF9BD2] pt-1"
        >
          Let the work speak here.
        </motion.p>
      </div>

      {/* ========================================================================= */}
      {/* A. MOBILE LAYOUT (< 1024px PHONE & TABLET SCOPED): SWIPE CAROUSELS */}
      {/* ========================================================================= */}
      <div className="block lg:hidden w-full max-w-[1360px] mx-auto flex flex-col items-center relative z-20 space-y-16">
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
                data-lenis-prevent
                onScroll={(e) => handleCarouselScroll(section.id, e)}
                className="w-full flex flex-row flex-nowrap items-stretch gap-0 overflow-x-auto scroll-snap-type-x-mandatory no-scrollbar py-3 px-0 gpu-layer"
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

                          <div className="absolute top-4 left-4 z-20 pointer-events-none">
                            <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-mono text-xs font-bold text-[#FF9BD2]">
                              {proj.numberLabel}
                            </span>
                          </div>

                          <div className="absolute top-4 right-4 z-20">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                              <InstagramIcon className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                            <h3 className="font-bold text-xs text-white leading-snug line-clamp-1">
                              {proj.title}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-[#FFB3CB] shrink-0 ml-2" />
                          </div>
                        </div>

                        <div className="space-y-1 px-1 text-left">
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

                  // OTHER SECTIONS (FOOD, ARCHITECTURE, JEWELLERY, LONG-FORM, WELLBEING)
                  return (
                    <div
                      key={proj.id}
                      onClick={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.muted = false;

                          const handleExitFullscreen = () => {
                            video.muted = true;
                            video.removeEventListener('webkitendfullscreen', handleExitFullscreen);
                            document.removeEventListener('fullscreenchange', handleExitFullscreen);
                          };

                          video.addEventListener('webkitendfullscreen', handleExitFullscreen);
                          document.addEventListener('fullscreenchange', () => {
                            if (!document.fullscreenElement) {
                              handleExitFullscreen();
                            }
                          });

                          if (video.requestFullscreen) {
                            video.requestFullscreen().catch(() => {});
                          } else if ((video as any).webkitEnterFullscreen) {
                            (video as any).webkitEnterFullscreen();
                          }
                        }
                      }}
                      className={`
                        shrink-0 flex flex-col justify-between space-y-3
                        scroll-snap-align-center transition-all duration-500 cursor-pointer
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
                          transition-all duration-500 group gpu-layer
                          ${proj.aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-[9/16]'}
                          ${isActive ? 'shadow-[0_0_25px_rgba(255,155,210,0.3)] border-[#FF9BD2]/40' : ''}
                        `}
                      >
                        {proj.videoUrl ? (
                          <>
                            <video
                              src={proj.videoUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="w-full h-full object-cover rounded-[24px]"
                            />
                            <div className="absolute top-3 left-3 z-20 pointer-events-none">
                              <span className={`px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 font-mono text-xs font-bold ${isActive ? 'text-[#FF9BD2]' : 'text-white/70'}`}>
                                {proj.numberLabel}
                              </span>
                            </div>
                            <div className="absolute top-3 right-3 z-20 pointer-events-none px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] text-[#100719] font-mono text-[10px] font-black tracking-widest shadow-lg">
                              AI
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                              <span className="font-bold text-xs text-white leading-snug line-clamp-1">
                                {proj.title}
                              </span>
                            </div>
                            <div className="absolute inset-0 z-10 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(16,7,25,0.75)]" />
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 z-20 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(16,7,25,0.75)]" />
                            <div className="relative w-full h-full flex flex-col justify-between p-4 z-10 pointer-events-none">
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
                          </>
                        )}
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

            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* B. DESKTOP LAYOUT (LARGE SCREEN SCOPED >= 1024px): ASYMMETRIC BENTO GRID */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid w-full max-w-[1200px] mx-auto grid-cols-12 gap-5 relative z-20">
        
        {/* ----------------------------------------------------------------------- */}
        {/* CARD 01 — SOCIAL CONTENT (DOMINANT TALL VERTICAL - LEFT SIDE) */}
        {/* col-span-4, row-span-2 (~4:7 ratio, compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-4 row-span-2 min-h-[460px] rounded-[28px] overflow-hidden p-5 sm:p-6
            border border-white/15 bg-gradient-to-br from-[#FF9BD2]/20 via-[#190930] to-[#B388FF]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#FF9BD2]/70 hover:shadow-[0_0_35px_rgba(255,155,210,0.35)]
            flex flex-col justify-between relative group gpu-layer
          "
        >
          {/* TOP CARD HEADER */}
          <div className="flex items-center justify-between z-30 mb-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-[#FF9BD2]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                SOCIAL CONTENT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-[#FF9BD2]">
                0{desktopReelIndex + 1} / 04
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDesktopReelIndex((prev) => (prev === 0 ? 3 : prev - 1));
                  }}
                  aria-label="Previous Reel"
                  className="w-6.5 h-6.5 rounded-full bg-black/60 border border-white/20 hover:border-[#FF9BD2] hover:bg-[#FF9BD2] hover:text-[#100719] text-[#FFF7FF] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDesktopReelIndex((prev) => (prev === 3 ? 0 : prev + 1));
                  }}
                  aria-label="Next Reel"
                  className="w-6.5 h-6.5 rounded-full bg-black/60 border border-white/20 hover:border-[#FF9BD2] hover:bg-[#FF9BD2] hover:text-[#100719] text-[#FFF7FF] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* ACTIVE REEL SHOWCASE (VERTICAL 9:16) */}
          <div 
            onClick={() => setSelectedCard(CATEGORY_CARDS[0])}
            className="relative w-full flex-1 rounded-[20px] overflow-hidden border border-white/20 bg-[#121212] shadow-xl cursor-pointer group/reel my-1.5 min-h-[280px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={desktopReelIndex}
                src={desktopReelThumbnails[desktopReelIndex]}
                alt="Social Reel Preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover select-none brightness-[1.05] contrast-[1.05]"
              />
            </AnimatePresence>

            <div className="absolute top-3 right-3 z-20">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFB3CB] to-[#E91E8C] flex items-center justify-center shadow-lg">
                <InstagramIcon className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white z-20 group-hover/reel:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <span className="font-bold text-xs text-white leading-snug line-clamp-1">
                {desktopReelTitles[desktopReelIndex]}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FFB3CB] shrink-0 ml-1.5" />
            </div>
          </div>

          {/* FOOTER LABEL */}
          <div className="flex items-center justify-between pt-1.5">
            <span className="text-[11px] font-mono font-bold text-[#FF9BD2]">
              SHORT-FORM VIRAL REELS
            </span>
            <span className="text-[11px] font-mono text-white/50">4 REELS SHOWCASE</span>
          </div>

        </motion.div>

        {/* ----------------------------------------------------------------------- */}
        {/* CARD 02 — YOUTUBE VIDEOS (LARGE WIDE HORIZONTAL - TOP RIGHT) */}
        {/* col-span-8, row-span-1 (Aspect ~16:7, compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-8 row-span-1 min-h-[220px] rounded-[28px] overflow-hidden p-5 sm:p-6
            border border-white/15 bg-gradient-to-br from-[#B388FF]/20 via-[#120822] to-[#FFB6E6]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#B388FF]/70 hover:shadow-[0_0_35px_rgba(179,136,255,0.35)]
            flex flex-col justify-between relative group gpu-layer
          "
        >
          {/* TOP CARD HEADER */}
          <div className="flex items-center justify-between z-30 mb-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
              <Tv className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                YOUTUBE VIDEOS
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono font-bold text-red-400">
                0{desktopYtIndex + 1} / 04
              </span>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setDesktopYtIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      desktopYtIndex === dotIdx ? 'w-4 bg-red-500 shadow-[0_0_6px_#EF4444]' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ml-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDesktopYtIndex((prev) => (prev === 0 ? 3 : prev - 1));
                  }}
                  aria-label="Previous YouTube Video"
                  className="w-6.5 h-6.5 rounded-full bg-black/60 border border-white/20 hover:border-red-500 hover:bg-red-600 hover:text-white text-[#FFF7FF] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDesktopYtIndex((prev) => (prev === 3 ? 0 : prev + 1));
                  }}
                  aria-label="Next YouTube Video"
                  className="w-6.5 h-6.5 rounded-full bg-black/60 border border-white/20 hover:border-red-500 hover:bg-red-600 hover:text-white text-[#FFF7FF] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* ACTIVE YOUTUBE SHOWCASE (WIDESCREEN 16:9) */}
          <a 
            href={desktopYtUrls[desktopYtIndex]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full flex-1 rounded-[16px] overflow-hidden border border-white/15 bg-black shadow-lg cursor-pointer group/yt flex items-center justify-center my-1.5 min-h-[130px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={desktopYtIndex}
                src={desktopYtThumbnails[desktopYtIndex]}
                alt="YouTube Video Preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/25">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover/yt:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <span className="font-bold text-xs text-white leading-snug line-clamp-1">
                {desktopYtTitles[desktopYtIndex]}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-red-400 shrink-0 ml-2.5">
                Watch ↗
              </span>
            </div>
          </a>

        </motion.div>

        {/* ----------------------------------------------------------------------- */}
        {/* CARD 03 — AI VIDEO (MIDDLE LEFT UNDER YOUTUBE) */}
        {/* col-span-4, row-span-1 (compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          onClick={() => setSelectedCard(CATEGORY_CARDS[2])}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-4 row-span-1 min-h-[200px] rounded-[28px] overflow-hidden p-5
            border border-white/15 bg-gradient-to-br from-[#C084FC]/25 via-[#1E0938] to-[#FF9BD2]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#C084FC]/70 hover:shadow-[0_0_35px_rgba(192,132,252,0.35)]
            flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15">
              <Wand2 className="w-3.5 h-3.5 text-[#C084FC]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                SYNTHETIC MOTION
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] group-hover:bg-[#C084FC] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="space-y-0.5 z-30 pt-4">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#C084FC] transition-colors">
              AI VIDEO
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/75 line-clamp-2">
              Surreal visual poetry & synthetic motion concepts.
            </p>
          </div>
        </motion.div>

        {/* ----------------------------------------------------------------------- */}
        {/* CARD 04 — LONG-FORM VIDEOS (MIDDLE RIGHT BESIDE AI VIDEO) */}
        {/* col-span-4, row-span-1 (compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          onClick={() => setSelectedCard(CATEGORY_CARDS[3])}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-4 row-span-1 min-h-[200px] rounded-[28px] overflow-hidden p-5
            border border-white/15 bg-gradient-to-br from-[#6D4AFF]/25 via-[#120822] to-[#FF9BD2]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#6D4AFF]/70 hover:shadow-[0_0_35px_rgba(109,74,255,0.35)]
            flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15">
              <Video className="w-3.5 h-3.5 text-[#C4A1FF]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                DOCUMENTARY & ESSAYS
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] group-hover:bg-[#C4A1FF] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="space-y-0.5 z-30 pt-4">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#C4A1FF] transition-colors">
              LONG-FORM VIDEOS
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/75 line-clamp-2">
              Cinematic brand films & editorial narrative essays.
            </p>
          </div>
        </motion.div>

        {/* ----------------------------------------------------------------------- */}
        {/* CARD 05 — UGC (BOTTOM LEFT WIDE STRIP) */}
        {/* col-span-6, row-span-1 (compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          onClick={() => setSelectedCard(CATEGORY_CARDS[4])}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-6 row-span-1 min-h-[170px] rounded-[28px] overflow-hidden p-5
            border border-white/15 bg-gradient-to-br from-[#FF9BD2]/20 via-[#1D0A33] to-[#FFB6E6]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#FF9BD2]/70 hover:shadow-[0_0_35px_rgba(255,155,210,0.35)]
            flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15">
              <Heart className="w-3.5 h-3.5 text-[#FF9BD2]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                CREATOR-LED STORIES
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] group-hover:bg-[#FF9BD2] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="space-y-0.5 z-30 pt-3">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FF9BD2] transition-colors">
              UGC
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/75 line-clamp-2">
              Relatable, human-centric short-form stories designed for organic reach.
            </p>
          </div>
        </motion.div>

        {/* ----------------------------------------------------------------------- */}
        {/* CARD 06 — VIDEO EDITING (BOTTOM RIGHT WIDE STRIP) */}
        {/* col-span-6, row-span-1 (compact height) */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div
          onClick={() => setSelectedCard(CATEGORY_CARDS[5])}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            col-span-6 row-span-1 min-h-[170px] rounded-[28px] overflow-hidden p-5
            border border-white/15 bg-gradient-to-br from-[#B388FF]/20 via-[#1A0A2E] to-[#6D4AFF]/20
            backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#B388FF]/70 hover:shadow-[0_0_35px_rgba(179,136,255,0.35)]
            flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/15">
              <Compass className="w-3.5 h-3.5 text-[#B388FF]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                RETENTION & RHYTHM
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] group-hover:bg-[#B388FF] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="space-y-0.5 z-30 pt-3">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#B388FF] transition-colors">
              VIDEO EDITING
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/75 line-clamp-2">
              Mastering rhythm, audio hooks, color grading, and retention cuts.
            </p>
          </div>
        </motion.div>

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
