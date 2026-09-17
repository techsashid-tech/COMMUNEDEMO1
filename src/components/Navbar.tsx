import React, { useState, useEffect } from 'react';
import { Phone, Moon, Sun, RotateCcw, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onReplayLoader: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onReplayLoader
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#features' },
    { label: 'EXPLORE', href: '#pricing' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'LOCATION', href: '#contact' },
    { label: 'CONTACT', href: '#contact-inquiry' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Real-time Scroll Progress Bar */}
      <div className="w-full h-1 bg-black/20">
        <div
          className="h-full gold-bg transition-all duration-75 shadow-[0_0_10px_#f59e0b]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'card-glass py-3 shadow-xl border-b border-amber-500/30'
            : 'bg-transparent py-4 border-b border-amber-500/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Silver Sweep */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="silver-sweep-container relative rounded-xl overflow-hidden shadow-lg p-2 bg-white/95 dark:bg-black/80 border border-amber-500/40 group-hover:scale-105 transition-all duration-300">
              <img
                src="1.png"
                alt="Commune Fitness Logo"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 40'><text x='10' y='28' fill='%23f59e0b' font-family='sans-serif' font-weight='bold' font-size='20'>COMMUNE</text></svg>";
                }}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs sm:text-sm font-bold tracking-wider">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1.5 transition-colors uppercase hover:text-amber-500 ${
                  idx === 0
                    ? 'text-amber-500 dark:text-amber-400 font-black'
                    : 'text-slate-800 dark:text-gray-200'
                }`}
              >
                {link.label}
                {idx === 0 && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                )}
              </a>
            ))}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Replay Cinematic Intro Button */}
            <button
              onClick={onReplayLoader}
              title="Replay 3D Intro Loader"
              className="p-2 sm:p-2.5 rounded-xl card-glass border border-amber-500/30 text-amber-700 dark:text-amber-400 hover:scale-105 transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden md:inline text-[11px]">Intro</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 sm:p-2.5 rounded-xl card-glass border border-amber-500/30 text-amber-700 dark:text-amber-400 hover:scale-105 transition-all"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Call Direct Action */}
            <a
              href="tel:09938581222"
              className="gold-bg text-black font-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:scale-105 transition-all flex items-center gap-2 shadow-lg gold-glow text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl card-glass border border-amber-500/30 text-slate-800 dark:text-gray-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden card-glass border-t border-amber-500/20 px-6 py-5 mt-2 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-bold tracking-wider uppercase text-slate-800 dark:text-gray-200 hover:text-amber-500 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
