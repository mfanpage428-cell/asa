import React, { useEffect, useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, PenTool, Calendar, ArrowRight, User } from 'lucide-react';
import { Article, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { subscribeToArticles, toggleArticleReaction } from '../lib/postsService';
import { useAuth } from '../context/AuthContext';

interface CommunityArticlesProps {
  lang: Language;
  onOpenArticle: (articleId: string) => void;
  onOpenComments: (articleId: string) => void;
  onNavigateToWrite: () => void;
  onRequireAccount: () => void;
}

export const CommunityArticles: React.FC<CommunityArticlesProps> = ({
  lang,
  onOpenArticle,
  onOpenComments,
  onNavigateToWrite,
  onRequireAccount
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { profile } = useAuth();
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  useEffect(() => {
    const unsub = subscribeToArticles((items) => {
      setArticles(items);
    });
    return () => unsub();
  }, []);

  const handleReaction = async (e: React.MouseEvent, articleId: string, type: 'like' | 'dislike') => {
    e.stopPropagation();
    if (!profile) {
      onRequireAccount();
      return;
    }
    await toggleArticleReaction(articleId, profile.uid, type);
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString(lang === 'uz' ? 'uz-UZ' : lang === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#E1F5FE]/30 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-sky-100 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
              {t('community_eyebrow')}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#051923]">
              {t('community_title')}
            </h1>
            <p className="mt-2 text-sm text-[#006494]/85 max-w-xl leading-relaxed">
              {t('community_sub')}
            </p>
          </div>

          <button
            id="write-article-community-header"
            onClick={onNavigateToWrite}
            className="shrink-0 flex items-center gap-2 bg-[#00A8E8] hover:bg-[#006494] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <PenTool className="w-4 h-4" />
            WRITE AN ARTICLE
          </button>
        </div>

        {/* Articles List */}
        {articles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-sky-100 text-slate-500">
            <p className="text-base font-medium">Hali maqolalar yo'q. Birinchi bo'lib maqola yozing!</p>
            <button
              onClick={onNavigateToWrite}
              className="mt-4 inline-flex items-center gap-2 bg-[#00A8E8] text-white text-xs font-bold px-4 py-2 rounded-full"
            >
              WRITE AN ARTICLE
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((art) => {
              const likesList = Array.isArray(art.likes) ? art.likes : [];
              const dislikesList = Array.isArray(art.dislikes) ? art.dislikes : [];
              const hasLiked = profile ? likesList.includes(profile.uid) : false;
              const hasDisliked = profile ? dislikesList.includes(profile.uid) : false;

              return (
                <article
                  key={art.id}
                  id={`article-item-${art.id}`}
                  className="bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition-all p-6 sm:p-7"
                >
                  {/* Instagram-style Author Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      {art.authorPhotoURL ? (
                        <img
                          src={art.authorPhotoURL}
                          alt={art.authorName}
                          className="w-10 h-10 rounded-full object-cover border border-sky-200 shadow-xs"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#006494] to-[#00A8E8] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          {art.authorName ? art.authorName.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#051923] hover:text-[#00A8E8] transition-colors">
                            {art.authorName}
                          </span>
                          {art.authorHandle && (
                            <span className="text-xs text-slate-400 font-mono">
                              @{art.authorHandle.replace(/^@/, '')}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(art.ts)}</span>
                        </div>
                      </div>
                    </div>

                    {art.category && (
                      <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full border border-sky-100 uppercase tracking-wider text-[10px]">
                        {art.category}
                      </span>
                    )}
                  </div>

                  {/* Article Title */}
                  <h2
                    onClick={() => onOpenArticle(art.id)}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#051923] hover:text-[#006494] transition-colors cursor-pointer leading-snug"
                  >
                    {art.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    onClick={() => onOpenArticle(art.id)}
                    className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 cursor-pointer"
                  >
                    {art.text}
                  </p>

                  {/* Action Bar (Reactions & Comments Link - strictly NO delete button) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    {/* Likes & Dislikes */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleReaction(e, art.id, 'like')}
                        title="Like this article"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                          hasLiked
                            ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{likesList.length}</span>
                      </button>

                      <button
                        onClick={(e) => handleReaction(e, art.id, 'dislike')}
                        title="Dislike this article"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                          hasDisliked
                            ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                        <span>{dislikesList.length}</span>
                      </button>
                    </div>

                    {/* Right side navigation buttons */}
                    <div className="flex items-center gap-2.5">
                      {/* Separate Comments Page Link */}
                      <button
                        id={`open-comments-btn-${art.id}`}
                        onClick={() => onOpenComments(art.id)}
                        className="flex items-center gap-1.5 text-xs font-bold bg-[#E1F5FE] hover:bg-[#BEE9E8] text-[#006494] px-3.5 py-1.5 rounded-full border border-sky-200 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>COMMENTS</span>
                      </button>

                      {/* Read Full Article */}
                      <button
                        onClick={() => onOpenArticle(art.id)}
                        className="flex items-center gap-1 text-xs font-bold text-[#00A8E8] hover:text-[#006494] px-2 py-1 transition-colors cursor-pointer"
                      >
                        <span>{t('read_more')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
