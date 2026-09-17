import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Mail,
  Send,
  ShieldCheck,
  X
} from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const [mapScale, setMapScale] = useState(1);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    agreed: false,
  });

  const zoomIn = () => {
    if (mapScale < 1.6) setMapScale((prev) => +(prev + 0.2).toFixed(1));
  };

  const zoomOut = () => {
    if (mapScale > 0.8) setMapScale((prev) => +(prev - 0.2).toFixed(1));
  };

  const resetZoom = () => {
    setMapScale(1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* LOCATION & HOURS SECTION */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="space-y-6">
              <div>
                <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
                  Location & Schedule
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  VISIT OUR <span className="gold-gradient-text">CENTER</span>
                </h2>
                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-2 font-medium">
                  Located in the heart of Kataka at Rex Plaza with direct elevator access and spacious parking.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-4 card-glass p-5 rounded-2xl border border-amber-500/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl gold-bg flex items-center justify-center text-black flex-shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Gym Address</h4>
                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-1 font-medium leading-relaxed">
                      College Square, 4th Floor, Rex Plaza, Ice Factory Road, Kataka, Odisha 753003
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 card-glass p-5 rounded-2xl border border-amber-500/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl gold-bg flex items-center justify-center text-black flex-shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Working Hours</h4>
                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mt-1 font-medium">
                      <span className="font-bold text-amber-600 dark:text-amber-400">Morning:</span> Open Daily until 12:00 PM
                    </p>
                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm font-medium mt-0.5">
                      <span className="font-bold text-amber-600 dark:text-amber-400">Evening:</span> Reopens Daily at 4:00 PM
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4 card-glass p-5 rounded-2xl border border-amber-500/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl gold-bg flex items-center justify-center text-black flex-shrink-0 shadow-sm mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Direct Phone</h4>
                    <a
                      href="tel:09938581222"
                      className="text-amber-600 dark:text-amber-400 font-black text-base hover:underline block mt-0.5"
                    >
                      +91 99385 81222
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Map with Interactive Zoom In / Zoom Out / Reset Controls */}
            <div className="relative rounded-3xl overflow-hidden card-glass border-2 border-amber-500/40 min-h-[420px] shadow-2xl flex flex-col">
              
              {/* Zoom Controls Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 card-glass p-2 rounded-2xl border border-amber-500/40 shadow-2xl bg-black/75 backdrop-blur-md">
                <button
                  onClick={zoomIn}
                  className="p-2 rounded-xl gold-bg text-black font-black hover:scale-105 transition-all flex items-center justify-center shadow-md"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={zoomOut}
                  className="p-2 rounded-xl card-glass border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center shadow-md"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={resetZoom}
                  className="p-2 rounded-xl card-glass border border-white/20 text-amber-400 hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center shadow-md"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono font-bold text-amber-300 px-1">
                  {Math.round(mapScale * 100)}%
                </span>
              </div>

              {/* Open in Google Maps */}
              <div className="absolute top-4 right-4 z-20">
                <a
                  href="https://www.google.com/maps/place/Commune+Fitness/@20.4686984,85.8934834,17z/data=!3m1!4b1!4m6!3m5!1s0x3a190dac42593da3:0xcd0de8e5a95ee3ab!8m2!3d20.4686984!4d85.8960583"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/85 backdrop-blur-md text-white font-bold px-3.5 py-2 rounded-xl text-xs hover:bg-amber-500 hover:text-black transition-all flex items-center gap-1.5 shadow-2xl border border-white/15"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-full flex-grow overflow-hidden bg-slate-900 flex items-center justify-center min-h-[420px]">
                <iframe
                  title="Commune Fitness Kataka Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.784532298953!2d85.8934834!3d20.4686984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190dac42593da3%3A0xcd0de8e5a95ee3ab!2sCommune%20Fitness!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: '420px',
                    transform: `scale(${mapScale})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.35s ease-out',
                  }}
                  allowFullScreen
                  loading="lazy"
                  className="relative z-0"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INQUIRY SECTION */}
      <section id="contact-inquiry" className="py-24 relative bg-amber-50/20 dark:bg-black/40 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div>
                <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 inline-block mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  JOIN THE JOURNEY TOWARDS <br />
                  <span className="gold-gradient-text">FITNESS TRANSFORMATION</span>
                </h2>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                We warmly invite fitness enthusiasts, athletes, and community members to visit our center. Fill in the form or email our management directly.
              </p>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                <div className="w-8 h-8 rounded-lg gold-bg flex items-center justify-center text-black">
                  <Mail className="w-4 h-4" />
                </div>
                <span>
                  Direct Mailbox:{' '}
                  <a href="mailto:sashikantadas@gmail.com" className="underline hover:text-amber-500">
                    sashikantadas@gmail.com
                  </a>
                </span>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="card-glass p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white uppercase tracking-wider">
                Talk to Our Experts
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                  <ShieldCheck className="w-10 h-10 mx-auto" />
                  <h4 className="font-bold text-lg">Inquiry Received!</h4>
                  <p className="text-xs">Our team at Commune Fitness will connect with you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full card-glass border border-amber-500/30 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full card-glass border border-amber-500/30 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. +91 99385...)"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full card-glass border border-amber-500/30 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message, Goal or Membership Inquiry"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full card-glass border border-amber-500/30 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacy-policy-check"
                      required
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                    />
                    <label
                      htmlFor="privacy-policy-check"
                      className="text-xs text-slate-600 dark:text-gray-300 leading-tight cursor-pointer select-none"
                    >
                      I accept the{' '}
                      <button
                        type="button"
                        onClick={() => setPrivacyModalOpen(true)}
                        className="text-amber-600 dark:text-amber-400 font-bold underline hover:text-amber-500"
                      >
                        Privacy Policy
                      </button>{' '}
                      and data usage terms.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-bg text-black font-black py-4 rounded-xl hover:scale-[1.01] transition-transform gold-glow flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* PRIVACY POLICY MODAL */}
      {privacyModalOpen && (
        <div
          onClick={() => setPrivacyModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card-glass max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-amber-500/40 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full card-glass text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gold-bg flex items-center justify-center text-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Privacy Policy & Terms
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium leading-relaxed">
              <p>
                <strong>1. Information Collection:</strong> Commune Fitness Center collects personal information provided via inquiries (such as name, email, and phone number) strictly for processing requests and membership consultations.
              </p>
              <p>
                <strong>2. Data Usage:</strong> Our platform does not sell, rent, or distribute personal details to third parties. Information shared is used solely to respond to queries and provide gym services.
              </p>
              <p>
                <strong>3. Security:</strong> Standard encryption and security measures are taken to ensure personal data remains safe.
              </p>
              <p>
                <strong>4. Consent:</strong> By checking the consent checkbox, you grant Commune Fitness permission to contact you regarding your submitted inquiry.
              </p>
            </div>

            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="mt-6 w-full gold-bg text-black font-black py-3.5 rounded-xl hover:scale-[1.01] transition-transform text-xs uppercase tracking-wider shadow-lg"
            >
              Close & Accept Terms
            </button>
          </div>
        </div>
      )}
    </>
  );
};
