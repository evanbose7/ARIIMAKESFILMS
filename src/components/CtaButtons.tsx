import React from 'react';
import { MagneticButton } from './MagneticButton';
import { Play } from 'lucide-react';

interface CtaButtonsProps {
  onSeeMyWorkClick?: () => void;
}

export const CtaButtons: React.FC<CtaButtonsProps> = ({
  onSeeMyWorkClick,
}) => {
  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-6 my-2 sm:my-4 shrink-0 z-20">
      <MagneticButton
        onClick={onSeeMyWorkClick}
        ariaLabel="See Ari's Work"
        className="w-full max-w-[280px] sm:max-w-[320px]"
      >
        <Play className="w-4 h-4 fill-current text-[#1A1026] transition-transform duration-300 group-hover:scale-110" />
        <span>SEE MY WORK</span>
      </MagneticButton>
    </div>
  );
};
