import React from 'react';
import { Dumbbell, Activity, Flame, Shield, Sparkles, Trophy } from 'lucide-react';

export const Facilities: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
            Why Choose Commune Fitness
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            WORLD CLASS <span className="gold-gradient-text">FACILITIES</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-3 font-medium">
            Meticulously curated biomechanics, luxury architectural interior detailing, and recovery suites designed for the modern fitness enthusiast.
          </p>
        </div>

        {/* Feature Hero Banner: 3.png (Main Floor & Architectural Excellence) */}
        <div className="mb-16 relative group rounded-3xl overflow-hidden card-glass border-2 border-amber-500/30 p-2 sm:p-3 shadow-2xl silver-sweep-container">
          <div className="absolute -inset-1 gold-bg rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[480px]">
            <img
              src="3.png"
              alt="Commune Fitness Main Training Floor & Equipment"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' fill='%231a1b24'><rect width='800' height='450'/><text x='50%' y='50%' fill='%23f59e0b' font-size='28' font-weight='bold' text-anchor='middle'>MAIN TRAINING ARENA</text></svg>";
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="text-xs gold-bg text-black font-black px-3.5 py-1 rounded-full uppercase tracking-widest w-max mb-3 shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Architectural Excellence
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                State-of-the-Art Luxury Training Arena
              </h3>
              <p className="text-amber-100/90 text-xs sm:text-base mt-2 max-w-2xl font-medium leading-relaxed">
                Engineered with natural fluted wood acoustics, suspended circular halo lighting, Life Fitness biomechanical resistance gear, and an indoor turf running lane.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Interactive Highlight Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-glass p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="w-14 h-14 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 gold-glow group-hover:scale-110 transition-transform">
              <Dumbbell className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>Modern Heavy Strength Zone</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
              Fully stacked with urethane dumbbells, Olympic barbells, calibrated power racks, and multi-angle cable crossover stations with mirror-lined fluted pillars.
            </p>
            <div className="mt-5 pt-4 border-t border-amber-500/20 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Olympic Lifting Approved</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-glass p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="w-14 h-14 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 gold-glow group-hover:scale-110 transition-transform">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>High-Tech Cardio Deck</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
              Life Fitness smart interactive treadmills, spin bikes, and ellipticals featuring real-time calorie telemetry, heart-rate zones, and tranquil zen Buddha art arches.
            </p>
            <div className="mt-5 pt-4 border-t border-amber-500/20 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Real-Time Biometrics</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-glass p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="w-14 h-14 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 gold-glow group-hover:scale-110 transition-transform">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>Sauna & Steam Recovery</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
              Promote rapid muscle rebuilding, cellular detoxification, and joint relief in our temperature-controlled steam bath and dry sauna retreat suites.
            </p>
            <div className="mt-5 pt-4 border-t border-amber-500/20 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Full Post-Workout Rejuvenation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
