import React, { useState } from 'react';
import {
  User,
  Camera,
  LogOut,
  Check,
  AlertCircle,
  Sparkles,
  PenTool,
  ShieldCheck,
  Calendar,
  AtSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface MyAccountProps {
  lang: Language;
  onNavigateToWrite: () => void;
  onNavigateToArticles: () => void;
}

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
];

export const MyAccount: React.FC<MyAccountProps> = ({
  lang,
  onNavigateToWrite,
  onNavigateToArticles
}) => {
  const { profile, signUp, logIn, logOut, updateUserProfile } = useAuth();
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  // Form states
  const [displayName, setDisplayName] = useState('');
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(PRESET_AVATARS[0]);

  // Profile Edit states
  const [editName, setEditName] = useState(profile?.displayName || '');
  const [editHandle, setEditHandle] = useState(profile?.handle || '');
  const [editPhoto, setEditPhoto] = useState(profile?.photoURL || '');
  const [editBio, setEditBio] = useState(profile?.bio || '');

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;

  // Handle local file upload for avatar
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, forEdit = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      setStatusMsg({ type: 'error', text: 'Rasm hajmi 4 MB dan oshmasligi kerak.' });
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (forEdit) {
        setEditPhoto(result);
      } else {
        setSelectedAvatar(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!displayName.trim() || !email.trim() || password.length < 6) {
      setStatusMsg({ type: 'error', text: 'Iltimos, ism, to\'g\'ri email va kamida 6 belgili parol kiriting.' });
      return;
    }

    setLoading(true);
    try {
      const finalHandle = handle.trim() || displayName.trim().toLowerCase().replace(/\s+/g, '_');
      await signUp(displayName.trim(), finalHandle, email.trim(), password, selectedAvatar);
      setStatusMsg({ type: 'success', text: 'Akkauntingiz muvaffaqiyatli yaratildi!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Xatolik yuz berdi.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!email.trim() || !password) {
      setStatusMsg({ type: 'error', text: 'Email va parolni kiriting.' });
      return;
    }

    setLoading(true);
    try {
      await logIn(email.trim(), password);
      setStatusMsg({ type: 'success', text: 'Muvaffaqiyatli kirdingiz!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Email yoki parol xato.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!editName.trim()) {
      setStatusMsg({ type: 'error', text: 'Ism bo\'sh bo\'lishi mumkin emas.' });
      return;
    }

    setLoading(true);
    try {
      await updateUserProfile({
        displayName: editName.trim(),
        handle: editHandle.trim() || editName.trim().toLowerCase().replace(/\s+/g, '_'),
        photoURL: editPhoto,
        bio: editBio.trim()
      });
      setStatusMsg({ type: 'success', text: 'Profilingiz yangilandi!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Saqlashda xatolik yuz berdi.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#E1F5FE]/30 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-1">
            ACCOUNT & PROFILE
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#051923]">
            {t('my_account_title')}
          </h1>
          <p className="mt-2 text-sm text-[#006494]/85 max-w-lg mx-auto leading-relaxed">
            Shaxsiy profilingizni sozlang. Siz yozgan har bir maqola va izoh yonida sizning rasmingiz va nikingiz (Instagram postidek) namoyon bo'ladi.
          </p>
        </div>

        {statusMsg && (
          <div
            className={`mb-6 p-4 rounded-2xl text-xs sm:text-sm flex items-center gap-2.5 ${
              statusMsg.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}
          >
            {statusMsg.type === 'success' ? (
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            )}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* LOGGED IN VIEW */}
        {profile ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-sky-100">
            {/* Instagram-style Profile Header Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
              <div className="relative group">
                {profile.photoURL ? (
                  <img
                    src={profile.photoURL}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-4 border-sky-200 shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#006494] to-[#00A8E8] text-white text-3xl font-bold flex items-center justify-center shadow-md">
                    {profile.displayName.charAt(0).toUpperCase()}
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-[#00A8E8] text-white p-2 rounded-full shadow-md cursor-pointer hover:bg-[#006494] transition-transform hover:scale-110">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, true)}
                  />
                </label>
              </div>

              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
                  <h2 className="font-serif text-2xl font-bold text-[#051923]">
                    {profile.displayName}
                  </h2>
                  <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-sky-200">
                    <ShieldCheck className="w-3 h-3 text-[#00A8E8]" />
                    Community Member
                  </span>
                </div>

                <div className="text-sm font-mono text-[#00A8E8] mb-2">
                  @{profile.handle.replace(/^@/, '')}
                </div>

                {profile.email && (
                  <div className="text-xs text-slate-400 mb-3">
                    {profile.email}
                  </div>
                )}

                {profile.bio && (
                  <p className="text-xs sm:text-sm text-slate-600 italic max-w-md">
                    "{profile.bio}"
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <button
                    onClick={onNavigateToWrite}
                    className="flex items-center gap-1.5 bg-[#00A8E8] hover:bg-[#006494] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    WRITE AN ARTICLE
                  </button>

                  <button
                    onClick={logOut}
                    className="flex items-center gap-1.5 bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>

            {/* Edit Profile Form */}
            <form onSubmit={handleSaveProfile} className="mt-8 space-y-5">
              <h3 className="font-serif text-lg font-bold text-[#051923] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00A8E8]" />
                Profil ma'lumotlarini o'zgartirish
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Display Name (Ism-familiya) *
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Username / Handle (Nik) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-mono">@</span>
                  <input
                    type="text"
                    required
                    value={editHandle.replace(/^@/, '')}
                    onChange={(e) => setEditHandle(e.target.value.replace(/^@/, ''))}
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-8 pr-4 py-2.5 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Avatar Tanlash (yoki fayldan yuklash)
                </label>
                <div className="flex flex-wrap gap-2.5 items-center mb-3">
                  {PRESET_AVATARS.map((url, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setEditPhoto(url)}
                      className={`relative w-11 h-11 rounded-full overflow-hidden border-2 transition-transform hover:scale-110 cursor-pointer ${
                        editPhoto === url ? 'border-[#00A8E8] ring-2 ring-[#00A8E8]/40 scale-105' : 'border-transparent opacity-80'
                      }`}
                    >
                      <img src={url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006494] bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3.5 py-2 rounded-xl cursor-pointer">
                    <Camera className="w-4 h-4" />
                    O'z rasmingizni tanlang (Fayldan)
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, true)}
                    />
                  </label>
                  {editPhoto && (
                    <span className="text-[11px] text-emerald-600 font-semibold">
                      ✓ Rasm tanlangan
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Bio / Qisqa ma'lumot (ixtiyoriy)
                </label>
                <input
                  type="text"
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  placeholder="Masalan: Ta'lim tarafdori va bolalar huquqlari faoli..."
                  className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00A8E8] hover:bg-[#006494] disabled:opacity-50 text-white font-bold text-sm py-3 rounded-full shadow-md transition-all cursor-pointer"
              >
                {loading ? 'Saqlanmoqda...' : 'SAVE PROFILE'}
              </button>
            </form>
          </div>
        ) : (
          /* LOGGED OUT: SIGN UP / LOG IN VIEW */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-sky-100">
            {/* Toggle Tabs */}
            <div className="flex border-b border-slate-100 mb-8">
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`flex-1 pb-3.5 font-bold text-sm text-center border-b-2 transition-colors cursor-pointer ${
                  authMode === 'signup'
                    ? 'border-[#00A8E8] text-[#006494]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Create Account (Ro'yxatdan o'tish)
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 pb-3.5 font-bold text-sm text-center border-b-2 transition-colors cursor-pointer ${
                  authMode === 'login'
                    ? 'border-[#00A8E8] text-[#006494]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Log In (Tizimga kirish)
              </button>
            </div>

            {authMode === 'signup' ? (
              <form onSubmit={handleSignUp} className="space-y-4">
                {/* Avatar Preview & Selection */}
                <div className="text-center mb-6">
                  <div className="inline-block relative mb-3">
                    <img
                      src={selectedAvatar}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full object-cover border-3 border-sky-300 shadow-md mx-auto"
                    />
                    <label className="absolute bottom-0 right-0 bg-[#00A8E8] text-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-[#006494]">
                      <Camera className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, false)}
                      />
                    </label>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">
                    Profil rasmini tanlang yoki kompyuterdan yuklang:
                  </div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {PRESET_AVATARS.map((url, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedAvatar(url)}
                        className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-transform hover:scale-110 cursor-pointer ${
                          selectedAvatar === url ? 'border-[#00A8E8] ring-2 ring-[#00A8E8]/40 scale-105' : 'border-transparent opacity-75'
                        }`}
                      >
                        <img src={url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ism-familiyangiz (Display Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Masalan: Azizbek Mahmudov"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Username / Nik (Handle)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-mono">@</span>
                    <input
                      type="text"
                      value={handle.replace(/^@/, '')}
                      onChange={(e) => setHandle(e.target.value.replace(/^@/, ''))}
                      placeholder="azizbek_m"
                      className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-8 pr-4 py-2.5 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parol (kamida 6 ta belgi) *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#00A8E8] hover:bg-[#006494] disabled:opacity-50 text-white font-bold text-sm py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  {loading ? 'Yaratilmoqda...' : 'CREATE ACCOUNT'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parol *
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00A8E8]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#006494] hover:bg-[#00A8E8] disabled:opacity-50 text-white font-bold text-sm py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  {loading ? 'Kirilmoqda...' : 'LOG IN'}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
