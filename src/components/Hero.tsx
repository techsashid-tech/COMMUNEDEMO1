import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Zap, MapPin, Award, ChevronRight } from 'lucide-react';
import { MOTIVATION_TAGLINES } from '../data/gymData';

export const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  // 3D Card Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % MOTIVATION_TAGLINES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlintPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      {/* Cinematic Horizontal Light Streaks */}
      <div className="absolute top-1/4 left-0 w-72 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b] animate-[marquee_12s_linear_infinite] opacity-60 pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-96 h-[1px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_12px_#fbbf24] animate-[marquee_16s_linear_infinite_reverse] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings, Taglines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-20">
            
            {/* 5.0 Rating Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-bold shadow-md">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span>5.0 Rated Luxury Gym Kataka • Rex Plaza 4th Floor</span>
            </div>

            {/* Logo Emblem floating card */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 gold-bg rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700"></div>
                <div className="relative card-glass p-3.5 rounded-2xl border border-amber-500/40 flex items-center gap-4 shadow-xl">
                  <div className="w-14 h-14 rounded-xl gold-bg flex items-center justify-center text-black p-2 shadow-xl gold-glow flex-shrink-0">
                    <img
                      src="1.png"
                      alt="Commune Fitness Logo"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23000'/></svg>";
                      }}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-slate-900 dark:text-amber-400">
                      Commune Fitness
                    </h2>
                    <p className="text-xs font-bold tracking-widest text-amber-600 dark:text-amber-300 uppercase">
                      Rex Plaza, 4th Floor, Kataka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              FORGE YOUR <br />
              <span className="gold-gradient-text uppercase">ULTIMATE SELF</span>
            </h1>

            {/* Multiple Dynamic Animated Tagline Effects */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 15, rotateX: 30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -15, rotateX: -30 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="px-4 py-2 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2 shadow-sm"
                >
                  <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>{MOTIVATION_TAGLINES[taglineIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Step into Kataka's most elite fitness destination. Featuring heavy-duty Life Fitness equipment, personal coaching, dedicated steam/sauna recovery, and an unmatchable workout atmosphere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/919938581222?text=Hi%20Commune%20Fitness,%20I%20want%20to%20join%20the%20gym!"
                target="_blank"
                rel="noreferrer"
                className="gold-bg text-black font-extrabold px-8 py-4 rounded-xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2 shadow-lg gold-glow text-base group"
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join Gym Today</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://maps.google.com/?q=Commune+Fitness+Rex+Plaza+Kataka"
                target="_blank"
                rel="noreferrer"
                className="card-glass text-slate-900 dark:text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-500/10 transition-all text-center flex items-center justify-center gap-2 border border-amber-500/40 text-base"
              >
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Location & Route</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilt Card with 2.png Signage */}
          <div className="lg:col-span-5 flex justify-center z-20">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
              className="relative w-full max-w-md group cursor-pointer"
            >
              {/* Gold Ambient Backglow */}
              <div className="absolute -inset-2 gold-bg rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* 3D Glass Container */}
              <div className="relative rounded-3xl overflow-hidden card-glass border-2 border-amber-500/40 p-2.5 shadow-2xl silver-sweep-container">
                
                {/* Dynamic Specular Light Glint */}
                <div
                  className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255,255,255,0.7) 0%, transparent 60%)`,
                  }}
                />

                <div className="relative rounded-2xl overflow-hidden h-[390px] sm:h-[480px]">
                  <img
                    src="2.png"
                    alt="Commune Fitness 3D Wooden Wall Signage"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%2312131a'><rect width='400' height='500'/><text x='50%' y='50%' fill='%23f59e0b' font-size='24' font-weight='bold' text-anchor='middle'>COMMUNE FITNESS</text></svg>";
                    }}
                    className="w-full h-full object-cover rounded-2xl filter brightness-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay & Branding Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold w-max mb-2 backdrop-blur-md">
                      <span>ODIA & ENGLISH SIGNAGE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(245,158,11,0.7)]">
                      COMMUNE FITNESS
                    </h3>
                    <p className="text-amber-300/90 text-xs font-bold uppercase tracking-widest mt-1">
                      Premier Gym Kataka • Rex Plaza 4th Floor
                    </p>
                  </div>

                  {/* Live Status Badge */}
                  <div className="absolute top-5 right-5 card-glass px-3.5 py-1.5 rounded-xl border border-amber-500/50 flex items-center gap-2 shadow-xl z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-black text-amber-500 dark:text-amber-300 uppercase tracking-wider">
                      Rex Plaza 4F
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
