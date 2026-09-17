import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Pause, Play, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryImage } from '../data/gymData';

export const RotatingGallery3D: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryItems = GALLERY_ITEMS.slice(2, 9); // Images 3 to 9 for the 3D ring
  const totalCards = galleryItems.length;
  const radius = 380; // Distance in px for 3D cylinder
  const stepAngle = 360 / totalCards;

  // Auto rotation
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setRotationAngle((prev) => (prev + 0.18) % 360);
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  const rotateNext = () => {
    setRotationAngle((prev) => prev + stepAngle);
  };

  const rotatePrev = () => {
    setRotationAngle((prev) => prev - stepAngle);
  };

  return (
    <section id="gallery" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              ORIGINAL GYM <span className="gold-gradient-text">GALLERY</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-1 font-medium">
              Hover over cards to pause rotation. Click any card to launch full-resolution 3D preview.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Carousel Controls */}
            <div className="flex items-center gap-2 card-glass p-1.5 rounded-2xl border border-amber-500/30">
              <button
                onClick={rotatePrev}
                className="p-2 rounded-xl hover:bg-amber-500/20 text-slate-800 dark:text-gray-200 transition-colors"
                title="Rotate Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-xl hover:bg-amber-500/20 text-slate-800 dark:text-gray-200 transition-colors"
                title={isPaused ? 'Resume Rotation' : 'Pause Rotation'}
              >
                {isPaused ? <Play className="w-5 h-5 text-emerald-500" /> : <Pause className="w-5 h-5 text-amber-500" />}
              </button>
              <button
                onClick={rotateNext}
                className="p-2 rounded-xl hover:bg-amber-500/20 text-slate-800 dark:text-gray-200 transition-colors"
                title="Rotate Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href="https://www.google.com/maps/place/Commune+Fitness/@20.4686984,85.8960583,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDQzphCdgxllAvhCPJCyluJ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWm3pVGu-j4_O_73VBpffAJdxKyl8FM609zA45kLaFGNbHMQ8NglMcDn5nLnCjXaLTGEW-aymuGrM4eXjJro4bEo0Ex6F4XfSeiiM8Ks6Tjx7WMDCJkiPCCa_W2x9w192bT6Z-T8Cu6HjKoP%3Dw395-h298-k-no!7i4080!8i3072!4m9!3m8!1s0x3a190dac42593da3:0xcd0de8e5a95ee3ab!8m2!3d20.4686984!4d85.8960583!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11zcp4w83_?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="gold-bg text-black font-black px-5 py-3 rounded-xl hover:scale-105 transition-all flex items-center gap-2 text-xs sm:text-sm shadow-lg gold-glow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Full Google Gallery</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3D Circular Ring Viewport */}
      <div
        className="circle-gallery-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="circle-gallery-ring"
          style={{
            transform: `rotateY(${rotationAngle}deg)`,
          }}
        >
          {galleryItems.map((item, index) => {
            const angle = index * stepAngle;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="circle-card group relative"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400' fill='%2312131a'><rect width='300' height='400'/><text x='50%' y='50%' fill='%23f59e0b' font-size='20' font-weight='bold' text-anchor='middle'>${item.category}</text></svg>`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Reveal Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-amber-400 font-black text-xs uppercase tracking-wider">
                      PHOTO #{item.id}
                    </span>
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-sm leading-tight text-white">{item.title}</h4>
                  <p className="text-[11px] text-amber-200/80 line-clamp-2 mt-1 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid selector for ALL 12 attached photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="card-glass p-6 rounded-3xl border border-amber-500/30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-slate-900 dark:text-white">
              All 12 Original Photo Exhibits
            </h4>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
              Click thumbnail to enlarge
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-xl overflow-hidden aspect-square border-2 border-amber-500/25 hover:border-amber-500 hover:scale-105 transition-all shadow-md focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%231f2937'><rect width='100' height='100'/><text x='50' y='55' fill='%23fbbf24' font-size='14' text-anchor='middle'>#${item.id}</text></svg>`;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-amber-400 text-xs font-black">
                  #{item.id}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-RESOLUTION LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full card-glass p-3 sm:p-5 rounded-3xl border-2 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.3)] flex flex-col items-center overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full card-glass border border-amber-500/40 text-white hover:text-amber-400 hover:scale-110 transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="w-full max-h-[75vh] rounded-2xl overflow-hidden flex items-center justify-center bg-black/70 relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' fill='%23111827'><rect width='800' height='600'/><text x='400' y='300' fill='%23f59e0b' font-size='32' font-weight='bold' text-anchor='middle'>${selectedImage.title}</text></svg>`;
                }}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full px-4 gap-2 text-center sm:text-left">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-amber-500">
                    EXHIBIT #{selectedImage.id} • {selectedImage.category}
                  </span>
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-gray-300 font-medium">
                  {selectedImage.description}
                </p>
              </div>

              <span className="text-xs font-bold px-3 py-1.5 rounded-xl card-glass border border-amber-500/30 text-amber-700 dark:text-amber-400 whitespace-nowrap">
                Commune Fitness Kataka
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
