import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="border-t border-amber-500/20 py-12 bg-amber-50/40 dark:bg-black/85 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        
        <div className="space-y-1.5">
          <p className="text-slate-900 dark:text-white font-black text-lg tracking-wide uppercase">
            Commune Fitness Center
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-600 dark:text-gray-400 font-medium">
            <span>&copy; 2026 Commune Fitness Kataka. All rights reserved.</span>
            <button
              onClick={onOpenPrivacy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full card-glass border border-amber-500/30 text-amber-700 dark:text-amber-400 font-bold hover:border-amber-500 hover:text-amber-500 transition-all text-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Privacy Policy
            </button>
          </div>
        </div>

        {/* SK DAS Developer Badge */}
        <div className="card-glass px-6 py-3 rounded-2xl flex items-center gap-3 border border-amber-500/40 shadow-lg group hover:border-amber-500 transition-all">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
          <div className="text-left">
            <span className="text-slate-600 dark:text-gray-400 block font-semibold text-[11px]">
              Website Crafted & Designed By
            </span>
            <span className="gold-gradient-text font-black text-sm tracking-wider uppercase block">
              SK DAS
            </span>
          </div>
          <a
            href="tel:07798977519"
            className="ml-2 bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-700 dark:text-amber-400 font-black px-3 py-1.5 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall className="w-3 h-3" />
            <span>07798977519</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
