import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const PRELOADER_TAGLINES = [
  "INITIALIZING COMMUNE FITNESS ARCHITECTURE...",
  "REX PLAZA • 4TH FLOOR • KATAKA'S PREMIER SANCTUARY",
  "CALIBRATING LIFE FITNESS™ BIOMECHANIC SYSTEMS...",
  "ACTIVATING STEAM & SAUNA RECOVERY SUITE...",
  "WHERE DISCIPLINE MEETS OPULENCE — WELCOME."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6 seconds smooth luxury intro

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculated);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 400);
        }, 150);
      }
    }, 40);

    // Guaranteed hard timeout safety net (never hang in sandboxed iframes)
    const safetyTimer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsFinished(true);
      onComplete();
    }, 2100);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  // Rotate taglines smoothly during the slow load
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % PRELOADER_TAGLINES.length);
    }, 1300);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080b] text-white px-4 overflow-hidden selection:bg-amber-400 selection:text-black"
        >
          {/* Ambient 3D Glowing Backdrop Rings */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600/20 via-yellow-500/10 to-transparent blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-amber-500/15 blur-[100px] pointer-events-none"></div>

          {/* Floating Luxury Logo Container */}
          <motion.div
            animate={{
              y: [-12, 12, -12],
              rotateZ: [-1, 1, -1],
              rotateX: [3, -3, 3],
              rotateY: [-4, 4, -4],
            }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
            }}
            className="relative mb-8 z-10 flex flex-col items-center"
            style={{ perspective: 1000 }}
          >
            {/* Pulsing Light Aura behind Logo */}
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/30 via-yellow-400/40 to-amber-600/30 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>

            {/* Glass Badge Framing the Logo */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#12131a]/90 border-2 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.35)] flex flex-col items-center backdrop-blur-xl">
              <div className="w-28 h-28 sm:w-36 sm:h-36 relative flex items-center justify-center">
                <img
                  src="1.png"
                  alt="Commune Fitness Logo"
                  onError={(e) => {
                    // Fallback to SVG representation if file not yet copied
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%23f59e0b'><path d='M100 20 C60 20 30 50 30 90 C30 130 60 160 100 160 C140 160 170 130 170 90 Z' fill='none' stroke='%23f59e0b' stroke-width='8'/><circle cx='100' cy='90' r='35' fill='%23fbbf24'/></svg>";
                  }}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.5)]"
                />
              </div>
              <div className="mt-4 text-center">
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-[0.25em] gold-gradient-text">
                  COMMUNE FITNESS
                </h1>
                <p className="text-[11px] font-bold tracking-[0.3em] text-amber-300/80 uppercase mt-1">
                  Rex Plaza • 4th Floor • Kataka
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Rotating Tagline Effect */}
          <div className="h-10 flex items-center justify-center text-center px-4 mb-6 z-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.45 }}
                className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200/90 uppercase drop-shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>{PRELOADER_TAGLINES[taglineIndex]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Luxury Progress Bar with Percentage Counter */}
          <div className="w-full max-w-md px-6 z-10">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-amber-400 mb-2">
              <span className="flex items-center gap-1.5 text-amber-300/90 tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                PREPARING 3D ENVIRONMENT
              </span>
              <span className="text-base font-black tracking-widest text-white">
                {progress}%
              </span>
            </div>

            {/* Glowing progress rail */}
            <div className="w-full h-2 rounded-full bg-[#1e202a] border border-amber-500/30 overflow-hidden relative p-[1px]">
              <motion.div
                className="h-full rounded-full gold-bg shadow-[0_0_15px_#f59e0b]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] text-gray-400 mt-3">
              <span className="flex items-center gap-1">
                <Dumbbell className="w-3 h-3 text-amber-400" /> Life Fitness Pro Grade
              </span>
              <button
                onClick={onComplete}
                className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500 hover:text-black transition-all text-xs uppercase tracking-wider flex items-center gap-1.5 text-amber-300 font-extrabold shadow-sm"
              >
                <span>View Website</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
