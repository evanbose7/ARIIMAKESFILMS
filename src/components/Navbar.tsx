import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenMenuDrawer: () => void;
  onWorkWithMeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuDrawer }) => {
  return (
    <>
      {/* Top Left ARI Logo */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-5 md:left-8 z-40 select-none"
      >
        <a
          href="#"
          className="flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="font-display font-bold text-lg md:text-2xl tracking-tighter text-[#FFF7FF] group-hover:text-[#FF9BD2] transition-colors">
            ARI
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </a>
      </motion.div>

      {/* Top Right Circular Glass Menu Trigger (20px from top & right) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9, y: -16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06, rotate: 6 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenMenuDrawer}
        aria-label="Open portfolio navigation drawer"
        className="
          fixed top-5 right-5 z-40
          w-[46px] h-[46px] rounded-full
          bg-white/[0.08] border border-white/[0.14] text-[#FFF7FF]
          backdrop-blur-[16px] shadow-[0_8px_32px_rgba(179,136,255,0.2)]
          hover:border-[#FFB6E6] hover:bg-white/[0.14]
          hover:shadow-[0_0_25px_rgba(255,155,210,0.5)]
          flex items-center justify-center
          transition-all duration-300 cursor-pointer group
        "
      >
        {/* 3 Elegant Curved Lines with Pink-to-Lavender Gradient & Subtle Glow */}
        <div className="flex flex-col gap-1.5 items-center justify-center w-5">
          <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] shadow-[0_0_6px_#FF9BD2] group-hover:w-5 transition-all" />
          <span className="w-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] shadow-[0_0_6px_#B388FF] group-hover:w-5 transition-all" />
          <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#FF9BD2] to-[#B388FF] shadow-[0_0_6px_#FF9BD2] group-hover:w-5 transition-all" />
        </div>
      </motion.button>
    </>
  );
};
