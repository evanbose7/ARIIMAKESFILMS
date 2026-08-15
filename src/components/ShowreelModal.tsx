import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Film, Sparkles, Volume2 } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTitle?: string;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  activeTitle = 'ARI CINEMATIC REEL 2026',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F0817]/95 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="
              relative w-full max-w-4xl bg-[#1C102B] border border-[#F472B6]/40
              rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(236,72,153,0.35)] z-10
              royal-rim-light flex flex-col
            "
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F472B6]/20 bg-[#0F0817]/60">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#F472B6]" />
                <span className="font-display font-bold text-sm text-[#FDF4F8] uppercase tracking-wider">
                  {activeTitle}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
              {/* Simulated Reel Backdrop */}
              <img
                src="/ari_portrait.jpg"
                alt="Reel Preview"
                className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0817]/90 via-[#0F0817]/30 to-[#0F0817]/50 flex flex-col items-center justify-center p-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-[#13091F] flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.7)] cursor-pointer mb-4"
                >
                  <Play className="w-8 h-8 fill-current ml-1 text-[#13091F]" />
                </motion.button>
                
                <span className="text-xs font-mono tracking-widest text-[#F472B6] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" /> 4K DIRECTORS CUT • 01:45
                </span>
                <p className="text-xs text-[#FDF4F8]/70 max-w-md mt-1">
                  Featuring AI Video Generative Cinematography, UGC Campaign Hooks, and Narrative Editing.
                </p>
              </div>

              {/* Audio Badge */}
              <div className="absolute bottom-4 right-4 bg-[#0F0817]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-mono flex items-center gap-1.5 border border-[#F472B6]/30">
                <Volume2 className="w-3.5 h-3.5 text-[#F472B6]" />
                <span>STEREO 48KHZ AUDIO</span>
              </div>
            </div>

            {/* Reel Footer info */}
            <div className="p-4 md:p-6 bg-[#1C102B] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#FDF4F8]/60">
              <div className="flex gap-4">
                <span>CLIENTS: NIKE, TECHFEST, AURA, ULTRA</span>
                <span>ROLES: CREATIVE DIR / EDITOR / AI</span>
              </div>
              <button
                onClick={onClose}
                className="text-[#F472B6] font-bold uppercase tracking-wider hover:underline"
              >
                CLOSE REEL
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
