import React from 'react';
import { MotionValue } from 'framer-motion';
import { Portrait } from './Portrait';
import { Headline } from './Headline';
import { SupportingParagraph } from './SupportingParagraph';
import { CtaButtons } from './CtaButtons';
import { BottomLine } from './BottomLine';

interface HeroSectionProps {
  scrollYProgress?: MotionValue<number>;
  onWorkWithMeClick?: () => void;
  onSeeMyWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollYProgress,
  onWorkWithMeClick,
  onSeeMyWorkClick,
}) => {
  return (
    <section 
      style={{ paddingTop: 'max(24px, env(safe-area-inset-top))' }}
      className="relative w-full min-h-[100svh] flex flex-col justify-between pb-3 px-3 sm:px-4 overflow-hidden z-10 selection:bg-[#FF9BD2] selection:text-[#1A1026]"
    >
      {/* Hero Core Content Stack - Fits perfectly in 100svh without clipping on 390px mobile */}
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-between z-20 py-2 sm:py-4">
        
        {/* 1. Portrait with Halo & 5 Floating Role Glass Tags */}
        <Portrait
          onImageClick={onSeeMyWorkClick}
          scrollYProgress={scrollYProgress}
        />

        {/* 2. Headline with Gradient Fill & Soft Pink Outer Glow */}
        <Headline scrollYProgress={scrollYProgress} />

        {/* 3. Supporting Paragraph */}
        <SupportingParagraph />

        {/* 4. Primary CTA Buttons: SEE MY WORK & LET'S MAKE SOMETHING */}
        <CtaButtons
          onSeeMyWorkClick={onSeeMyWorkClick}
          onWorkWithMeClick={onWorkWithMeClick}
        />

      </div>

      {/* 5. Bottom Philosophical Line (Fades out smoothly on scroll) */}
      <BottomLine scrollYProgress={scrollYProgress} />
    </section>
  );
};
