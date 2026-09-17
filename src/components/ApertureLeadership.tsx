import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, CheckCircle, Award, Sparkles, Building2, Utensils, HeartPulse } from 'lucide-react';

export const ApertureLeadership: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskRadius, setMaskRadius] = useState<number>(100); // percentage

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When container enters viewport until it leaves
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalDistance = windowHeight + rect.height;
        const currentProgress = (windowHeight - rect.top) / totalDistance;
        // Smooth aperture radius: expands smoothly from 40% to 140%
        const radius = Math.min(140, Math.max(35, 35 + currentProgress * 105));
        setMaskRadius(radius);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="profile"
      ref={containerRef}
      className="relative w-full py-24 overflow-hidden bg-[#07080c] text-white transition-all duration-100"
      style={{
        clipPath: `circle(${maskRadius}% at 50% 50%)`,
        WebkitClipPath: `circle(${maskRadius}% at 50% 50%)`,
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_#f59e0b] animate-pulse z-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="relative rounded-3xl card-glass border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden silver-sweep-container bg-black/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-1.5 bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.45)]">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  <img
                    src="12.png"
                    alt="Sanjit Kumar Sahoo - Co-Founder & MD"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "11.png";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Verified Leadership Badge */}
                <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-2.5 rounded-2xl shadow-xl border-2 border-slate-900 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Ventures Pill Bar */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-black uppercase flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-amber-400" /> Blast Cafe
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-black uppercase flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-amber-400" /> Barbeque Nation
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-black uppercase flex items-center gap-1.5">
                  <HeartPulse className="w-3 h-3 text-amber-400" /> Healthcare
                </span>
              </div>
            </div>

            {/* Right Column: Bio & Credentials */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> 22+ Years Global Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Sanjit Kumar Sahoo
                </h2>
                <p className="text-amber-400 font-extrabold text-base sm:text-lg mt-1">
                  Co-Founder & Managing Director
                </p>
              </div>

              <div className="space-y-3.5 text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  Sanjit brings more than <strong className="text-amber-300 font-bold">22 years of global leadership experience</strong> in enterprise architecture and strategic scaling. A visionary leader driving health, wellness, and community transformation, he has established a trusted regional ecosystem bridging fitness, hospitality, and service excellence across Kataka & Bhubaneswar.
                </p>
                <p>
                  A serial entrepreneur, Sanjit leads Commune Fitness Center with a mission to empower healthier lifestyles with luxury standards. His diverse venture footprint includes prominent brands such as <strong className="text-amber-300 font-bold">Blast Cafe, Barbeque Nation, and hospital healthcare logistics</strong>.
                </p>
                <p>
                  At Commune Fitness, he champions the fusion of biomechanically superior Life Fitness machines, luxury acoustics, and community wellness programs for members of all generations.
                </p>
              </div>

              {/* Quote & WhatsApp CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs italic text-amber-200/90 font-medium max-w-sm">
                  “Translating ambitious business visions into scalable, impactful community ecosystems.”
                </p>

                <a
                  href="https://wa.me/918277754614?text=Hi%20Sanjit%20Kumar%20Sahoo,%20I%20am%20reaching%20out%20via%20Commune%20Fitness%20website"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all text-xs sm:text-sm flex-shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect: +91 8277754614</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
