import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PortraitProps {
  imageSrc?: string;
  onImageClick?: () => void;
  scrollYProgress?: MotionValue<number>;
}

export const FLOATING_TAGS = [
  { id: 'ai-video', label: 'AI VIDEO', position: 'top-2 -left-4 sm:-left-8' },
  { id: 'ugc', label: 'UGC', position: 'top-10 -right-3 sm:-right-6' },
  { id: 'editing', label: 'EDITING', position: 'bottom-12 -left-5 sm:-left-10' },
  { id: 'storytelling', label: 'STORYTELLING', position: 'bottom-2 -right-4 sm:-right-8' },
  { id: 'strategy', label: 'STRATEGY', position: '-top-3 right-8 sm:right-12' },
];

export const Portrait: React.FC<PortraitProps> = ({
  imageSrc = '/ari_portrait.jpg',
  onImageClick,
  scrollYProgress,
}) => {
  // Scroll dynamics: portrait moves up by 8%, halo expands slightly
  const scrollY = useTransform(scrollYProgress || new MotionValue(0), [0, 0.3], ['0%', '-8%']);
  const haloScale = useTransform(scrollYProgress || new MotionValue(0), [0, 0.3], [1, 1.05]);

  return (
    <motion.div
      style={{ y: scrollY }}
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="relative flex items-center justify-center mx-auto z-20 gpu-layer shrink-0 my-1"
    >
      {/* Outer Halo Container */}
      <motion.div style={{ scale: haloScale }} className="relative flex items-center justify-center">
        
        {/* Soft Pink Aurora Backglow */}
        <div 
          className="absolute -inset-6 rounded-full blur-2xl pointer-events-none opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(255, 155, 210, 0.5) 0%, rgba(179, 136, 255, 0.3) 60%, transparent 80%)',
          }}
        />

        {/* Orbiting Tiny Sparkles Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 rounded-full pointer-events-none z-30"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Sparkles className="w-4 h-4 text-[#FF9BD2] drop-shadow-[0_0_8px_#FF9BD2]" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <Sparkles className="w-3.5 h-3.5 text-[#B388FF] drop-shadow-[0_0_8px_#B388FF]" />
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
            <Sparkles className="w-3 h-3 text-[#FFD6F5] drop-shadow-[0_0_6px_#FFD6F5]" />
          </div>
        </motion.div>

        {/* Thin Gradient Ring Halo from Pink #FF9BD2 to Lavender #B388FF */}
        <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF] shadow-[0_0_35px_rgba(255,155,210,0.55)]">
          
          {/* Circular Portrait Display */}
          <div
            onClick={onImageClick}
            className="
              relative overflow-hidden cursor-pointer
              w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]
              rounded-full bg-[#2A1247]
              shadow-[0_15px_40px_rgba(15,7,24,0.8)]
              transition-transform duration-700 transform hover:scale-[1.02]
            "
          >
            {/* Soft Pink-Lavender Rim Light Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-full border-2 border-white/20 shadow-[inset_0_0_20px_rgba(255,155,210,0.4)]" />

            {/* Film Grain Texture */}
            <div className="absolute inset-0 z-10 pointer-events-none film-grain mix-blend-overlay opacity-30" />

            {/* Soft Dreamy Tint Filter Overlay */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-60"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 155, 210, 0.4) 0%, rgba(179, 136, 255, 0.3) 100%)',
              }}
            />

            {/* Colorful Original Hero Portrait Image */}
            <img
              src={imageSrc}
              alt="Ari - Visionary Creator"
              className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.02] transition-transform duration-500 ease-out hover:scale-[1.04] will-change-transform gpu-layer"
              loading="eager"
            />
          </div>

        </div>

      </motion.div>

      {/* 5 FLOATING ROLE GLASS CHIPS AROUND PORTRAIT */}
      {FLOATING_TAGS.map((tag, idx) => (
        <motion.div
          key={tag.id}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3 + (idx % 3) * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: idx * 0.2,
          }}
          className={`
            absolute ${tag.position} z-40
            chip-glass rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5
            flex items-center gap-1
            text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#FFE6FA]
            select-none cursor-pointer hover:border-[#FF9BD2] hover:shadow-[0_0_20px_rgba(255,155,210,0.5)]
            transition-all duration-300
          `}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9BD2] animate-pulse" />
          <span>{tag.label}</span>
        </motion.div>
      ))}

    </motion.div>
  );
};
