import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AboutSectionProps {
  portraitSrc?: string;
  onWorkWithMeClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portraitSrc = '/ari_portrait.jpg',
}) => {
  const [imgError, setImgError] = useState<boolean>(false);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full min-h-screen py-24 sm:py-32 px-4 sm:px-6 overflow-hidden z-20 bg-[#14091F] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* 1. QUIET STUDIO ATMOSPHERIC SOFT RADIAL GLOW BEHIND PORTRAIT */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[950px] h-[850px] opacity-25 blur-[180px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 40%, #8B5CF6 70%, #14091F 100%)',
        }}
      />

      {/* 2. RESTRAINED 4-6 SLOW DRIFTING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{
              opacity: [0.05, 0.2, 0.05],
              y: [0, (i % 2 === 0 ? 14 : -14), 0],
            }}
            transition={{
              duration: 7 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
            style={{
              left: `${(i * 18 + 12) % 88}%`,
              top: `${(i * 16 + 14) % 82}%`,
              width: `${3 + (i % 2) * 2}px`,
              height: `${3 + (i % 2) * 2}px`,
              backgroundColor: i % 2 === 0 ? '#FF9BD2' : '#C084FC',
            }}
            className="absolute rounded-full blur-[0.5px] shadow-[0_0_6px_rgba(255,155,210,0.3)]"
          />
        ))}
      </div>

      {/* MAIN CONTAINER CAPPED TO MAX WIDTH 1120PX */}
      <div className="w-full max-w-[1120px] mx-auto flex flex-col items-center space-y-20 sm:space-y-28 relative z-20">

        {/* ========================================================================= */}
        {/* ELEGANT TWO-PART ASYMMETRICAL EDITORIAL SPREAD */}
        {/* ========================================================================= */}
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left"
        >
          
          {/* LEFT SIDE: ONE STRONG EDITORIAL PORTRAIT WITH ASYMMETRIC ORGANIC CROP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '150px 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              x: mouseOffset.x * 0.5,
              y: mouseOffset.y * 0.5,
            }}
            className="lg:col-span-5 relative w-full flex justify-center items-center my-4 lg:my-0 gpu-layer"
          >
            {/* Soft Ambient Radial Halo */}
            <motion.div 
              style={{
                x: mouseOffset.x * 0.25,
                y: mouseOffset.y * 0.25,
                background: 'radial-gradient(circle, rgba(255,155,210,0.4) 0%, rgba(192,132,252,0.25) 60%, transparent 80%)',
              }}
              className="absolute -inset-6 rounded-full blur-3xl opacity-60 pointer-events-none"
            />

            {/* Asymmetrical Editorial Organic Frame: border-radius: 32px 32px 120px 32px */}
            <div className="relative p-[2px] rounded-[32px] rounded-br-[120px] bg-gradient-to-br from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF] shadow-[0_20px_50px_rgba(255,155,210,0.35)]">
              <div 
                className="
                  relative overflow-hidden cursor-pointer
                  w-[calc(100vw-40px)] max-w-[380px] sm:max-w-[420px] h-[440px] sm:h-[520px]
                  rounded-[30px] rounded-br-[118px] bg-[#1F0C36]
                  shadow-[0_15px_40px_rgba(15,7,24,0.8)]
                  transition-transform duration-700 transform hover:scale-[1.015]
                "
              >
                {/* Natural Editorial Light Leak Rim */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-[30px] rounded-br-[118px] border-2 border-white/20 shadow-[inset_0_0_25px_rgba(255,155,210,0.3)]" />
                <div className="absolute inset-0 z-10 pointer-events-none film-grain mix-blend-overlay opacity-30" />
                
                {/* Photorealistic Portrait or Elegant Editorial Fallback */}
                {!imgError ? (
                  <img
                    src={portraitSrc}
                    alt="Ari - Creator"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center contrast-[1.03] brightness-[1.02] transition-all duration-700 hover:scale-[1.025] gpu-layer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#FF9BD2]/30 via-[#2A1047] to-[#B388FF]/30 flex flex-col items-center justify-center p-6 text-center">
                    <Sparkles className="w-10 h-10 text-[#FF9BD2] animate-pulse mb-3" />
                    <span className="font-display font-black text-2xl text-[#FFF7FF] tracking-wider uppercase">
                      ARI PORTRAIT
                    </span>
                    <span className="text-xs font-mono text-[#FF9BD2] tracking-widest pt-2 uppercase">
                      ✦ CREATOR PORTRAIT ✦
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 3 TINY MAGAZINE ANNOTATIONS AROUND PORTRAIT */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-2 sm:-left-6 z-30 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-widest text-[#FFE6FA] uppercase shadow-[0_0_15px_rgba(255,155,210,0.25)] select-none"
            >
              CREATOR ✦
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/3 -right-3 sm:-right-8 z-30 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-widest text-[#FFE6FA] uppercase shadow-[0_0_15px_rgba(255,155,210,0.25)] select-none"
            >
              STORYTELLER
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 right-8 z-30 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] backdrop-blur-md text-[11px] font-mono font-bold tracking-widest text-[#FFE6FA] uppercase shadow-[0_0_15px_rgba(255,155,210,0.25)] select-none"
            >
              CONTENT × AI
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: BIOGRAPHY STORY (VERBATIM ONLY - NO CARDS, NO TIMELINES) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            
            {/* SECTION INTRO EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '150px 0px' }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#FF9BD2]"
            >
              <span>A LITTLE ABOUT ME.</span>
              <span className="text-[#FF9BD2] animate-pulse">✦</span>
            </motion.div>

            {/* INTRO SENTENCE */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '150px 0px' }}
              transition={{ duration: 0.6 }}
              className="
                font-display font-extrabold
                text-[24px] sm:text-[30px] md:text-[36px] leading-[1.15] tracking-[-0.02em]
                bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent
                drop-shadow-[0_0_20px_rgba(255,155,210,0.35)]
              "
            >
              I'm Ari — a creator working at the intersection of <span className="text-[#FF9BD2] font-black">content</span>, <span className="text-[#B388FF] font-black">storytelling</span>, <span className="text-[#FFB6E6] font-black">video</span> and <span className="text-[#FFF7FF] font-black">AI</span>.
            </motion.h2>

            {/* CONTINUOUS BIOGRAPHY PARAGRAPHS (VERBATIM COPY ONLY) */}
            <div className="space-y-6 max-w-[660px]">
              {/* Paragraph 01 */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '150px 0px' }}
                transition={{ duration: 0.5 }}
                className="font-normal text-[#FFF7FF]/85 text-[17px] sm:text-[19px] md:text-[21px] leading-[1.7] tracking-tight"
              >
                I started with animation and filmmaking and eventually moved into content creation, editing, social media and AI-powered production.
              </motion.p>

              {/* Paragraph 02 */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '150px 0px' }}
                transition={{ duration: 0.5 }}
                className="font-normal text-[#FFF7FF]/85 text-[17px] sm:text-[19px] md:text-[21px] leading-[1.7] tracking-tight"
              >
                I've always loved the process of taking something that exists only as an idea and turning it into <span className="bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent font-semibold">something you can actually see, feel and share.</span>
              </motion.p>

              {/* Paragraph 03 */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '150px 0px' }}
                transition={{ duration: 0.5 }}
                className="font-normal text-[#FFF7FF]/85 text-[17px] sm:text-[19px] md:text-[21px] leading-[1.7] tracking-tight"
              >
                Today, I bring all of those skills together to help businesses create content that feels <span className="text-[#FF9BD2] font-medium">intentional</span>, <span className="text-[#B388FF] font-medium">creative</span> and <span className="text-[#FFF7FF] font-bold">genuinely theirs.</span>
              </motion.p>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* THE EMOTIONAL MANIFESTO CONCLUSION */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center space-y-6 text-center pt-12 sm:pt-20 border-t border-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[850px] space-y-4"
          >
            {/* First Statement */}
            <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#FFF7FF]/85 tracking-tight uppercase leading-snug">
              I'm not here to make your brand look like everyone else's.
            </p>

            {/* Second Statement (Strongest Typography Moment) */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="
                font-display font-black
                text-[32px] sm:text-[50px] md:text-[68px] lg:text-[76px]
                leading-[0.95] tracking-[-0.03em] uppercase pt-2
                bg-gradient-to-r from-[#FF9BD2] via-[#FFD6F5] to-[#B388FF] bg-clip-text text-transparent
                drop-shadow-[0_0_40px_rgba(255,155,210,0.55)]
              "
            >
              I'm here to help you <br />
              <span className="text-[#FFF7FF] font-black">make it look like you.</span>
            </motion.h2>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
