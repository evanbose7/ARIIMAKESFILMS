import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Video, Clapperboard, Heart, PenTool, CheckCircle2 } from 'lucide-react';

export const CHIPS_DATA = [
  { 
    id: 'ai-video', 
    label: 'AI VIDEO CREATOR', 
    icon: Sparkles,
    detail: 'Generative AI cinematography, Runway Gen-3, Midjourney v6 visual direction, custom AI workflow pipelines.' 
  },
  { 
    id: 'strategist', 
    label: 'CONTENT STRATEGIST', 
    icon: Heart,
    detail: 'High-converting viral hooks, brand positioning, audience funnel retention, 360° social content architecture.' 
  },
  { 
    id: 'editor', 
    label: 'VIDEO EDITOR', 
    icon: Clapperboard,
    detail: 'Premiere Pro & DaVinci Resolve color grading, rhythm-matched sound design, cinematic pacing, speed ramps.' 
  },
  { 
    id: 'ugc', 
    label: 'UGC CREATOR', 
    icon: Video,
    detail: 'Authentic founder-led UGC, high-energy product showcases, native TikTok & Reel engagement optimization.' 
  },
  { 
    id: 'storyteller', 
    label: 'STORYTELLER', 
    icon: PenTool,
    detail: 'Scriptwriting, emotional narrative arcs, brand voice synthesis, high-impact manifesto copy.' 
  },
];

interface RoleChipsProps {
  onSelectChip?: (chipId: string) => void;
}

export const RoleChips: React.FC<RoleChipsProps> = ({ onSelectChip }) => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }
    },
  };

  const handleChipClick = (chipId: string) => {
    const next = activeChip === chipId ? null : chipId;
    setActiveChip(next);
    if (onSelectChip) onSelectChip(chipId);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-1.5 shrink-0 z-20">
      {/* Scrollable Container on Mobile, Centered Row on Desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          w-full max-w-full md:max-w-4xl
          flex items-center gap-2
          overflow-x-auto no-scrollbar
          py-0.5 px-2 md:px-0 md:justify-center
          scroll-smooth touch-pan-x h-[40px]
        "
      >
        {CHIPS_DATA.map((chip) => {
          const Icon = chip.icon;
          const isActive = activeChip === chip.id;

          return (
            <motion.button
              key={chip.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleChipClick(chip.id)}
              className={`
                shrink-0 h-[36px] px-[14px] rounded-full
                flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium tracking-[0.08em] uppercase
                transition-all duration-300 select-none cursor-pointer
                ${
                  isActive
                    ? 'bg-gradient-to-r from-[#EC4899]/30 to-[#A855F7]/30 border-[#F472B6] text-[#FDF4F8] shadow-[0_0_18px_rgba(244,114,182,0.4)]'
                    : 'bg-[#1C102B]/70 border border-[#F472B6]/20 text-[#FDF4F8]/80 hover:border-[#F472B6] hover:bg-[#EC4899]/15 hover:text-[#FDF4F8]'
                }
              `}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F472B6]' : 'text-[#C084FC]'}`} />
              <span>{chip.label}</span>
              {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#F472B6] ml-0.5" />}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Active Chip Drawer */}
      <AnimatePresence>
        {activeChip && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl mt-1 overflow-hidden"
          >
            <div className="bg-[#1C102B] border border-[#F472B6]/40 rounded-xl p-2.5 text-center text-xs text-[#FDF4F8] shadow-lg flex items-center justify-between gap-2">
              <span className="text-[#F472B6] font-semibold tracking-wider uppercase text-[10px]">
                {CHIPS_DATA.find((c) => c.id === activeChip)?.label}:
              </span>
              <p className="flex-1 text-left text-[#FDF4F8]/80 text-[11px]">
                {CHIPS_DATA.find((c) => c.id === activeChip)?.detail}
              </p>
              <button 
                onClick={() => setActiveChip(null)}
                className="text-white/40 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-white/10"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
