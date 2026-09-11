import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft,
  Send,
  ThumbsUp,
  ThumbsDown,
  CornerDownRight,
  X,
  User,
  MoreHorizontal,
  Reply,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Article, Comment, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { useAuth } from '../context/AuthContext';
import { subscribeToComments, postComment, toggleCommentReaction } from '../lib/postsService';

interface CommentsPageProps {
  article: Article;
  lang: Language;
  onBack: () => void;
  onNavigateToAccount: () => void;
}

export const CommentsPage: React.FC<CommentsPageProps> = ({
  article,
  lang,
  onBack,
  onNavigateToAccount
}) => {
  const { profile } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Telegram-style reply target state
  const [replyTarget, setReplyTarget] = useState<Comment | null>(null);

  // Track which comment has its 3-dot menu open
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Fallback guest credentials if not logged in
  const [guestName, setGuestName] = useState('');
  const [guestHandle, setGuestHandle] = useState('');

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  useEffect(() => {
    const unsub = subscribeToComments(article.id, (list) => {
      setComments(list);
    });
    return () => unsub();
  }, [article.id]);

  // Handle Telegram-style Reply trigger
  const handleTriggerReply = (comment: Comment) => {
    setReplyTarget(comment);
    setActiveMenuId(null);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleReaction = async (commentId: string, type: 'like' | 'dislike') => {
    const effectiveUserId = profile?.uid || localStorage.getItem('asraworld_guest_uid') || 'anon_' + Date.now();
    if (!profile && !localStorage.getItem('asraworld_guest_uid')) {
      localStorage.setItem('asraworld_guest_uid', effectiveUserId);
    }
    await toggleCommentReaction(commentId, effectiveUserId, type);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const effectiveName = profile?.displayName || guestName.trim();
    const effectiveHandle = profile?.handle || guestHandle.trim() || effectiveName.toLowerCase().replace(/\s+/g, '_');
    const effectivePhoto = profile?.photoURL || '';

    if (!effectiveName) {
      alert('Iltimos, ismingizni kiriting yoki "My Account" sahifasidan kiring.');
      return;
    }

    setSubmitting(true);
    try {
      await postComment({
        articleId: article.id,
        parentId: replyTarget ? replyTarget.id : null,
        authorId: profile?.uid || 'guest_' + Date.now(),
        authorName: effectiveName,
        authorHandle: effectiveHandle,
        authorPhotoURL: effectivePhoto,
        text: commentText.trim(),
        replyToAuthor: replyTarget ? (replyTarget.authorHandle || replyTarget.authorName) : undefined
      });

      setCommentText('');
      setReplyTarget(null);
    } catch (err: any) {
      alert('Izoh qoldirishda xatolik yuz berdi: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString(lang === 'uz' ? 'uz-UZ' : lang === 'ru' ? 'ru-RU' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Build comment tree (top-level and nested replies)
  const topLevelComments = comments.filter((c) => !c.parentId);
  const getReplies = (parentId: string) => comments.filter((c) => c.parentId === parentId);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#E1F5FE]/30 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#006494] hover:text-[#00A8E8] mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Maqolaga qaytish (Back to Article)
        </button>

        {/* Article Summary Banner */}
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#00A8E8] uppercase">
              Muhokama qilinayotgan maqola:
            </span>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#051923]">
              {article.title}
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              Muallif: <span className="font-semibold text-slate-700">{article.authorName}</span>
            </div>
          </div>
          <div className="shrink-0 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full border border-sky-200">
            {(comments || []).length} ta fikr-mulohaza
          </div>
        </div>

        {/* Write Comment Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-sky-100 mb-8">
          <h3 className="font-serif text-lg font-bold text-[#051923] mb-3">
            Fikr bildirish (Write a Comment)
          </h3>

          {/* Account status note */}
          {!profile && (
            <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>O'z rasmingiz va nikingiz chiqishi uchun tizimga kiring:</span>
              </div>
              <button
                onClick={onNavigateToAccount}
                className="shrink-0 text-xs font-bold text-amber-800 underline hover:text-amber-950"
              >
                Go to My Account
              </button>
            </div>
          )}

          {/* Telegram-style Reply Banner */}
          {replyTarget && (
            <div className="mb-3.5 p-3 bg-sky-50 border-l-4 border-[#00A8E8] rounded-r-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2">
              <div className="text-xs">
                <div className="font-bold text-[#006494] flex items-center gap-1.5">
                  <Reply className="w-3.5 h-3.5" />
                  <span>Javob berilmoqda: @{replyTarget.authorHandle || replyTarget.authorName}</span>
                </div>
                <div className="text-slate-600 truncate max-w-md mt-0.5 italic">
                  "{replyTarget.text}"
                </div>
              </div>
              <button
                type="button"
                onClick={() => setReplyTarget(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-sky-100 transition-colors cursor-pointer"
                title="Cancel reply"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <form onSubmit={handleSubmitComment} className="space-y-3">
            {!profile && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ismingiz (Display name)..."
                  className="bg-slate-50 border border-sky-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                />
                <input
                  type="text"
                  value={guestHandle}
                  onChange={(e) => setGuestHandle(e.target.value)}
                  placeholder="Nik / Handle (masalan: @alisher)..."
                  className="bg-slate-50 border border-sky-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                />
              </div>
            )}

            <div className="relative">
              <textarea
                ref={inputRef}
                required
                rows={3}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={
                  replyTarget
                    ? `Reply to @${replyTarget.authorHandle || replyTarget.authorName}...`
                    : 'Fikringizni shu yerga yozing...'
                }
                className="w-full bg-slate-50 border border-sky-200 rounded-2xl p-4 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all resize-y"
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <span className="text-[11px] text-slate-400">
                * Barcha fikrlar saqlanadi — o'chirish imkoniyati mavjud emas.
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 bg-[#00A8E8] hover:bg-[#006494] disabled:opacity-50 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'Yuborilmoqda...' : 'POST COMMENT'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#051923] mb-4">
            Barcha izohlar ({comments.length})
          </h3>

          {comments.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-sky-100 text-slate-400 text-sm">
              Hozircha hech qanday izoh yozilmagan. Birinchi bo'lib o'z fikringizni bildiring!
            </div>
          ) : (
            topLevelComments.map((comm) => {
              const replies = getReplies(comm.id);
              const commLikes = Array.isArray(comm?.likes) ? comm.likes : [];
              const commDislikes = Array.isArray(comm?.dislikes) ? comm.dislikes : [];
              const hasLiked = profile ? commLikes.includes(profile.uid) : false;
              const hasDisliked = profile ? commDislikes.includes(profile.uid) : false;

              return (
                <div key={comm.id} className="space-y-3">
                  {/* Top Level Comment Card */}
                  <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs relative">
                    {/* Instagram-style Comment Author Header */}
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        {comm.authorPhotoURL ? (
                          <img
                            src={comm.authorPhotoURL}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover border border-sky-200 shadow-xs"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#006494] to-[#00A8E8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                            {comm.authorName ? comm.authorName.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs sm:text-sm text-[#051923]">
                              {comm.authorName}
                            </span>
                            {comm.authorHandle && (
                              <span className="text-[11px] text-slate-400 font-mono">
                                @{comm.authorHandle.replace(/^@/, '')}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {formatDate(comm.ts)}
                          </div>
                        </div>
                      </div>

                      {/* Telegram-style 3-dot / 3-dash menu button */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setActiveMenuId(activeMenuId === comm.id ? null : comm.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Options / Reply"
                        >
                          <MoreHorizontal className="w-5 h-5 tracking-widest font-mono" />
                        </button>

                        {/* Telegram-style Reply Popup */}
                        {activeMenuId === comm.id && (
                          <div className="absolute right-0 top-8 z-30 bg-white rounded-xl shadow-xl border border-sky-100 p-1.5 min-w-[140px] animate-in fade-in zoom-in-95">
                            <button
                              type="button"
                              onClick={() => handleTriggerReply(comm)}
                              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#006494] hover:bg-sky-50 rounded-lg transition-colors cursor-pointer text-left"
                            >
                              <Reply className="w-3.5 h-3.5" />
                              <span>↩ Reply (Javob)</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Comment Content */}
                    <p className="text-sm text-slate-800 leading-relaxed pl-10 whitespace-pre-wrap">
                      {comm.text}
                    </p>

                    {/* Actions: Likes, Dislikes, and direct Reply button */}
                    <div className="mt-3 pl-10 flex items-center gap-3">
                      <button
                        onClick={() => handleReaction(comm.id, 'like')}
                        className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                          hasLiked
                            ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{commLikes.length}</span>
                      </button>

                      <button
                        onClick={() => handleReaction(comm.id, 'dislike')}
                        className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                          hasDisliked
                            ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>{commDislikes.length}</span>
                      </button>

                      <button
                        onClick={() => handleTriggerReply(comm)}
                        className="flex items-center gap-1 text-xs font-bold text-[#00A8E8] hover:text-[#006494] px-2 py-1 transition-colors cursor-pointer"
                      >
                        <Reply className="w-3 h-3" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>

                  {/* Nested Replies (Telegram-style threaded indentation) */}
                  {replies.length > 0 && (
                    <div className="pl-6 sm:pl-10 space-y-2.5 border-l-2 border-sky-200/80 ml-4 sm:ml-5">
                      {replies.map((reply) => {
                        const replyLikes = Array.isArray(reply?.likes) ? reply.likes : [];
                        const replyDislikes = Array.isArray(reply?.dislikes) ? reply.dislikes : [];
                        const replyLiked = profile ? replyLikes.includes(profile.uid) : false;
                        const replyDisliked = profile ? replyDislikes.includes(profile.uid) : false;

                        return (
                          <div
                            key={reply.id}
                            className="bg-white/90 rounded-2xl p-4 border border-sky-100/80 shadow-2xs relative"
                          >
                            {/* Telegram Quote Box */}
                            {reply.replyToAuthor && (
                              <div className="mb-2 px-2.5 py-1 bg-sky-50 border-l-2 border-[#00A8E8] rounded-r text-[11px] text-[#006494] flex items-center gap-1 font-mono">
                                <CornerDownRight className="w-3 h-3 shrink-0" />
                                <span>In reply to @{reply.replyToAuthor.replace(/^@/, '')}</span>
                              </div>
                            )}

                            {/* Author */}
                            <div className="flex items-center justify-between gap-3 mb-2">
                              <div className="flex items-center gap-2">
                                {reply.authorPhotoURL ? (
                                  <img
                                    src={reply.authorPhotoURL}
                                    alt=""
                                    className="w-7 h-7 rounded-full object-cover border border-sky-200"
                                  />
                                ) : (
                                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#006494] to-[#00A8E8] text-white flex items-center justify-center font-bold text-[11px]">
                                    {reply.authorName ? reply.authorName.charAt(0).toUpperCase() : <User className="w-3 h-3" />}
                                  </div>
                                )}
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-bold text-xs text-[#051923]">
                                      {reply.authorName}
                                    </span>
                                    {reply.authorHandle && (
                                      <span className="text-[10px] text-slate-400 font-mono">
                                        @{reply.authorHandle.replace(/^@/, '')}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[9px] text-slate-400">
                                    {formatDate(reply.ts)}
                                  </div>
                                </div>
                              </div>

                              {/* 3-dot menu */}
                              <div className="relative">
                                <button
                                  type="button"
                                  onClick={() => setActiveMenuId(activeMenuId === reply.id ? null : reply.id)}
                                  className="p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer"
                                  title="Reply"
                                >
                                  <MoreHorizontal className="w-4 h-4 font-mono" />
                                </button>
                                {activeMenuId === reply.id && (
                                  <div className="absolute right-0 top-6 z-30 bg-white rounded-xl shadow-lg border border-sky-100 p-1 min-w-[130px]">
                                    <button
                                      type="button"
                                      onClick={() => handleTriggerReply(reply)}
                                      className="w-full flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-[#006494] hover:bg-sky-50 rounded cursor-pointer"
                                    >
                                      <Reply className="w-3 h-3" />
                                      <span>↩ Reply</span>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Reply Text */}
                            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pl-9 whitespace-pre-wrap">
                              {reply.text}
                            </p>

                            {/* Actions */}
                            <div className="mt-2 pl-9 flex items-center gap-2">
                              <button
                                onClick={() => handleReaction(reply.id, 'like')}
                                className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                                  replyLiked
                                    ? 'bg-sky-500 text-white border-sky-500'
                                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                <ThumbsUp className="w-2.5 h-2.5" />
                                <span>{replyLikes.length}</span>
                              </button>

                              <button
                                onClick={() => handleReaction(reply.id, 'dislike')}
                                className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                                  replyDisliked
                                    ? 'bg-rose-500 text-white border-rose-500'
                                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                <ThumbsDown className="w-2.5 h-2.5" />
                                <span>{replyDislikes.length}</span>
                              </button>

                              <button
                                onClick={() => handleTriggerReply(reply)}
                                className="text-[11px] font-bold text-[#00A8E8] hover:text-[#006494] px-1.5 py-0.5 cursor-pointer"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
