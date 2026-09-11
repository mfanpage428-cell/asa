import React from 'react';
import { Send, User as UserIcon } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { useAuth } from '../context/AuthContext';

interface TopbarProps {
  lang: Language;
  onSelectLang: (l: Language) => void;
  activeView: string;
  onNavigate: (view: string) => void;
  show: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({
  lang,
  onSelectLang,
  activeView,
  onNavigate,
  show
}) => {
  const { profile } = useAuth();
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  return (
    <header
      id="topbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-white/90 backdrop-blur-md border-b border-sky-200/40 shadow-xs px-4 sm:px-8 py-3`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-left cursor-pointer group"
          id="brand-button"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00A8E8] group-hover:scale-125 transition-transform" />
          <span className="font-serif font-bold text-xl sm:text-2xl tracking-wider text-[#006494]">
            ASRAWORLD
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#006494]">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors hover:text-[#00A8E8] ${
              activeView === 'home' ? 'text-[#00A8E8] font-bold underline underline-offset-4' : 'opacity-85'
            }`}
          >
            {t('nav_home')}
          </button>
          <button
            onClick={() => onNavigate('topics')}
            className={`transition-colors hover:text-[#00A8E8] ${
              activeView === 'topics' || activeView === 'topic-detail' ? 'text-[#00A8E8] font-bold underline underline-offset-4' : 'opacity-85'
            }`}
          >
            {t('nav_topics')}
          </button>
          <button
            onClick={() => onNavigate('community')}
            className={`transition-colors hover:text-[#00A8E8] ${
              activeView === 'community' || activeView === 'article-detail' || activeView === 'comments' ? 'text-[#00A8E8] font-bold underline underline-offset-4' : 'opacity-85'
            }`}
          >
            {t('nav_articles')}
          </button>
          <button
            onClick={() => onNavigate('account')}
            className={`transition-colors hover:text-[#00A8E8] flex items-center gap-1.5 ${
              activeView === 'account' ? 'text-[#00A8E8] font-bold underline underline-offset-4' : 'opacity-85'
            }`}
          >
            {profile?.photoURL ? (
              <img
                src={profile.photoURL}
                alt=""
                className="w-5 h-5 rounded-full object-cover border border-sky-400"
              />
            ) : (
              <UserIcon className="w-4 h-4" />
            )}
            {t('nav_account')}
          </button>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Requested specific button text: WRITE AN ARTICLE */}
          <button
            id="write-article-topbar-btn"
            onClick={() => onNavigate('write')}
            className="bg-[#00A8E8] hover:bg-[#006494] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-105 active:scale-95"
          >
            WRITE AN ARTICLE
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-white border border-sky-200 rounded-full p-1 shadow-xs text-xs font-bold">
            {(['en', 'uz', 'ru'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2 py-0.5 rounded-full transition-all uppercase cursor-pointer ${
                  lang === l
                    ? 'bg-[#006494] text-white shadow-xs'
                    : 'text-[#006494]/70 hover:text-[#006494]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Telegram Channel Link */}
          <a
            href="https://t.me/asra_kidsuz"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram: @asra_kidsuz"
            className="w-8 h-8 rounded-full bg-[#00A8E8] hover:bg-[#006494] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
            aria-label="Telegram"
          >
            <Send className="w-4 h-4 ml-[-1px] mt-[1px]" />
          </a>
        </div>
      </div>
    </header>
  );
};
