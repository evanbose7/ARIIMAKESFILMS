import React, { useMemo, useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BackgroundAmbientProps {
  scrollYProgress?: MotionValue<number>;
}

export const BackgroundAmbient: React.FC<BackgroundAmbientProps> = ({ scrollYProgress }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate 6 particles on mobile, 14 on desktop for lightweight performance
  const particles = useMemo(() => {
    const count = isMobile ? 6 : 14;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (i * 14 + 4) % 100,
      y: (i * 15 + 6) % 100,
      size: 3 + (i % 4) * 2,
      duration: 12 + (i % 5) * 2,
      delay: (i * 0.4) % 3,
      color: i % 2 === 0 ? '#FF9BD2' : '#B388FF',
    }));
  }, [isMobile]);

  // Scroll dynamics for background glow
  const bgGlowY = useTransform(scrollYProgress || new MotionValue(0), [0, 0.3], ['0%', '15%']);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#0F0718]">
      
      {/* 1. Large Radial Gradient Background */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #2A1247 0%, #150A26 50%, #0F0718 85%)',
        }}
      />

      {/* 2. Soft Pink Aurora-like Glow (Responsively sized for 375px/390px/428px up to desktop) */}
      <motion.div 
        style={{ 
          y: bgGlowY,
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #FFB6E6 40%, rgba(179, 136, 255, 0.3) 70%, transparent 90%)',
        }}
        className="
          absolute top-[-5%] left-1/2 -translate-x-1/2
          w-[92vw] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[450px] md:h-[550px]
          opacity-40 blur-[50px] sm:blur-[90px] md:blur-[120px]
          rounded-full pointer-events-none
        "
      />

      {/* 3. Subtle Shimmer Layer (Responsively positioned and sized) */}
      <div 
        className="
          absolute top-1/4 -right-10 sm:-right-20
          w-[75vw] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px]
          opacity-25 blur-[50px] sm:blur-[90px] md:blur-[130px]
          rounded-full pointer-events-none
        "
        style={{
          background: 'radial-gradient(circle, #FFD6F5 0%, #B388FF 60%, transparent 85%)',
        }}
      />

      {/* 4. Film Grain Texture */}
      <div className="absolute inset-0 film-grain opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* 5. Floating Bokeh Particles (6 on mobile, 14 on desktop) */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: `${p.y}vh`,
              opacity: 0.1,
            }}
            animate={{
              y: [`${p.y}vh`, `${p.y - 30}vh`, `${p.y - 65}vh`],
              x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 2 : -2)}vw`, `${p.x}vw`],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: p.delay,
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
            }}
            className="absolute rounded-full blur-[0.5px] pointer-events-none shadow-[0_0_8px_rgba(255,155,210,0.5)]"
          />
        ))}
      </div>
    </div>
  );
};
