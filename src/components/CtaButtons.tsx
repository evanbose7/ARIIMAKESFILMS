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
        <button
          type="button"
          onClick={onWorkWithMeClick}
          aria-label="Let's Make Something - Contact Ari"
          className="
            relative inline-flex items-center justify-center gap-2
            min-h-[48px] sm:min-h-[56px] h-[56px] w-full sm:w-auto min-w-[220px] max-w-[280px] rounded-full
            bg-[#241038]/85 text-[#FFF7FF] font-bold text-sm tracking-wider uppercase
            border border-[#FF9BD2]/60 shadow-[0_0_25px_rgba(255,155,210,0.4)]
            hover:shadow-[0_0_40px_rgba(255,155,210,0.65)] hover:border-[#FF9BD2] hover:bg-[#381654]/95
            hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none gpu-layer
          "
        >
          <Sparkles className="w-4 h-4 text-[#FF9BD2] animate-pulse" />
          <span>LET'S MAKE SOMETHING</span>
        </button>
      )}
    </div>
  );
};
