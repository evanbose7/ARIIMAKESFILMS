import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Tv, Heart, ArrowRight, Sparkles, Send, Globe, Share2 } from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPortfolioLink: (type: 'YOUTUBE' | 'REELS' | 'BRAND WORKS') => void;
  onWorkWithMeClick?: () => void;
}

export const PORTFOLIO_CARDS = [
  {
    id: 'youtube',
    type: 'YOUTUBE' as const,
    title: 'YOUTUBE',
    caption: 'Long-form storytelling & editing',
    icon: Tv,
    glowColor: '#FF9BD2',
  },
  {
    id: 'reels',
    type: 'REELS' as const,
    title: 'REELS',
    caption: 'Short-form cinematic content',
    icon: Play,
    glowColor: '#B388FF',
  },
  {
    id: 'brand-works',
    type: 'BRAND WORKS' as const,
    title: 'BRAND WORKS',
    caption: 'Client campaigns & collaborations',
    icon: Heart,
    glowColor: '#FFB6E6',
  },
];

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectPortfolioLink,
}) => {
  const cardContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
          {/* Dimmed Page Overlay with Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0610]/55 backdrop-blur-[6px] z-40"
          />

          {/* Drawer Container (84vw on mobile, 360px max on desktop, 100svh) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) onClose();
            }}
            className="
              relative z-50 w-[84vw] max-w-[360px] h-[100svh]
              flex flex-col justify-between p-6 sm:p-7
              border-l border-white/[0.12]
              backdrop-blur-[24px] shadow-[-10px_0_40px_rgba(255,155,210,0.3)]
              overflow-y-auto no-scrollbar select-none
            "
            style={{
              background: 'linear-gradient(180deg, rgba(36,18,58,0.95) 0%, rgba(18,8,31,0.98) 100%)',
            }}
          >
            {/* Soft vertical pink glow line on left edge */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#FF9BD2] via-[#B388FF] to-transparent pointer-events-none opacity-80" />

            {/* Ambient Sparkles inside drawer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Sparkles className="absolute top-12 left-10 w-3 h-3 text-[#FF9BD2]/40 animate-pulse" />
              <Sparkles className="absolute top-1/2 right-8 w-4 h-4 text-[#B388FF]/30 animate-pulse" />
              <Sparkles className="absolute bottom-20 left-12 w-3.5 h-3.5 text-[#FFB6E6]/40 animate-pulse" />
            </div>

            {/* HEADER INSIDE DRAWER */}
            <div className="pt-2 flex items-center justify-between border-b border-white/10 pb-5 shrink-0 z-10">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-xl text-[#FFF7FF] tracking-tighter">
                    ARI
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
                </div>
                <span className="text-[9.5px] font-mono tracking-widest text-[#FF9BD2]/80 uppercase pt-0.5">
                  CREATOR · STORYTELLER · STRATEGIST
                </span>
              </div>

              {/* Close Glass Circular Button (Touch target >= 44px) */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="
                  min-w-[44px] min-h-[44px] w-[44px] h-[44px] rounded-full
                  bg-white/[0.08] border border-white/[0.14] text-[#FFF7FF]
                  backdrop-blur-[16px] flex items-center justify-center
                  hover:border-[#FFB6E6] hover:bg-white/[0.14] transition-all duration-300
                  active:scale-95 cursor-pointer
                "
              >
                <X className="w-5 h-5 text-[#FFF7FF]" />
              </button>
            </div>

            {/* PORTFOLIO SHORTCUT LINKS (STACKED GLASS CARDS) */}
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="show"
              className="flex-1 flex flex-col justify-center gap-[18px] py-8 z-10"
            >
              {PORTFOLIO_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onSelectPortfolioLink(card.type);
                      onClose();
                    }}
                    className="
                      group relative w-full rounded-[28px] p-[22px]
                      bg-white/[0.06] border border-white/[0.12]
                      backdrop-blur-[18px] shadow-[0_8px_32px_rgba(179,136,255,0.18)]
                      hover:border-[#FFB6E6] hover:bg-white/[0.10]
                      transition-all duration-300 cursor-pointer overflow-hidden
                      flex items-center justify-between min-h-[96px]
                    "
                  >
                    {/* Pink Glow behind card on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF9BD2]/10 to-[#B388FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex flex-col space-y-1 relative z-10">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#FF9BD2] group-hover:scale-110 transition-transform" />
                        <h3 className="font-display font-bold text-[22px] text-[#FFF7FF] tracking-wide group-hover:text-[#FF9BD2] transition-colors">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-[14px] text-[#FFF7FF]/70 font-normal leading-snug">
                        {card.caption}
                      </p>
                    </div>

                    <div className="relative z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF9BD2] group-hover:bg-[#FF9BD2]/20 transition-all shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#FFF7FF] group-hover:text-[#FF9BD2] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* BOTTOM SOCIAL AREA */}
            <div className="pt-4 border-t border-white/10 shrink-0 z-10 flex flex-col space-y-3">
              <div className="flex items-center justify-between text-[14px] font-medium text-[#FFF7FF]/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9BD2] hover:drop-shadow-[0_0_8px_#FF9BD2] transition-all py-1.5 px-2 rounded min-h-[48px] flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#FF9BD2]" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF9BD2] hover:drop-shadow-[0_0_8px_#FF9BD2] transition-all py-1.5 px-2 rounded min-h-[48px] flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#B388FF]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:ari@creator.com"
                  className="hover:text-[#FF9BD2] hover:drop-shadow-[0_0_8px_#FF9BD2] transition-all py-1.5 px-2 rounded min-h-[48px] flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#FFB6E6]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
