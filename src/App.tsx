import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { ThreeHeroCanvas } from './components/ThreeHeroCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialAndActions } from './components/SocialAndActions';
import { Facilities } from './components/Facilities';
import { FlipbookRates } from './components/FlipbookRates';
import { ExperienceAndProducts } from './components/ExperienceAndProducts';
import { BmiCalculator } from './components/BmiCalculator';
import { RotatingGallery3D } from './components/RotatingGallery3D';
import { ApertureLeadership } from './components/ApertureLeadership';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { LocationAndContact } from './components/LocationAndContact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  // Default to showing website immediately so preview is always instant and accessible
  const [showPreloader, setShowPreloader] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  // Initialize theme with safe fallback for sandboxed iframes
  useEffect(() => {
    try {
      const savedTheme = window.localStorage?.getItem('commune-theme');
      if (savedTheme === 'light') {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        return;
      }
    } catch {
      // Storage access may be restricted in third-party iframes
    }
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add('dark');
        try { window.localStorage?.setItem('commune-theme', 'dark'); } catch {}
      } else {
        document.documentElement.classList.remove('dark');
        try { window.localStorage?.setItem('commune-theme', 'light'); } catch {}
      }
      return nextMode;
    });
  };

  return (
    <div className={`min-h-screen relative selection:bg-amber-400 selection:text-black ${isDarkMode ? 'dark bg-[#08080a] text-[#f3f4f6]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      
      {/* 1. SLOW FLOATING LOGO PRELOADER */}
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* 2. THREE.JS 3D BACKGROUND PARTICLES & KINETIC RINGS */}
      <ThreeHeroCanvas isDarkMode={isDarkMode} />

      {/* 3. STICKY NAVBAR */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onReplayLoader={() => setShowPreloader(true)}
      />

      {/* 4. MAIN PAGE SECTIONS */}
      <main className="relative z-10">
        {/* Hero with 3D Card Tilt & Multiple Animated Taglines */}
        <Hero />

        {/* Social Community & Instant Client Support Cards */}
        <SocialAndActions />

        {/* World Class Facilities & Architecture Spotlight */}
        <Facilities />

        {/* 3D Flip Menu Rates Booklet with Realistic Page Turn Audio */}
        <FlipbookRates />

        {/* Official Merchandise & Sensory Experience Showcase */}
        <ExperienceAndProducts />

        {/* Interactive BMI Calculator */}
        <BmiCalculator />

        {/* 3D Circular Rotating Gallery with Lightbox */}
        <RotatingGallery3D />

        {/* Leadership Profile: Sanjit Kumar Sahoo with Scroll Aperture Mask */}
        <ApertureLeadership />

        {/* Google Maps 5.0 Reviews Marquee & FAQ Accordion */}
        <ReviewsAndFaq />

        {/* Center Location, Interactive Zoom Map & Contact Inquiry */}
        <LocationAndContact />
      </main>

      {/* 5. FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

      {/* 6. FOOTER WITH SK DAS DEVELOPER BADGE */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Global Privacy Modal if triggered from footer */}
      {privacyModalOpen && (
        <div
          onClick={() => setPrivacyModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card-glass max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-amber-500/40 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
              Commune Fitness • Privacy Policy
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium leading-relaxed">
              <p>
                Commune Fitness Center values the privacy of every member and visitor. Personal information submitted through our site is solely utilized for gym membership scheduling, fitness assessments, and inquiries.
              </p>
              <p>
                We do not sell, rent, or lease contact records. For any data protection inquiries, contact us at College Square, 4th Floor, Rex Plaza, Kataka, Odisha 753003.
              </p>
            </div>
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="mt-6 w-full gold-bg text-black font-black py-3 rounded-xl uppercase text-xs tracking-wider"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
