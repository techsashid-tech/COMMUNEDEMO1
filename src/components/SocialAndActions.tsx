import React from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  Phone,
  Navigation,
  HeartHandshake,
  Star,
  Layers,
  Activity,
  Flame
} from 'lucide-react';

export const SocialAndActions: React.FC = () => {
  return (
    <>
      {/* SOCIAL MEDIA CONNECTIONS */}
      <section className="py-14 relative bg-amber-950/10 dark:bg-black/60 border-y border-amber-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
            Connect With Us Online
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">
            JOIN OUR <span className="gold-gradient-text">SOCIAL COMMUNITY</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white font-black flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="tracking-widest text-xs sm:text-sm uppercase">INSTAGRAM</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="tracking-widest text-xs sm:text-sm uppercase">FACEBOOK</span>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 rounded-2xl bg-slate-900 border border-slate-700 text-white font-black flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Twitter className="w-5 h-5 text-amber-400 group-hover:-rotate-12 transition-transform" />
              <span className="tracking-widest text-xs sm:text-sm uppercase">X (TWITTER)</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 rounded-2xl bg-red-600 text-white font-black flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="tracking-widest text-xs sm:text-sm uppercase">YOUTUBE</span>
            </a>
          </div>

          {/* WhatsApp Chat & Call Store Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/919938581222?text=Hi%20Commune%20Fitness,%20I%20want%20to%20chat!"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-72 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="tel:09938581222"
              className="w-full sm:w-72 p-4 rounded-2xl bg-rose-700 hover:bg-rose-600 text-white font-extrabold flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all text-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Call Store (Kataka)</span>
            </a>
          </div>
        </div>
      </section>

      {/* DIRECT ACTION / CLIENT SUPPORT CARDS */}
      <section className="py-16 relative bg-amber-50/20 dark:bg-black/40 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase">
              INSTANT <span className="gold-gradient-text">CLIENT SUPPORT</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mt-1.5 font-medium">
              Immediate access points for gym visits, membership counseling, and route queries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Call Now */}
            <a
              href="tel:09938581222"
              className="card-glass p-6 rounded-3xl border border-rose-500/40 bg-rose-950/20 hover:scale-105 hover:-translate-y-1 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-600/30 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-rose-400 uppercase tracking-widest">CALL NOW</h3>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">+91 99385 81222</p>
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/919938581222?text=Hi%20Commune%20Fitness,%20I%20have%20an%20instant%20query!"
              target="_blank"
              rel="noreferrer"
              className="card-glass p-6 rounded-3xl border border-emerald-500/40 bg-emerald-950/20 hover:scale-105 hover:-translate-y-1 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">WHATSAPP US</h3>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">Instant Reply</p>
            </a>

            {/* Get Directions */}
            <a
              href="https://maps.google.com/?q=Commune+Fitness+Rex+Plaza+Kataka"
              target="_blank"
              rel="noreferrer"
              className="card-glass p-6 rounded-3xl border border-blue-500/40 bg-blue-950/20 hover:scale-105 hover:-translate-y-1 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">GET DIRECTIONS</h3>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">Rex Plaza Pin</p>
            </a>

            {/* Consultation */}
            <a
              href="https://wa.me/919938581222?text=Hi%20Commune%20Fitness,%20I%20want%20free%20fitness%20guidance!"
              target="_blank"
              rel="noreferrer"
              className="card-glass p-6 rounded-3xl border border-amber-500/40 bg-amber-950/20 hover:scale-105 hover:-translate-y-1 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-600/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">CONSULTATION</h3>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">Free Fitness Guidance</p>
            </a>
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS / STATS BAR */}
      <section className="py-10 border-b border-amber-500/20 bg-amber-50/40 dark:bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1 group">
              <h3 className="text-3xl sm:text-4xl font-black gold-gradient-text flex items-center justify-center gap-1">
                5.0 <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
              </h3>
              <p className="text-slate-700 dark:text-amber-200/80 text-xs sm:text-sm font-bold">Google Rating</p>
            </div>
            <div className="space-y-1 group">
              <h3 className="text-3xl sm:text-4xl font-black gold-gradient-text flex items-center justify-center gap-1">
                <Layers className="w-6 h-6 text-amber-400" /> 4th Floor
              </h3>
              <p className="text-slate-700 dark:text-amber-200/80 text-xs sm:text-sm font-bold">Rex Plaza, Kataka</p>
            </div>
            <div className="space-y-1 group">
              <h3 className="text-3xl sm:text-4xl font-black gold-gradient-text flex items-center justify-center gap-1">
                <Activity className="w-6 h-6 text-amber-400" /> Pro Level
              </h3>
              <p className="text-slate-700 dark:text-amber-200/80 text-xs sm:text-sm font-bold">Life Fitness Machines</p>
            </div>
            <div className="space-y-1 group">
              <h3 className="text-3xl sm:text-4xl font-black gold-gradient-text flex items-center justify-center gap-1">
                <Flame className="w-6 h-6 text-amber-400" /> Steam / Sauna
              </h3>
              <p className="text-slate-700 dark:text-amber-200/80 text-xs sm:text-sm font-bold">Recovery Suite</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
