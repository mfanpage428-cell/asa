import React from 'react';
import { ArrowLeft, MessageSquare, ThumbsUp, ThumbsDown, Calendar, User, Share2 } from 'lucide-react';
import { Article, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { useAuth } from '../context/AuthContext';
import { toggleArticleReaction } from '../lib/postsService';

interface ArticleDetailProps {
  article: Article;
  lang: Language;
  onBack: () => void;
  onOpenComments: (articleId: string) => void;
  onRequireAccount: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  lang,
  onBack,
  onOpenComments,
  onRequireAccount
}) => {
  const { profile } = useAuth();
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  const likesList = Array.isArray(article?.likes) ? article.likes : [];
  const dislikesList = Array.isArray(article?.dislikes) ? article.dislikes : [];

  const hasLiked = profile ? likesList.includes(profile.uid) : false;
  const hasDisliked = profile ? dislikesList.includes(profile.uid) : false;

  const handleReaction = async (type: 'like' | 'dislike') => {
    if (!profile) {
      onRequireAccount();
      return;
    }
    await toggleArticleReaction(article.id, profile.uid, type);
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString(lang === 'uz' ? 'uz-UZ' : lang === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const paragraphs = (article.text || '').split(/\n\n+/).filter(Boolean);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#E1F5FE]/30 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#006494] hover:text-[#00A8E8] mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('back_to_articles')}
        </button>

        <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-sky-100">
          {/* Top metadata */}
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <span className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
              {article.category || 'Article'}
            </span>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(article.ts)}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#051923] leading-tight mb-6">
            {article.title}
          </h1>

          {/* Instagram-style Author Card */}
          <div className="flex items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
            <div className="flex items-center gap-3.5">
              {article.authorPhotoURL ? (
                <img
                  src={article.authorPhotoURL}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-300 shadow-xs"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#006494] to-[#00A8E8] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  {article.authorName ? article.authorName.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
                </div>
              )}
              <div>
                <div className="font-bold text-sm sm:text-base text-[#051923]">
                  {article.authorName}
                </div>
                {article.authorHandle && (
                  <div className="text-xs text-slate-500 font-mono">
                    @{article.authorHandle.replace(/^@/, '')}
                  </div>
                )}
              </div>
            </div>

            {/* Reaction Thumbs Up / Down */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleReaction('like')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  hasLiked
                    ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{likesList.length}</span>
              </button>

              <button
                onClick={() => handleReaction('dislike')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  hasDisliked
                    ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
                <span>{dislikesList.length}</span>
              </button>
            </div>
          </div>

          {/* Article Full Body */}
          <div className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed font-sans mb-10">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="mb-5 leading-relaxed text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Open Separate Comments Page Button */}
          <div className="mt-8 pt-8 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Ushbu maqolaga o'z fikringizni bildiring yoki boshqalar yozgan izohlarga javob bering.
            </div>

            <button
              id="open-article-comments-page-btn"
              onClick={() => onOpenComments(article.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#006494] hover:bg-[#00A8E8] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>COMMENTS & MUHOKAMA</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
