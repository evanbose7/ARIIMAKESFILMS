import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

import { BackgroundAmbient } from './components/BackgroundAmbient';
import { Navbar } from './components/Navbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HeroSection } from './components/HeroSection';
import { EmotionalGapSection } from './components/EmotionalGapSection';
import { PartnershipSection } from './components/PartnershipSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { FinalManifestoSection } from './components/SignaturePhilosophySection';
import { WorkWithMeModal } from './components/WorkWithMeModal';
export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll();

  // Initialize Lenis 60 FPS Momentum Inertia Smooth Scroll (Desktop & Mobile Phone)
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.4 : 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.6,
      lerp: isMobile ? 0.09 : 0.06,
    });
    (window as any).lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  const scrollToTarget = (targetId: string) => {
    const targetEl = document.getElementById(targetId) || document.getElementById('portfolio');
    if (!targetEl) return;

    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(targetEl, { offset: -70 });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    scrollToTarget('portfolio');
  };

  const handleSelectPortfolioLink = (type: 'YOUTUBE' | 'REELS' | 'BRAND WORKS') => {
    setIsDrawerOpen(false);

    setTimeout(() => {
      if (type === 'YOUTUBE') {
        scrollToTarget('portfolio-youtube');
      } else if (type === 'REELS') {
        scrollToTarget('portfolio-reels');
      } else if (type === 'BRAND WORKS') {
        scrollToTarget('portfolio');
      }
    }, 150);
  };

  return (
    <div className="relative min-h-screen bg-[#0F0718] text-[#FFF7FF] overflow-x-hidden selection:bg-[#FF9BD2] selection:text-[#1A1026]">
      
      {/* Layered Royal Background */}
      <BackgroundAmbient scrollYProgress={scrollYProgress} />

      {/* Top Left ARI Logo & Top Right Circular Glass Menu Trigger */}
      <Navbar
        onOpenMenuDrawer={() => setIsDrawerOpen(true)}
        onWorkWithMeClick={() => setIsWorkModalOpen(true)}
      />

      {/* Luxury Right-Side Floating Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectPortfolioLink={handleSelectPortfolioLink}
        onWorkWithMeClick={() => setIsWorkModalOpen(true)}
      />

      {/* Main Content: Hero, Emotional Gap (Think About It), Portfolio, Difference, Constellation, etc. */}
      <main className="relative w-full z-10">
        <HeroSection
          scrollYProgress={scrollYProgress}
          onSeeMyWorkClick={handleScrollToPortfolio}
          onWorkWithMeClick={() => setIsWorkModalOpen(true)}
        />

        <EmotionalGapSection
          scrollYProgress={scrollYProgress}
        />

        <PortfolioSection
          onOpenWorkModal={() => setIsWorkModalOpen(true)}
        />

        <PartnershipSection />

        <AboutSection
          onWorkWithMeClick={() => setIsWorkModalOpen(true)}
        />

        <FinalManifestoSection
          onWorkWithMeClick={() => setIsWorkModalOpen(true)}
        />
      </main>

      {/* Interactive Contact Options Dialogue Box */}
      <WorkWithMeModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
      />
    </div>
  );
}

export default App;
