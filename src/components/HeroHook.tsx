import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { HOOK_LINES, TRANSLATIONS } from '../data/translations';

interface HeroHookProps {
  lang: Language;
  onEnter: () => void;
}

export const HeroHook: React.FC<HeroHookProps> = ({ lang, onEnter }) => {
  const [lineIdx, setLineIdx] = useState(0);
  const [lineActive, setLineActive] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const lines = HOOK_LINES[lang] || HOOK_LINES.en;
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  useEffect(() => {
    setLineIdx(0);
    setShowBrand(false);
    setLineActive(true);

    let idx = 0;
    const interval = setInterval(() => {
      setLineActive(false);
      setTimeout(() => {
        idx++;
        if (idx < lines.length) {
          setLineIdx(idx);
          setLineActive(true);
        } else {
          setShowBrand(true);
          clearInterval(interval);
        }
      }, 600);
    }, 2800);

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <section
      id="hook"
      className="relative min-h-screen flex items-center justify-center bg-radial from-[#006494] via-[#051923] to-[#020d14] text-white overflow-hidden px-6"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#00A8E8]/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#BEE9E8]/30 rounded-full blur-3xl" />
      </div>

      {/* Skip button */}
      <button
        id="skip-hook-button"
        onClick={onEnter}
        className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur-md transition-all cursor-pointer"
      >
        {t('skip_hook')}
      </button>

      {/* Center Hook Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Animated Headline */}
        <div className="min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
          <h1
            className={`font-serif text-2xl sm:text-4xl md:text-5xl font-semibold leading-relaxed tracking-tight transition-all duration-700 ${
              lineActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            {lines[lineIdx]}
          </h1>
        </div>

        {/* Brand Reveal & CTA */}
        <div
          className={`mt-8 transition-all duration-1000 flex flex-col items-center gap-4 ${
            showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          <div className="font-serif tracking-[0.35em] text-sm sm:text-base font-bold text-[#BEE9E8] uppercase">
            ASRAWORLD
          </div>
          <p className="text-white/80 max-w-md text-sm sm:text-base leading-relaxed">
            {t('hook_sub')}
          </p>
          <button
            id="enter-site-button"
            onClick={onEnter}
            className="mt-2 bg-white hover:bg-[#BEE9E8] text-[#006494] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {t('hook_cta')}
          </button>
        </div>
      </div>

      {/* Bottom Scroll Hint */}
      <div
        onClick={onEnter}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/70 text-xs tracking-[0.2em] uppercase cursor-pointer hover:text-white transition-colors"
      >
        <span>{t('scroll_hint')}</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#00A8E8]" />
      </div>
    </section>
  );
};
