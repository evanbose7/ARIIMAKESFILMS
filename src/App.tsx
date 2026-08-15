import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

import { BackgroundAmbient } from './components/BackgroundAmbient';
import { Navbar } from './components/Navbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HeroSection } from './components/HeroSection';
import { EmotionalGapSection } from './components/EmotionalGapSection';
import { ConstellationSection } from './components/ConstellationSection';
import { ResultsSection } from './components/ResultsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { SignaturePhilosophySection } from './components/SignaturePhilosophySection';
import { PartnershipSection } from './components/PartnershipSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { WorkWithMeModal } from './components/WorkWithMeModal';
import { ShowreelModal } from './components/ShowreelModal';

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isShowreelModalOpen, setIsShowreelModalOpen] = useState(false);
  const [activeReelTitle, setActiveReelTitle] = useState('ARI CINEMATIC REEL 2026');

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll();

  // Initialize Lenis 60 FPS Momentum Inertia Smooth Scroll for both Mobile & Desktop
  useEffect(() => {
    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobileDevice ? 1.2 : 2.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.65,
      touchMultiplier: 1.6,
      lerp: isMobileDevice ? 0.1 : 0.05,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenShowreel = (title: string) => {
    setActiveReelTitle(title);
    setIsShowreelModalOpen(true);
  };

  const handleSelectPortfolioLink = (type: 'YOUTUBE' | 'REELS' | 'BRAND WORKS') => {
    if (type === 'YOUTUBE') {
      handleOpenShowreel('ARI YOUTUBE CINEMATIC CHANNEL');
    } else if (type === 'REELS') {
      handleOpenShowreel('ARI SHORT-FORM VIRAL REELS');
    } else if (type === 'BRAND WORKS') {
      handleOpenShowreel('ARI BRAND CAMPAIGNS & UGC');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0F0718] text-[#FFF7FF] overflow-x-hidden selection:bg-[#FF9BD2] selection:text-[#1A1026]">
      
      {/* Layered Royal Background */}
      <BackgroundAmbient scrollYProgress={scrollYProgress} />

      {/* Top Left ARI Logo & Top Right Circular Glass Menu Trigger */}
      <Navbar
        onOpenMenuDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Luxury Right-Side Floating Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectPortfolioLink={handleSelectPortfolioLink}
      />

      {/* Main Content: Hero, Emotional Gap, Constellation, Results, Toolkit, Philosophy, Partnership & Portfolio */}
      <main className="relative w-full z-10">
        <HeroSection
          scrollYProgress={scrollYProgress}
          onSeeMyWorkClick={() => handleOpenShowreel('ARI CINEMATIC REEL 2026')}
        />

        <EmotionalGapSection
          scrollYProgress={scrollYProgress}
          onSeeMyWorkClick={() => handleOpenShowreel('ARI CINEMATIC REEL 2026')}
        />

        <ConstellationSection />

        <ResultsSection />

        <ToolkitSection />

        <PartnershipSection />

        <PortfolioSection
          onOpenWorkModal={() => setIsWorkModalOpen(true)}
        />

        <AboutSection
          onWorkWithMeClick={() => setIsWorkModalOpen(true)}
        />

        <SignaturePhilosophySection
          onWorkWithMeClick={() => setIsWorkModalOpen(true)}
        />
      </main>

      {/* Interactive Work Inquiry Modal */}
      <WorkWithMeModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
      />

      {/* Interactive Portfolio Showcase Modal */}
      <ShowreelModal
        isOpen={isShowreelModalOpen}
        onClose={() => setIsShowreelModalOpen(false)}
        activeTitle={activeReelTitle}
      />
    </div>
  );
}

export default App;
