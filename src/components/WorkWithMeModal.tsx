import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Crown, CheckCircle2 } from 'lucide-react';

interface WorkWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkWithMeModal: React.FC<WorkWithMeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI VIDEO', 'STRATEGY']);
  const [ideaText, setIdeaText] = useState('');

  const services = ['AI VIDEO', 'STRATEGY', 'VIDEO EDITING', 'UGC CONTENT', 'STORYTELLING'];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F0817]/90 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="
              relative w-full max-w-lg bg-[#1C102B] border border-[#F472B6]/40
              rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(236,72,153,0.3)] z-10
              max-h-[90vh] overflow-y-auto no-scrollbar royal-rim-light text-left
            "
          >
            {/* Close Button (Touch target >= 44px) */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 min-w-[44px] min-h-[44px] w-[44px] h-[44px] rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EC4899]/20 text-[#F472B6] flex items-center justify-center mx-auto border border-[#F472B6]">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#FDF4F8]">INQUIRY RECEIVED</h3>
                <p className="text-sm text-[#FDF4F8]/70 max-w-xs mx-auto">
                  Ari will review your concept and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div className="pr-10">
                  <span className="text-[11px] font-mono text-[#F472B6] tracking-widest uppercase flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-[#F472B6]" /> ROYAL CREATOR INQUIRY
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FDF4F8] mt-1">
                    WORK WITH ARI
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FDF4F8]/60 mt-1">
                    Select what you need help bringing to life.
                  </p>
                </div>

                {/* Service Selection (Tap targets >= 44px) */}
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-2">SERVICES NEEDED</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`
                            min-h-[44px] px-4 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer flex items-center justify-center
                            ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-[#13091F] border-[#F472B6] font-bold shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'
                            }
                          `}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Idea Input */}
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">YOUR IDEA / CONCEPT</label>
                  <textarea
                    rows={3}
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="Describe what's in your head, brand goal, or vision..."
                    className="w-full bg-[#0F0817] border border-[#F472B6]/20 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-[#F472B6] transition-colors resize-none placeholder:text-white/30"
                    required
                  />
                </div>

                {/* Submit Button (Touch target >= 48px) */}
                <button
                  type="submit"
                  className="w-full min-h-[48px] h-12 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#A855F7] text-[#13091F] font-bold text-sm flex items-center justify-center gap-2 transition-colors pink-glow-primary uppercase tracking-wider cursor-pointer"
                >
                  <span>SEND DIRECT INQUIRY</span>
                  <Send className="w-4 h-4 text-[#13091F]" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
