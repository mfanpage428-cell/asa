import React from 'react';
import { Send, Heart } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  return (
    <footer className="bg-[#051923] text-sky-100 py-14 px-6 border-t border-sky-900/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand & Slogan */}
        <div className="max-w-md">
          <div className="font-serif text-2xl font-bold text-white tracking-wider flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A8E8]" />
            <span>ASRAWORLD</span>
          </div>
          <p className="text-xs sm:text-sm text-sky-200/80 leading-relaxed">
            {t('footer_slogan')}
          </p>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-sky-200/90">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
            {t('nav_home')}
          </button>
          <button onClick={() => onNavigate('topics')} className="hover:text-white transition-colors cursor-pointer">
            {t('nav_topics')}
          </button>
          <button onClick={() => onNavigate('community')} className="hover:text-white transition-colors cursor-pointer">
            {t('nav_articles')}
          </button>
          <button onClick={() => onNavigate('account')} className="hover:text-white transition-colors cursor-pointer">
            {t('nav_account')}
          </button>
          <button onClick={() => onNavigate('write')} className="hover:text-white font-bold text-[#00A8E8] transition-colors cursor-pointer">
            WRITE AN ARTICLE
          </button>
        </div>

        {/* Telegram Community */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://t.me/asra_kidsuz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#006494] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Telegram: @asra_kidsuz</span>
          </a>
          <span className="text-[11px] text-sky-300/60">
            {t('footer_telegram_sub')}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-sky-900/60 text-center text-xs text-sky-300/50 flex items-center justify-center gap-1">
        <span>ASRAWORLD © {new Date().getFullYear()} • {t('footer_rights')}</span>
      </div>
    </footer>
  );
};
