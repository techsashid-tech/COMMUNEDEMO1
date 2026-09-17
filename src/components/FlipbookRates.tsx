import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Tag, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MEMBERSHIP_RATES, SPECIAL_TRAINING_RATES } from '../data/gymData';
import confetti from 'canvas-confetti';

export const FlipbookRates: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [isFlipping, setIsFlipping] = useState(false);

  // Realistic synthesized page turn audio using Web Audio API
  const playFlipSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      if (!audioCtx) return;

      const bufferSize = audioCtx.sampleRate * 0.15;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.04));
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 3;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
    } catch {
      // AudioContext unavailable or blocked by policy
    }
  };

  const handleFlipPage = (target: 1 | 2) => {
    if (isFlipping || target === currentPage) return;
    playFlipSound();
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage(target);
      setTimeout(() => {
        setIsFlipping(false);
      }, 350);
    }, 250);
  };

  const handleClaimDiscount = (planName?: string) => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#d97706', '#ffffff'],
    });

    const text = encodeURIComponent(
      `Hi Commune Fitness Kataka, I want to claim the special discounted admission rate for ${planName || 'Gym Membership'}!`
    );
    window.open(`https://wa.me/919938581222?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-amber-50/30 dark:bg-[#0b0c12] border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
            Interactive Rates Booklet
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
            COMMUNE PREMIUM <span className="gold-gradient-text">GYM RATES</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-3 font-medium">
            Transform your fitness with our high-end membership plans crafted for champions. Flip through our interactive 3D rate card below.
          </p>
        </div>

        {/* 3D Flip Menu Booklet Viewport */}
        <div className="max-w-4xl mx-auto mb-14" style={{ perspective: '2000px' }}>
          <div
            className={`w-full rounded-3xl p-6 sm:p-10 card-glass border-2 border-amber-500/50 shadow-2xl relative transition-all duration-500 ${
              isFlipping ? 'opacity-30 scale-95 [transform:rotateY(75deg)]' : 'opacity-100 scale-100 [transform:rotateY(0deg)]'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* PAGE 1: COMMUNE GENERAL ADMISSION RATES */}
            {currentPage === 1 && (
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div className="text-left">
                    <h3 className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                      Commune Fitness Rates
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-amber-200/80 font-bold mt-0.5">
                      Special Discounted Admission Menu
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-500/30">
                    Rex Plaza Exclusive
                  </span>
                </div>

                {/* Rates List */}
                <div className="space-y-4">
                  {MEMBERSHIP_RATES.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => handleClaimDiscount(plan.name)}
                      className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151620] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                            {plan.name}
                          </h4>
                          {plan.popular && (
                            <span className="gold-bg text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                              BEST VALUE
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-amber-100/80 font-medium">
                          {plan.features.slice(0, 2).join(' • ')}
                        </p>
                      </div>

                      <div className="flex items-baseline sm:flex-col sm:items-end gap-2 sm:gap-0">
                        <span className="text-slate-400 dark:text-gray-500 line-through text-xs sm:text-sm font-semibold">
                          {plan.originalPrice}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                          {plan.discountedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booklet Footer Controls */}
                <div className="pt-6 border-t border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => handleFlipPage(2)}
                    className="gold-bg text-black font-black px-6 py-3.5 rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-lg gold-glow w-full sm:w-auto"
                  >
                    <span>FLIP TO PERSONAL TRAINING & DETOX</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                    <span className="hidden md:inline-block text-xs font-black text-amber-700 dark:text-amber-300 tracking-wider whitespace-nowrap">
                      PAGE 1 OF 2
                    </span>
                    <button
                      onClick={() => handleClaimDiscount('Membership Discount')}
                      className="silver-sweep-container inline-flex items-center justify-center px-6 py-3.5 font-black text-amber-800 dark:text-amber-300 bg-transparent border-2 border-amber-500 rounded-xl hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] w-full sm:w-auto text-xs sm:text-sm"
                    >
                      <span className="relative flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        CLAIM DISCOUNT
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2: SPECIAL TRAINING & DETOX PACKAGES */}
            {currentPage === 2 && (
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div className="text-left">
                    <h3 className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                      Special Training Menu
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-amber-200/80 font-bold mt-0.5">
                      Personal Coaching & Recovery Packages
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
                    VIP Coaching
                  </span>
                </div>

                <div className="space-y-4">
                  {SPECIAL_TRAINING_RATES.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleClaimDiscount(item.name)}
                      className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#151620] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="space-y-1">
                        <h4 className="font-black text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-amber-100/80 font-medium">
                          {item.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.features.map((f, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-baseline sm:flex-col sm:items-end gap-2 sm:gap-0">
                        <span className="text-slate-400 dark:text-gray-500 line-through text-xs sm:text-sm font-semibold">
                          {item.originalPrice}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => handleFlipPage(1)}
                    className="gold-bg text-black font-black px-6 py-3.5 rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-lg gold-glow w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>FLIP BACK TO RATES</span>
                  </button>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                    <span className="hidden md:inline-block text-xs font-black text-amber-700 dark:text-amber-300 tracking-wider whitespace-nowrap">
                      PAGE 2 OF 2
                    </span>
                    <button
                      onClick={() => handleClaimDiscount('VIP Personal Coaching Package')}
                      className="silver-sweep-container inline-flex items-center justify-center px-6 py-3.5 font-black text-amber-800 dark:text-amber-300 bg-transparent border-2 border-amber-500 rounded-xl hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] w-full sm:w-auto text-xs sm:text-sm"
                    >
                      <span className="relative flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        CLAIM VIP OFFER
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Free Inclusions Matrix */}
        <div className="card-glass rounded-3xl p-8 border border-amber-500/30">
          <h4 className="text-center font-black text-base sm:text-lg text-amber-600 dark:text-amber-400 mb-6 uppercase tracking-wider">
            Included Free With Every Membership Plan
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-white/5 border border-amber-500/20 flex flex-col items-center justify-center hover:scale-105 transition-transform">
              <Award className="w-8 h-8 text-amber-500 mb-2" />
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-gray-200">
                Certified Trainers
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-white/5 border border-amber-500/20 flex flex-col items-center justify-center hover:scale-105 transition-transform">
              <CheckCircle2 className="w-8 h-8 text-amber-500 mb-2" />
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-gray-200">
                Zumba & Yoga Classes
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-white/5 border border-amber-500/20 flex flex-col items-center justify-center hover:scale-105 transition-transform">
              <Tag className="w-8 h-8 text-amber-500 mb-2" />
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-gray-200">
                CrossFit & Conditioning
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-white/5 border border-amber-500/20 flex flex-col items-center justify-center hover:scale-105 transition-transform">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-2" />
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-gray-200">
                Powerlifting Arena
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
