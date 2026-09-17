import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919938581222?text=Hi%20Commune%20Fitness,%20I%20am%20interested%20in%20taking%20a%20gym%20membership!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl whatsapp-float-pulse hover:scale-110 transition-transform flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-black pl-0 group-hover:pl-2.5 uppercase tracking-wider">
        Chat With Us
      </span>
    </a>
  );
};
