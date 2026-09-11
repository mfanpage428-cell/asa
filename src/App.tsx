import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Topbar } from './components/Topbar';
import { HeroHook } from './components/HeroHook';
import { TopicCard } from './components/TopicCard';
import { TopicDetail } from './components/TopicDetail';
import { CommunityArticles } from './components/CommunityArticles';
import { WriteArticle } from './components/WriteArticle';
import { ArticleDetail } from './components/ArticleDetail';
import { CommentsPage } from './components/CommentsPage';
import { MyAccount } from './components/MyAccount';
import { Footer } from './components/Footer';
import { TOPICS } from './data/topics';
import { TRANSLATIONS } from './data/translations';
import { Language, Article } from './types';
import { subscribeToArticles } from './lib/postsService';
import { ArrowRight, Eye, Shield, Users, Lock, PenTool } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('asraworld_lang_pref');
      if (saved === 'uz' || saved === 'en' || saved === 'ru') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('asraworld_lang_pref', newLang);
    } catch {
      // ignore
    }
  };

  const [activeView, setActiveView] = useState<string>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [activeCommentArticleId, setActiveCommentArticleId] = useState<string | null>(null);
  const [writeTopicTitle, setWriteTopicTitle] = useState<string>('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [hookPassed, setHookPassed] = useState<boolean>(false);

  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  // Subscribe to community articles
  useEffect(() => {
    const unsub = subscribeToArticles((list) => {
      setArticles(list);
    });
    return () => unsub();
  }, []);

  // Listen to browser hash changes for navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const parts = hash.split('/').filter(Boolean);

      if (parts[0] === 'topics') {
        setActiveView('topics');
        setHookPassed(true);
      } else if (parts[0] === 'topic' && parts[1]) {
        setSelectedTopicId(parts[1]);
        setActiveView('topic-detail');
        setHookPassed(true);
      } else if (parts[0] === 'community') {
        setActiveView('community');
        setHookPassed(true);
      } else if (parts[0] === 'article' && parts[1]) {
        setSelectedArticleId(parts[1]);
        setActiveView('article-detail');
        setHookPassed(true);
      } else if (parts[0] === 'comments' && parts[1]) {
        setActiveCommentArticleId(parts[1]);
        setActiveView('comments');
        setHookPassed(true);
      } else if (parts[0] === 'write') {
        setActiveView('write');
        setHookPassed(true);
      } else if (parts[0] === 'account') {
        setActiveView('account');
        setHookPassed(true);
      } else if (parts[0] === 'home' || parts.length === 0) {
        setActiveView('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) {
      handleHash();
    }
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view: string, param?: string) => {
    if (view === 'topic-detail' && param) {
      setSelectedTopicId(param);
      window.location.hash = `#/topic/${param}`;
    } else if (view === 'article-detail' && param) {
      setSelectedArticleId(param);
      window.location.hash = `#/article/${param}`;
    } else if (view === 'comments' && param) {
      setActiveCommentArticleId(param);
      window.location.hash = `#/comments/${param}`;
    } else if (view === 'topics') {
      window.location.hash = '#/topics';
    } else if (view === 'community') {
      window.location.hash = '#/community';
    } else if (view === 'write') {
      window.location.hash = '#/write';
    } else if (view === 'account') {
      window.location.hash = '#/account';
    } else {
      window.location.hash = '#/';
    }
    setActiveView(view);
    setHookPassed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterFromHook = () => {
    setHookPassed(true);
    setActiveView('home');
    const introEl = document.getElementById('intro-section');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];
  const selectedArticle = articles.find((a) => a.id === selectedArticleId);
  const commentArticle = articles.find((a) => a.id === activeCommentArticleId);

  return (
    <AuthProvider>
      <div className="min-h-screen font-sans bg-[#E1F5FE]/30 text-[#051923] flex flex-col selection:bg-[#00A8E8]/20 selection:text-[#006494]">
        {/* Topbar navigation */}
        <Topbar
          lang={lang}
          onSelectLang={handleSelectLang}
          activeView={activeView}
          onNavigate={navigateTo}
          show={hookPassed || activeView !== 'home'}
        />

        {/* Dynamic Views */}
        <main className="flex-1">
          {/* 1. CINEMATIC HERO HOOK (on home initial landing) */}
          {!hookPassed && activeView === 'home' && (
            <HeroHook lang={lang} onEnter={handleEnterFromHook} />
          )}

          {/* 2. HOME VIEW */}
          {(hookPassed || activeView !== 'home') && activeView === 'home' && (
            <div id="home-view" className="space-y-16 sm:space-y-24 pt-20 sm:pt-24 pb-20">
              {/* Introduction & Global Statistics Card */}
              <section id="intro-section" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-sky-100">
                  <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-2">
                    {t('intro_eyebrow')}
                  </div>
                  <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#051923] leading-tight mb-4">
                    {t('intro_title')}
                  </h1>
                  <p className="text-sm sm:text-base text-[#006494]/85 max-w-4xl leading-relaxed text-justify">
                    {t('intro_sub')}
                  </p>

                  {/* 3 Metric Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-sky-100">
                    <div className="border-t-3 border-[#00A8E8] pt-3">
                      <div className="font-serif font-bold text-3xl sm:text-4xl text-[#006494]">
                        {t('stat1_val')}
                      </div>
                      <div className="text-xs sm:text-sm text-[#051923]/80 mt-1 font-medium">
                        {t('stat1_lbl')}
                      </div>
                    </div>
                    <div className="border-t-3 border-[#00A8E8] pt-3">
                      <div className="font-serif font-bold text-3xl sm:text-4xl text-[#006494]">
                        {t('stat2_val')}
                      </div>
                      <div className="text-xs sm:text-sm text-[#051923]/80 mt-1 font-medium">
                        {t('stat2_lbl')}
                      </div>
                    </div>
                    <div className="border-t-3 border-[#00A8E8] pt-3">
                      <div className="font-serif font-bold text-3xl sm:text-4xl text-[#006494]">
                        {t('stat3_val')}
                      </div>
                      <div className="text-xs sm:text-sm text-[#051923]/80 mt-1 font-medium">
                        {t('stat3_lbl')}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10 DISTINCT TOPICS SECTION */}
              <section id="topics-section" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
                      {t('topics_eyebrow')}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#051923]">
                      {t('topics_title')}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-[#006494]/85 max-w-2xl">
                      {t('topics_sub')}
                    </p>
                  </div>

                  <button
                    onClick={() => navigateTo('topics')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8E8] hover:text-[#006494] transition-colors cursor-pointer"
                  >
                    <span>{t('view_all_topics')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Grid of 10 Distinct Topics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {TOPICS.map((topic, index) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      index={index}
                      lang={lang}
                      onSelect={(id) => navigateTo('topic-detail', id)}
                    />
                  ))}
                </div>
              </section>

              {/* COMMUNITY BANNER */}
              <section className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-r from-[#006494] to-[#00A8E8] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <span className="bg-white/20 text-white font-mono font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {t('banner_badge')}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-3 leading-snug">
                      {t('banner_title')}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                      {t('banner_sub')}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => navigateTo('write')}
                      className="bg-white hover:bg-sky-50 text-[#006494] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-center cursor-pointer"
                    >
                      WRITE AN ARTICLE
                    </button>
                    <button
                      onClick={() => navigateTo('community')}
                      className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-xs transition-all text-center cursor-pointer"
                    >
                      {t('view_articles_list')}
                    </button>
                  </div>
                </div>
              </section>

              {/* MISSION / ABOUT SECTION */}
              <section id="mission-section" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-[#051923] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
                  <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
                    {t('mission_eyebrow')}
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    {t('mission_title')}
                  </h2>
                  <p className="text-xs sm:text-sm text-sky-200/80 max-w-xl mb-10 leading-relaxed">
                    {t('mission_sub')}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/20 flex items-center justify-center text-[#00A8E8] mb-4">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#BEE9E8] mb-2">
                        {t('m1_t')}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {t('m1_d')}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/20 flex items-center justify-center text-[#00A8E8] mb-4">
                        <PenTool className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#BEE9E8] mb-2">
                        {t('m2_t')}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {t('m2_d')}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/20 flex items-center justify-center text-[#00A8E8] mb-4">
                        <Lock className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#BEE9E8] mb-2">
                        {t('m3_t')}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {t('m3_d')}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/20 flex items-center justify-center text-[#00A8E8] mb-4">
                        <Users className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#BEE9E8] mb-2">
                        {t('m4_t')}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {t('m4_d')}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* 3. TOPICS OVERVIEW VIEW */}
          {activeView === 'topics' && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-28">
              <div className="mb-8">
                <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
                  {t('topics_eyebrow')}
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#051923]">
                  {t('topics_page_title')}
                </h1>
                <p className="mt-2 text-sm text-[#006494]/85 max-w-2xl leading-relaxed">
                  {t('topics_page_sub')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {TOPICS.map((topic, index) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    index={index}
                    lang={lang}
                    onSelect={(id) => navigateTo('topic-detail', id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 4. TOPIC DETAIL VIEW (650+ words article) */}
          {activeView === 'topic-detail' && (
            <TopicDetail
              topic={selectedTopic}
              lang={lang}
              onBack={() => navigateTo('topics')}
              onNavigateToWrite={(topicTitle) => {
                setWriteTopicTitle(topicTitle || '');
                navigateTo('write');
              }}
            />
          )}

          {/* 5. COMMUNITY ARTICLES VIEW */}
          {activeView === 'community' && (
            <CommunityArticles
              lang={lang}
              onOpenArticle={(id) => navigateTo('article-detail', id)}
              onOpenComments={(id) => navigateTo('comments', id)}
              onNavigateToWrite={() => navigateTo('write')}
              onRequireAccount={() => navigateTo('account')}
            />
          )}

          {/* 6. WRITE AN ARTICLE VIEW */}
          {activeView === 'write' && (
            <WriteArticle
              lang={lang}
              initialTopicTitle={writeTopicTitle}
              onBack={() => navigateTo('community')}
              onArticleCreated={(newId) => navigateTo('article-detail', newId)}
              onNavigateToAccount={() => navigateTo('account')}
            />
          )}

          {/* 7. ARTICLE DETAIL VIEW */}
          {activeView === 'article-detail' && (
            selectedArticle ? (
              <ArticleDetail
                article={selectedArticle}
                lang={lang}
                onBack={() => navigateTo('community')}
                onOpenComments={(id) => navigateTo('comments', id)}
                onRequireAccount={() => navigateTo('account')}
              />
            ) : (
              <div className="pt-32 pb-24 text-center px-4 max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
                  <p className="text-slate-600 mb-4 text-sm">{t('article_not_found')}</p>
                  <button
                    onClick={() => navigateTo('community')}
                    className="px-5 py-2.5 bg-[#006494] hover:bg-[#00A8E8] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    {t('back_to_articles_btn')}
                  </button>
                </div>
              </div>
            )
          )}

          {/* 8. DEDICATED COMMENTS PAGE VIEW */}
          {activeView === 'comments' && (
            commentArticle ? (
              <CommentsPage
                article={commentArticle}
                lang={lang}
                onBack={() => navigateTo('article-detail', commentArticle.id)}
                onNavigateToAccount={() => navigateTo('account')}
              />
            ) : (
              <div className="pt-32 pb-24 text-center px-4 max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
                  <p className="text-slate-600 mb-4 text-sm">{t('comments_not_found')}</p>
                  <button
                    onClick={() => navigateTo('community')}
                    className="px-5 py-2.5 bg-[#006494] hover:bg-[#00A8E8] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    {t('back_to_articles_btn')}
                  </button>
                </div>
              </div>
            )
          )}

          {/* 9. MY ACCOUNT VIEW */}
          {activeView === 'account' && (
            <MyAccount
              lang={lang}
              onNavigateToWrite={() => navigateTo('write')}
              onNavigateToArticles={() => navigateTo('community')}
            />
          )}
        </main>

        {/* Footer */}
        <Footer lang={lang} onNavigate={navigateTo} />
      </div>
    </AuthProvider>
  );
}
