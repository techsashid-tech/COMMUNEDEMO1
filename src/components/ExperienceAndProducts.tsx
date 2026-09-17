import React from 'react';
import { Sparkles, Flame, HeartPulse, Trophy, ShoppingBag, ShieldCheck } from 'lucide-react';

export const ExperienceAndProducts: React.FC = () => {
  const products = [
    {
      id: 'prod-1',
      name: 'Commune Pure Whey Isolate',
      category: 'Sports Nutrition',
      serving: '27g Protein • 0g Sugar • 5.5g BCAA',
      price: '₹3,800',
      badge: 'TOP SELLER',
      tag: 'Imported Raw Whey',
    },
    {
      id: 'prod-2',
      name: 'Ignition Pro Pre-Workout',
      category: 'Energy & Focus',
      serving: '350mg Caffeine • 3.2g Beta-Alanine',
      price: '₹2,200',
      badge: 'EXPLOSIVE ENERGY',
      tag: 'Nitric Oxide Booster',
    },
    {
      id: 'prod-3',
      name: 'Heavy Duty 10mm Lever Belt',
      category: 'Powerlifting Gear',
      serving: 'Genuine Top-Grain Suede • Steel Clasp',
      price: '₹2,999',
      badge: 'IPF SPECS',
      tag: 'Spinal Stability',
    },
    {
      id: 'prod-4',
      name: 'Commune Heavyweight Oversized Tee',
      category: 'Apparel',
      serving: '240 GSM Bio-Washed Cotton • Breathable',
      price: '₹999',
      badge: 'EXCLUSIVE MERCH',
      tag: 'Aesthetic Drop Shoulder',
    },
  ];

  return (
    <>
      {/* PRODUCTS SECTION (#products) */}
      <section id="products" className="py-24 bg-amber-50/20 dark:bg-[#0c0d14] border-b border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
              Official Gear & Nutrition
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              COMMUNE <span className="gold-gradient-text">PRODUCTS & MERCH</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-2 font-medium">
              Lab-tested supplements and competition-grade gear available at our Rex Plaza front desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="card-glass p-6 rounded-3xl border border-amber-500/30 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full gold-bg text-black shadow-sm">
                      {prod.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {prod.category}
                    </span>
                  </div>

                  <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-2 font-medium">
                    {prod.serving}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                  <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                    {prod.price}
                  </span>
                  <a
                    href={`https://wa.me/919938581222?text=${encodeURIComponent(
                      `Hi Commune Fitness, I would like to inquire/buy ${prod.name}!`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl gold-bg text-black hover:scale-110 transition-transform shadow-md"
                    title="Order via WhatsApp"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION (#video-spotlight / #experience) */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
              Sensory Training Atmosphere
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              THE COMMUNE <span className="gold-gradient-text">EXPERIENCE</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-2 font-medium">
              A multisensory fitness ecosystem bringing technology, community, and recovery into harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Card 1: 7.png (Life Fitness Telemetry) */}
            <div className="card-glass rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group flex flex-col justify-between">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="7.png"
                  alt="Life Fitness Telemetry Screen"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' fill='%23050508'><text x='50%' y='50%' fill='%2338bdf8' font-size='20' text-anchor='middle'>950 CALORIES BURNED</text></svg>";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-amber-400 text-xs font-black border border-amber-500/30 backdrop-blur-md">
                  PHOTO #7
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-cyan-500 dark:text-cyan-400 uppercase tracking-wider">
                  <Flame className="w-4 h-4" /> 950+ Kcal Active Burn
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Real-Time Biometric Monitoring
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium leading-relaxed">
                  Every cardio console syncs your workout metrics: 10.66 KM distance, heart-rate zones at 165 BPM, and 494 cal/hour pacing to ensure scientific progression.
                </p>
              </div>
            </div>

            {/* Experience Card 2: 6.png (Hammered Gold Yoga Studio) */}
            <div className="card-glass rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group flex flex-col justify-between">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="6.png"
                  alt="Kids Yoga and Hammered Gold Ceiling Studio"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' fill='%231b1407'><text x='50%' y='50%' fill='%23f59e0b' font-size='20' text-anchor='middle'>YOGA & AEROBIC STUDIO</text></svg>";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-amber-400 text-xs font-black border border-amber-500/30 backdrop-blur-md">
                  PHOTO #6
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Gold Hammered Ceiling
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Zen Yoga, Kids Fitness & Aerobics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium leading-relaxed">
                  Designed with luxury reflective gold leaf ceiling architecture and natural wooden floors for mindfulness, tree pose balance, and children's holistic physical growth.
                </p>
              </div>
            </div>

            {/* Experience Card 3: 8.png (Commune Community Family) */}
            <div className="card-glass rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group flex flex-col justify-between">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="8.png"
                  alt="Commune Fitness Youth and Community"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' fill='%23111827'><text x='50%' y='50%' fill='%2322c55e' font-size='20' text-anchor='middle'>COMMUNE FAMILY</text></svg>";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-amber-400 text-xs font-black border border-amber-500/30 backdrop-blur-md">
                  PHOTO #8
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <Trophy className="w-4 h-4" /> Family & Inclusivity
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  A Thriving Kataka Community
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium leading-relaxed">
                  More than just weights — Commune Fitness is an uplifting family of lifters, beginners, children, and champions working together towards longevity and vitality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
