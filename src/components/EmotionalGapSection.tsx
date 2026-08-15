import React, { useMemo } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Sparkles, HelpCircle, Play } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface EmotionalGapSectionProps {
  scrollYProgress?: MotionValue<number>;
  onSeeMyWorkClick?: () => void;
}

export const QUESTION_CARDS = [
  { id: 'q1', text: 'Does your content look the way you imagined it?' },
  { id: 'q2', text: 'Does it sound like you?' },
  { id: 'q3', text: 'Does it capture the feeling you have in your head?' },
];

export const TITLE_LINES = [
  "DOES YOUR BRAND",
  "ACTUALLY LOOK &",
  "SOUND LIKE YOU?"
];

export const EmotionalGapSection: React.FC<EmotionalGapSectionProps> = ({
  onSeeMyWorkClick,
}) => {
  // 8 subtle particles randomly distributed across the top transition boundary
  const boundaryParticles = useMemo(() => {
    return [
      { id: 1, left: '12%', top: '20px', size: 4, color: '#FF9BD2' },
      { id: 2, left: '28%', top: '60px', size: 3, color: '#B388FF' },
      { id: 3, left: '48%', top: '15px', size: 5, color: '#FFF7FF' },
      { id: 4, left: '62%', top: '80px', size: 3, color: '#FFB6E6' },
      { id: 5, left: '78%', top: '35px', size: 4, color: '#FF9BD2' },
      { id: 6, left: '88%', top: '90px', size: 3, color: '#B388FF' },
      { id: 7, left: '35%', top: '110px', size: 4, color: '#FFD6F5' },
      { id: 8, left: '70%', top: '125px', size: 3, color: '#FFF7FF' },
    ];
  }, []);

  const titleContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  // Title emerges: opacity 0->1, Y 30px->0, blur 8px->0, duration 0.8s
  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 18, 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] 
      },
    },
  };

  const cardContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-14 sm:pt-20 pb-24 px-4 overflow-hidden z-20 bg-[#12081F] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* TOP 100-150PX SOFT LAVENDER/PINK ATMOSPHERIC AURORA GLOW OVERLAPPING WITH HERO */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[150px] opacity-40 blur-[90px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at top center, #FF9BD2 0%, #B388FF 50%, transparent 100%)',
        }}
      />

      {/* 6-10 SUBTLE PARTICLES RANDOMIZED ACROSS BOUNDARY */}
      <div className="absolute top-0 inset-x-0 h-[140px] pointer-events-none overflow-hidden z-10">
        {boundaryParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, 18, 0],
            }}
            transition={{
              duration: 4 + (p.id % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.id * 0.3,
            }}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
            }}
            className="absolute rounded-full blur-[0.5px] shadow-[0_0_6px_rgba(255,155,210,0.5)]"
          />
        ))}
      </div>

      {/* Blurred Handwritten Notes Silhouettes Floating in Background */}
      <div className="absolute top-1/4 left-6 sm:left-12 opacity-15 blur-[2px] rotate-[-12deg] pointer-events-none text-xs font-serif italic text-[#FFB6E6] max-w-[140px]">
        "the raw idea in my head vs what actually gets posted..."
      </div>
      <div className="absolute bottom-1/3 right-6 sm:right-12 opacity-15 blur-[2px] rotate-[8deg] pointer-events-none text-xs font-serif italic text-[#B388FF] max-w-[150px]">
        "make it feel genuine, cinematic, intentional..."
      </div>

      {/* Main Container Capped to Max-Width 640px */}
      <div className="w-full max-w-[640px] mx-auto flex flex-col items-center text-center space-y-12 relative z-10">

        {/* 1. EYEBROW BADGE: THINK ABOUT IT. ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-white/[0.08] border border-white/[0.14] backdrop-blur-[16px]
            text-[11px] font-bold tracking-widest uppercase text-[#FFE6FA]
            shadow-[0_0_15px_rgba(255,155,210,0.3)]
          "
        >
          <span>THINK ABOUT IT</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
        </motion.div>

        {/* 2. TITLE BEGINNING 80-120PX AFTER HERO ENDS */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Blurred Sticky Note Backplate */}
          <div className="absolute -top-6 w-[280px] h-[120px] bg-[#FF9BD2]/15 blur-2xl rounded-3xl pointer-events-none" />

          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full"
          >
            <h2 className="font-display font-bold text-center flex flex-col items-center justify-center">
              {TITLE_LINES.map((line, index) => (
                <div key={index} className="overflow-hidden py-0.5">
                  <motion.span
                    variants={lineVariants}
                    className="
                      block uppercase
                      text-[clamp(34px,9vw,54px)] md:text-[clamp(44px,6vw,60px)]
                      leading-[0.96] tracking-[-0.03em] font-bold text-center
                      bg-gradient-to-b from-[#FFF7FF] to-[#FFC8EE] bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(255,155,210,0.35)]
                    "
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h2>
          </motion.div>
        </div>

        {/* 3. INTRO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            text-center font-normal text-[#FFF7FF]/85
            text-[18px] sm:text-[20px] md:text-[22px] leading-[1.7] max-w-[620px] tracking-tight
          "
        >
          No, seriously. Don't just skim past this question. <span className="text-[#FFF7FF] font-medium">Take a moment and think about it.</span>
        </motion.p>

        {/* 4. THREE FLOATING QUESTION CARDS */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-5 my-4"
        >
          {QUESTION_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 3.5 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="
                w-full bg-white/[0.08] border border-white/[0.14]
                backdrop-blur-[18px] rounded-[28px] p-6
                shadow-[0_8px_32px_rgba(179,136,255,0.18)]
                flex items-center gap-4 text-left transition-all duration-300
                hover:border-[#FF9BD2] hover:shadow-[0_0_25px_rgba(255,155,210,0.3)]
              "
            >
              <div className="w-10 h-10 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2]/40 text-[#FF9BD2] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-[17px] sm:text-[19px] md:text-[20px] font-medium text-[#FFF7FF] leading-snug">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. CONNECTING MESSAGE WITH INTENTIONAL EDITORIAL HIERARCHY */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-center font-normal text-[#FFF7FF]/85
            text-[19px] sm:text-[21px] md:text-[23px] leading-[1.7] max-w-[640px] tracking-tight pt-4
          "
        >
          <span className="text-[#FF9BD2] font-semibold">If the answer is no...</span> You're in the right place. I take the <span className="text-[#FFF7FF] font-medium">ideas, stories and feelings in your head</span> and turn them into content that feels <span className="bg-gradient-to-r from-[#FFF7FF] via-[#FFC8EE] to-[#C4A1FF] bg-clip-text text-transparent font-bold">INTENTIONAL, BEAUTIFUL AND GENUINELY YOURS.</span>
        </motion.p>

        {/* 6. GLOWING CENTERPIECE CARD (YOUR IDEAS • MY EXECUTION) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
            w-full p-[2px] rounded-[32px]
            bg-gradient-to-r from-[#FF9BD2] to-[#B388FF]
            shadow-[0_0_40px_rgba(255,155,210,0.5)]
            my-4
          "
        >
          <div className="
            w-full rounded-[30px] bg-[#140A1E]/90 backdrop-blur-xl p-7 text-center
            flex flex-col items-center justify-center space-y-1
          ">
            <Sparkles className="w-5 h-5 text-[#FF9BD2] animate-pulse mb-1" />
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FF] via-[#FF9BD2] to-[#B388FF] tracking-wider uppercase">
              YOUR IDEAS. MY EXECUTION.
            </h3>
            <p className="text-xs font-mono text-[#FFD6F5]/70 tracking-widest pt-1 uppercase">
              ✦ BRIDGING VISION & REALITY ✦
            </p>
          </div>
        </motion.div>

        {/* 7. SINGLE CTA BUTTON: SEE MY WORK */}
        <div className="w-full flex justify-center pt-2">
          <MagneticButton
            onClick={onSeeMyWorkClick}
            ariaLabel="See My Work"
            className="!w-[220px] !h-[54px]"
          >
            <Play className="w-4 h-4 fill-current text-[#1A1026]" />
            <span>SEE MY WORK</span>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
