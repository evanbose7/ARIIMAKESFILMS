import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export interface Principle {
  number: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlight?: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  badge: string;
}

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'I ACTUALLY LISTEN.',
    subtitle: 'Not just to your brief — to you.',
    paragraphs: [
      "I'll take the time to understand what you're imagining, what you're trying to communicate and what you don't want your brand to become.",
      "Sometimes the best content idea isn't in the brief. It's somewhere in the conversation.",
    ],
    icon: Compass,
    tags: ['"what are you imagining?"', '"what should this feel like?"', '"what DON\'T you want?"'],
    badge: 'UNDERSTANDING ✦',
  },
  {
    number: '02',
    title: "I'M IN YOUR CORNER.",
    subtitle: 'Whether a video gets 10 views or 10 lakh, I\'ll still be rooting for you.',
    paragraphs: [
      'Content creation is unpredictable. Sometimes you nail it. Sometimes the algorithm has other plans.',
      "But the effort, the learning and the next idea? I'll be there for all of it.",
    ],
    icon: Heart,
    tags: ['10 views', '10K views', '10L views'],
    badge: 'KEEP GOING ✦',
  },
  {
    number: '03',
    title: 'I CARE ABOUT THE WHY.',
    subtitle: 'I don\'t want to make something that simply looks good.',
    paragraphs: [
      'I want to know: Why are we making this? Who is it for? What should they feel?',
      "Because when there's a reason behind the content, the content starts feeling real.",
    ],
    icon: ShieldCheck,
    tags: ['WHY?', 'WHO?', 'FEEL?'],
    badge: 'PURPOSE ✦',
  },
  {
    number: '04',
    title: 'I KEEP IT COST-EFFECTIVE.',
    subtitle: 'You don\'t need a massive production house to make great content.',
    paragraphs: [
      'By combining AI, editing, UGC, strategy and creative execution, I can keep the process lean and find smarter ways to bring ideas to life.',
    ],
    highlight: 'SMALLER PROCESS. BIGGER POSSIBILITIES.',
    icon: Zap,
    tags: ['AI', 'UGC', 'EDITING', 'STRATEGY', 'CREATIVE'],
    badge: 'BIGGER POSSIBILITIES ✦',
  },
  {
    number: '05',
    title: "I'M HERE FOR THE LONG GAME.",
    subtitle: "I'm not interested in making one reel and disappearing.",
    paragraphs: [
      "I'll learn your brand. I'll understand your audience. I'll learn what works. I'll learn what doesn't. And we'll keep getting better.",
    ],
    highlight: "GOOD CONTENT ISN'T BUILT IN ONE POST.",
    icon: TrendingUp,
    tags: ['START', 'LEARN', 'CREATE', 'IMPROVE', 'GROW'],
    badge: 'BETTER TOGETHER ✦',
  },
];

export const PartnershipSection: React.FC = () => {
  const lineVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-24 px-4 overflow-hidden z-20 bg-[#100719] text-[#FFF7FF] flex flex-col items-center justify-center select-none">
      
      {/* 1. ATMOSPHERIC SOFT PURPLE SILK RADIAL GLOW */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[800px] opacity-25 blur-[160px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9BD2 0%, #C084FC 45%, #100719 80%, transparent 100%)',
        }}
      />

      {/* MAIN CONTAINER CAPPED TO MAX WIDTH 760PX */}
      <div className="w-full max-w-[760px] mx-auto flex flex-col items-center text-center space-y-16 relative z-20">

        {/* 2. SECTION OPENING HIERARCHY */}
        <div className="w-full flex flex-col items-center space-y-6">
          
          {/* EYEBROW BADGE: NEXT CHAPTER ✦ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
              bg-white/[0.06] border border-white/[0.12] backdrop-blur-[16px]
              text-[11px] font-bold tracking-[0.18em] uppercase text-[#FFE6FA]
              shadow-[0_0_15px_rgba(255,155,210,0.3)]
            "
          >
            <span>NEXT CHAPTER</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
          </motion.div>

          {/* PRIMARY DOMINANT HEADING: WHY WORK WITH ME? */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full"
          >
            <h2 className="font-display font-black text-center flex flex-col items-center justify-center">
              <div className="overflow-hidden py-1">
                <motion.span
                  variants={lineVariants}
                  className="
                    block uppercase
                    text-[clamp(42px,10vw,52px)] md:text-[clamp(72px,7vw,90px)]
                    leading-[0.92] tracking-[-0.03em] font-black text-center
                    bg-gradient-to-r from-[#FFF7FF] via-[#FFB6E6] to-[#B388FF] bg-clip-text text-transparent
                    drop-shadow-[0_0_35px_rgba(255,155,210,0.5)]
                  "
                >
                  WHY WORK WITH ME?
                </motion.span>
              </div>
            </h2>
          </motion.div>

          {/* VISUAL PAUSE (40px-60px mobile / 60px-100px desktop) */}

          {/* SECONDARY EMOTIONAL INTRODUCTION: BEYOND THE CONTENT, HERE'S WHAT YOU GET. */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full pt-4 space-y-2"
          >
            <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-[#FFF7FF]/90 uppercase tracking-tight">
              BEYOND THE CONTENT, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9BD2] to-[#FFB6E6]">
                HERE'S WHAT YOU GET.
              </span>
            </h3>

            {/* OPTIONAL SMALL SUPPORTING LINE */}
            <p className="font-serif italic text-lg sm:text-xl text-[#FF9BD2] pt-1">
              "Because great content is only part of the relationship."
            </p>
          </motion.div>

        </div>

        {/* 3. THE FIVE CREATIVE PARTNERSHIP MOMENTS (CHAPTERS) */}
        <div className="w-full flex flex-col items-center space-y-16 sm:space-y-24">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="
                  w-full p-6 sm:p-10 rounded-[32px]
                  bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(179,136,255,0.14)]
                  flex flex-col text-left space-y-6 relative overflow-hidden gpu-layer
                "
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#FF9BD2]/10 via-transparent to-transparent pointer-events-none" />

                {/* Top Row: Large Chapter Number & Icon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#FF9BD2] tracking-tight">
                    {principle.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FF9BD2]/20 border border-[#FF9BD2]/40 flex items-center justify-center text-[#FF9BD2]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Heading & Subtitle */}
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FFF7FF] tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[#FFB6E6]">
                    {principle.subtitle}
                  </p>
                </div>

                {/* Paragraphs with Editorial Typography Hierarchy */}
                <div className="space-y-4 text-[18px] sm:text-[20px] md:text-[21px] text-[#FFF7FF]/85 leading-[1.7] max-w-[620px]">
                  {principle.paragraphs.map((p, pIdx) => (
                    <motion.p
                      key={pIdx}
                      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: pIdx * 0.15 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>

                {/* Highlight callout if present */}
                {principle.highlight && (
                  <div className="p-3.5 rounded-2xl bg-[#FF9BD2]/15 border border-[#FF9BD2]/30 text-xs sm:text-sm font-mono font-bold tracking-wider text-[#FF9BD2] uppercase">
                    ✦ {principle.highlight}
                  </div>
                )}

                {/* Visual Metaphor Tags */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {principle.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-[11px] font-mono text-[#FFE6FA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Badge Bottom Left */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#FF9BD2] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2] animate-pulse" />
                  <span>{principle.badge}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. FINAL CLOSING STATEMENT BEFORE SECTION 8 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="w-full space-y-4 pt-8 border-t border-white/10"
        >
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFF7FF] tracking-tight">
            GOOD CONTENT ISN'T BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9BD2] via-[#FFB6E6] to-[#B388FF]">
              IN ONE POST.
            </span>
          </h3>

          <p className="text-sm sm:text-base font-normal text-[#FFF7FF]/76 max-w-[34ch] mx-auto leading-relaxed">
            It's built through understanding, experimentation, and getting better together.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
