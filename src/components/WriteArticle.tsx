import React, { useState } from 'react';
import { ArrowLeft, PenTool, AlertCircle, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { CATEGORIES } from '../data/topics';
import { useAuth } from '../context/AuthContext';
import { publishArticle } from '../lib/postsService';

interface WriteArticleProps {
  lang: Language;
  initialTopicTitle?: string;
  onBack: () => void;
  onArticleCreated: (articleId: string) => void;
  onNavigateToAccount: () => void;
}

export const WriteArticle: React.FC<WriteArticleProps> = ({
  lang,
  initialTopicTitle = '',
  onBack,
  onArticleCreated,
  onNavigateToAccount
}) => {
  const { profile } = useAuth();
  const [title, setTitle] = useState(initialTopicTitle ? `Fikr: ${initialTopicTitle}` : '');
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fallback temporary info if not signed in yet
  const [guestName, setGuestName] = useState('');
  const [guestHandle, setGuestHandle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const effectiveName = profile?.displayName || guestName.trim();
    const effectiveHandle = profile?.handle || guestHandle.trim() || effectiveName.toLowerCase().replace(/\s+/g, '_');
    const effectivePhoto = profile?.photoURL || '';

    if (!effectiveName) {
      setError('Iltimos, ismingizni kiriting yoki "My Account" sahifasida ro\'yxatdan o\'ting.');
      return;
    }

    if (!title.trim() || title.trim().length < 5) {
      setError('Maqola sarlavhasi kamida 5 ta belgidan iborat bo\'lishi kerak.');
      return;
    }

    if (!text.trim() || text.trim().length < 30) {
      setError('Maqola matni kamida 30 ta belgidan iborat bo\'lishi kerak.');
      return;
    }

    setSubmitting(true);
    try {
      const newId = await publishArticle({
        title: title.trim(),
        category,
        text: text.trim(),
        authorId: profile?.uid || 'guest_' + Date.now(),
        authorName: effectiveName,
        authorHandle: effectiveHandle,
        authorPhotoURL: effectivePhoto
      });

      onArticleCreated(newId);
    } catch (err: any) {
      setError('Maqolani joylashtirishda xatolik yuz berdi: ' + (err.message || ''));
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#E1F5FE]/30 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#006494] hover:text-[#00A8E8] mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Orqaga (Back)
        </button>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-sky-100">
          <div className="flex items-center gap-2.5 text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
            <PenTool className="w-4 h-4" />
            <span>COMMUNITY PUBLISHING</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#051923]">
            WRITE AN ARTICLE
          </h1>

          <p className="mt-2 text-sm text-[#006494]/85 leading-relaxed">
            Create and publish an article visible to the entire community. Your account name and profile photo will appear beside your article.
          </p>

          {/* Account Status / Identity Card */}
          {profile ? (
            <div className="mt-6 p-4 bg-sky-50 rounded-2xl border border-sky-200/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {profile.photoURL ? (
                  <img
                    src={profile.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border border-sky-300"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#00A8E8] text-white flex items-center justify-center font-bold">
                    {profile.displayName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="font-bold text-sm text-[#051923]">
                    {profile.displayName}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    @{profile.handle}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Verified Account
              </span>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Siz tizimga kirmagansiz. O'z rasmingiz va nikingiz chiqishi uchun <strong>My Account</strong> sahifasidan kiring yoki quyida ismingizni yozing:
                </span>
              </div>
              <button
                type="button"
                onClick={onNavigateToAccount}
                className="shrink-0 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-full"
              >
                Go to My Account
              </button>
            </div>
          )}

          {error && (
            <div className="mt-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {!profile && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name (Ismingiz) *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Masalan: Sardor Aliyev"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Username / Handle (Nik)
                  </label>
                  <input
                    type="text"
                    value={guestHandle}
                    onChange={(e) => setGuestHandle(e.target.value)}
                    placeholder="masalan: sardor_a"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Article Title (Maqola Sarlavhasi) *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Maqolangiz sarlavhasi..."
                className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-3 text-base font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Category (Kategoriya)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label[lang] || cat.label.en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Article Content (Maqola matni) *
              </label>
              <textarea
                required
                rows={9}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Fikr va maqolangizni bu yerga yozing..."
                className="w-full bg-slate-50 border border-sky-200 rounded-xl p-4 text-sm leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8] focus:bg-white transition-all"
              />
            </div>

            <p className="text-[11px] text-slate-500">
              * Yozilgan barcha maqolalar xavfsiz saqlanadi. Hech kim boshqalarning maqolasini o'chira olmaydi.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#00A8E8] hover:bg-[#006494] disabled:opacity-50 text-white font-bold text-sm py-3.5 rounded-full shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              {submitting ? 'PUBLISHING...' : 'PUBLISH ARTICLE'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
