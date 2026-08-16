import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface WorkWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkWithMeModal: React.FC<WorkWithMeModalProps> = ({ isOpen, onClose }) => {
  const instagramUrl = 'https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr';
  const whatsappUrl = 'https://wa.me/917666837735?text=Hi%20Arnav!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-0 cursor-pointer"
          />

          {/* Dialogue Box (Centered directly in current screen viewport) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="
              relative z-10 w-full max-w-lg rounded-3xl
              border border-white/15 bg-[#12071B] p-6 sm:p-8
              shadow-[0_25px_80px_rgba(255,155,210,0.4)] overflow-hidden text-left
            "
          >
            {/* Ambient Halo Glows */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#FF9BD2]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-[#25D366]/20 blur-3xl" />

            {/* Header Bar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9BD2]">
                  LET'S TALK
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-0.5">
                  CHOOSE HOW TO CONNECT
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 2 Contact Cards: Instagram DM & Direct WhatsApp */}
            <div className="flex flex-col gap-4">
              
              {/* Option 1: Instagram DM */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  group relative flex items-center gap-4 rounded-2xl
                  border border-white/15 bg-[#1A0B26] p-4 sm:p-5
                  transition-all duration-300 hover:scale-[1.02]
                  hover:border-[#FF9BD2]/60 hover:bg-[#250E36]
                  hover:shadow-[0_10px_30px_rgba(255,155,210,0.3)]
                  cursor-pointer overflow-hidden
                "
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FFB6E6] to-[#FF9BD2] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#FFB6E6] transition-colors">
                      Instagram DM
                    </h4>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#FF9BD2] transition-colors" />
                  </div>
                  <p className="text-xs text-white/60 truncate mt-0.5">
                    @ariimakesfilms · Brand & Collab Inquiries
                  </p>
                </div>
              </a>

              {/* Option 2: Direct WhatsApp Chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  group relative flex items-center gap-4 rounded-2xl
                  border border-white/15 bg-[#1A0B26] p-4 sm:p-5
                  transition-all duration-300 hover:scale-[1.02]
                  hover:border-[#25D366]/60 hover:bg-[#0E261A]
                  hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)]
                  cursor-pointer overflow-hidden
                "
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Direct
                    </h4>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-white/60 truncate mt-0.5">
                    +91 76668 37735 · Direct Collaborations
                  </p>
                </div>
              </a>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
