import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/gymData';

export const ReviewsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* GOOGLE MAPS 5.0 REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-amber-50/20 dark:bg-black/50 border-t border-amber-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
                Member Testimonials
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                GOOGLE MAP <span className="gold-gradient-text">REVIEWS</span>
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/place/Commune+Fitness/@20.4686984,85.8934834,17z/data=!4m8!3m7!1s0x3a190dac42593da3:0xcd0de8e5a95ee3ab!8m2!3d20.4686984!4d85.8960583!9m1!1b1!16s%2Fg%2F11zcp4w83_?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="card-glass text-slate-900 dark:text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500/10 transition-all flex items-center gap-2 text-xs sm:text-sm border border-amber-500/30"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Read All Verified Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Infinite Dual Track Marquee */}
        <div className="marquee-track silver-sweep-container py-4">
          <div className="marquee-group">
            {TESTIMONIALS.concat(TESTIMONIALS).map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-80 sm:w-96 p-7 rounded-3xl card-glass border border-amber-500/30 flex-shrink-0 shadow-lg relative group transition-all duration-300 hover:-translate-y-2 hover:border-amber-500"
              >
                <div className="flex text-amber-500 mb-3 text-sm">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-gray-300 italic text-xs sm:text-sm mb-6 leading-relaxed font-medium">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-amber-500/15">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 font-black flex items-center justify-center text-sm shadow-inner">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {item.author}
                    </h4>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section id="faq" className="py-24 bg-amber-50/40 dark:bg-black/60 border-y border-amber-500/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              FREQUENTLY ASKED <span className="gold-gradient-text">QUESTIONS</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-2 font-medium">
              Everything you need to know before joining Commune Fitness at Rex Plaza, Kataka.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="card-glass rounded-2xl border border-amber-500/30 overflow-hidden transition-all duration-300 shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium leading-relaxed border-t border-amber-500/15 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
