import React from 'react';
import { MagneticButton } from './MagneticButton';
import { Play, Sparkles } from 'lucide-react';

interface CtaButtonsProps {
  onSeeMyWorkClick?: () => void;
  onWorkWithMeClick?: () => void;
}

export const CtaButtons: React.FC<CtaButtonsProps> = ({
  onSeeMyWorkClick,
  onWorkWithMeClick,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-6 my-2 sm:my-4 shrink-0 z-20">
      {/* 1. SEE MY WORK */}
      <MagneticButton
        onClick={onSeeMyWorkClick}
        ariaLabel="See Ari's Work"
        className="w-full sm:w-auto min-w-[200px] max-w-[280px]"
      >
        <Play className="w-4 h-4 fill-current text-[#1A1026] transition-transform duration-300 group-hover:scale-110" />
        <span>SEE MY WORK</span>
      </MagneticButton>

      {/* 2. LET'S MAKE SOMETHING (Contact Modal Trigger) */}
      {onWorkWithMeClick && (
        <MagneticButton
          onClick={onWorkWithMeClick}
          ariaLabel="Let's Make Something - Contact Ari"
          className="
            w-full sm:w-auto min-w-[220px] max-w-[280px]
            bg-[#241038]/80 text-[#FFF7FF] border border-[#FF9BD2]/50
            hover:border-[#FF9BD2] hover:bg-[#381654]/90
            hover:shadow-[0_0_30px_rgba(255,155,210,0.5)]
          "
        >
          <Sparkles className="w-4 h-4 text-[#FF9BD2] animate-pulse" />
          <span>LET'S MAKE SOMETHING</span>
        </MagneticButton>
      )}
    </div>
  );
};
