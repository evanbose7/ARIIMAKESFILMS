import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    // Bypasses magnetic mouse offset on touch/mobile screens to prevent sticky offsets
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    const maxOffset = 6; // Magnetic movement up to 6px
    const distance = Math.sqrt(middleX * middleX + middleY * middleY);
    const maxDistance = Math.max(width, height);

    if (distance < maxDistance) {
      const factor = (1 - distance / maxDistance) * maxOffset;
      setPosition({
        x: (middleX / (width / 2)) * factor,
        y: (middleY / (height / 2)) * factor,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleTouchEnd = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
      transition={{ 
        delay: 0.6,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{ scale: 0.97 }}
      aria-label={ariaLabel}
      className={`
        relative inline-flex items-center justify-center
        min-h-[48px] sm:min-h-[56px] h-[56px] w-full max-w-[280px] rounded-full
        bg-gradient-to-r from-[#FF9BD2] to-[#B388FF]
        text-[#1A1026] font-bold text-sm tracking-wider uppercase
        cursor-pointer select-none gpu-layer overflow-hidden
        shadow-[0_0_30px_rgba(255,155,210,0.5),0_0_50px_rgba(179,136,255,0.3)]
        hover:shadow-[0_0_40px_rgba(255,155,210,0.7)] transition-all duration-300
        ${className}
      `}
    >
      {/* Glossy Highlight at the Top */}
      <div className="absolute top-0 inset-x-4 h-[2px] bg-white/60 rounded-full blur-[0.5px] pointer-events-none" />

      {/* Glass Reflection Beam */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.7) 50%, transparent 65%)',
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
};
